import { Application, Assets, Container, Sprite } from 'pixi.js';
import { useCallback, useEffect, useRef } from 'react';
import PixiDevtoolsHandler from '../hooks/PixiDevtoolsHandler.tsx';
import AssetsLoader, { AssetsToLoad } from '../hooks/AssetsLoader.tsx';
import gsap, { Power2 } from 'gsap';

const WelcomePage = () => {
  const CANVAS_WIDTH = 1920;
  const CANVAS_HEIGHT = 1080;
  const CANVAS_SCALE: number = 0.6;

  const pageContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const gameContainerRef = useRef<Container>(new Container());

  // const handleResize = useCallback((width: number): void => {
  //   if (!gameContainerRef.current) return;
  //   // gameContainerRef.current.height =
  //   //   gameContainerRef.current.height / gameContainerRef.current.width;
  //   // gameContainerRef.current.width = width;
  // }, []);

  const initBgAnimations = useCallback((): void => {
    const bgContainer = new Container();
    gameContainerRef.current.addChild(bgContainer);

    const background = new Sprite(Assets.get('tilesBg'));
    background.anchor.set(0.5);
    bgContainer.addChild(background);
    background.scale.set(0.8);

    background.position.set(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);

    gsap.to(background.scale, {
      duration: 1,
      x: CANVAS_SCALE,
      y: CANVAS_SCALE,
      ease: Power2.easeOut,
    });
    gsap.to(background.skew, {
      duration: 1,
      x: -0.15,
      y: 0.02,
      ease: Power2.easeOut,
    });
    gsap.to(background.skew, {
      x: -0.2,
      y: 0.16,
      duration: 6,
      yoyo: true,
      delay: 1,
      ease: Power2.easeInOut,
      repeat: -1,
    });

    const shadow = new Sprite(Assets.get('shadowOverlay'));
    shadow.rotation = Math.PI;
    shadow.anchor.set(0.5);
    shadow.position.set(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
    shadow.scale.set(1.7);
    shadow.alpha = 0.8;
    bgContainer.addChild(shadow);
    gsap.to(shadow.scale, {
      duration: 1,
      x: CANVAS_SCALE + 0.5,
      y: CANVAS_SCALE + 0.5,
      ease: Power2.easeOut,
    });
    gsap.to(shadow.skew, {
      duration: 1,
      x: -0.1,
      y: 0.01,
      ease: Power2.easeOut,
    });
    gsap.to(shadow.skew, {
      x: -0.2,
      y: 0.18,
      duration: 6,
      yoyo: true,
      delay: 1.3,
      ease: Power2.easeInOut,
      repeat: -1,
    });

    const rainbowOverlay = new Sprite(Assets.get('rainbowOverlay'));
    rainbowOverlay.anchor.set(0.5);
    rainbowOverlay.position.set(CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
    rainbowOverlay.scale.set(1);
    rainbowOverlay.alpha = 0.5;
    bgContainer.addChild(rainbowOverlay);
    gsap.to(rainbowOverlay.scale, {
      duration: 1,
      x: CANVAS_SCALE - 0.1,
      y: CANVAS_SCALE - 0.1,
      ease: Power2.easeOut,
    });
  }, []);

  const initAnimation = useCallback((): void => {
    initBgAnimations();
  }, [initBgAnimations]);

  const initCanvas = useCallback(async () => {
    if (appRef.current) return;
    const app = new Application();
    await app.init({
      backgroundColor: 0xffffff,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      // resizeTo: window,
    });
    appRef.current = app;
    // For PixiJS devtools
    PixiDevtoolsHandler(app);

    if (pageContainer.current && pageContainer.current.children.length < 1) {
      pageContainer.current.appendChild(app.canvas);
    }
    // Load assets
    AssetsLoader(localAssets, () => {
      initAnimation();
      // handleResize(CANVAS_WIDTH * 1.2);
      app.stage.addChild(gameContainerRef.current);
    });

    window.addEventListener('resize', () => {
      // handleResize(CANVAS_WIDTH * CANVAS_SCALE);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [initAnimation]);

  useEffect(() => {
    initCanvas();
    return () => {
      if (appRef.current) {
        appRef.current.destroy(true, { children: true });
        appRef.current = null;
      }
      if (gameContainerRef.current) {
        gameContainerRef.current.destroy(true);
        gameContainerRef.current = new Container();
      }
    };
  }, [initCanvas]);

  return <div ref={pageContainer}></div>;
};

const localAssets: AssetsToLoad[] = [
  {
    alias: 'tilesBg',
    src: 'src/assets/photos/tiles-background.jpg',
  },
  {
    alias: 'shadowOverlay',
    src: 'src/assets/photos/shadow-overlay.png',
  },
  {
    alias: 'rainbowOverlay',
    src: 'src/assets/photos/rainbow-overlay.jpg',
  },
];

export default WelcomePage;

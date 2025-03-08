import { Application, Container } from 'pixi.js';
import { useCallback, useEffect, useRef } from 'react';
import PixiDevtoolsHandler from '../hooks/PixiDevtoolsHandler.tsx';
import AssetsLoader, { AssetsToLoad } from '../hooks/AssetsLoader.tsx';
import {
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_WIDTH,
} from '../commons/WelcomePageConstants.ts';
import WelcomePageAnim from '../components/welcome-page/WelcomePageAnimation.tsx';

const WelcomePage = () => {
  const pageContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const gameContainerRef = useRef<Container>(new Container());
  const animContainer = useRef<Container>(new Container());

  const handleResize = useCallback((): void => {
    if (!appRef.current) return;
    const curWidth = window.innerWidth;
    const canvasWidth = appRef.current.canvas.width;
    const scaleX = curWidth / canvasWidth;

    // const differance = -(canvasWidth - curWidth) * 0.5;
    // const differance = (window.innerHeight - appRef.current.canvas.height) / 2;
    // console.log(appRef.current.canvas, differance);
    // appRef.current.canvas.style.transform = `translate(0px, ${differance}px)`;

    appRef.current.canvas.style.scale = `${scaleX}`;
  }, []);

  const initAnimation = useCallback((): void => {
    animContainer.current = WelcomePageAnim();
    gameContainerRef.current.addChild(animContainer.current);
  }, []);

  const initCanvas = useCallback(async () => {
    if (appRef.current) return;
    const app = new Application();
    await app.init({
      backgroundColor: 0x000000,
      width: WELCOME_PAGE_CANVAS_WIDTH,
      height: WELCOME_PAGE_CANVAS_HEIGHT,
    });
    appRef.current = app;

    // Disable scrolling only when hovering over the canvas
    app.canvas.addEventListener('wheel', (event) => event.preventDefault(), {
      passive: false,
    });

    app.canvas.addEventListener(
      'touchmove',
      (event) => event.preventDefault(),
      {
        passive: false,
      }
    );

    // For PixiJS devtools
    PixiDevtoolsHandler(app);

    if (pageContainer.current && pageContainer.current.children.length < 1) {
      pageContainer.current.className = 'welcome-page';
      pageContainer.current.appendChild(app.canvas);
    }
    // Load assets
    AssetsLoader(localAssets, () => {
      initAnimation();
      handleResize();
      app.stage.addChild(gameContainerRef.current);
    });

    window.addEventListener('resize', () => {
      handleResize();
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [handleResize, initAnimation]);

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
    src: 'src/assets/images/tiles-background.jpg',
  },
  {
    alias: 'shadowOverlay',
    src: 'src/assets/images/shadow-overlay.png',
  },
  {
    alias: 'rainbowOverlay',
    src: 'src/assets/images/rainbow-overlay.jpg',
  },
  {
    alias: 'rectange',
    src: 'src/assets/images/rectangle.png',
  },
  {
    alias: 'ball',
    src: 'src/assets/images/ball.png',
  },
];

export default WelcomePage;

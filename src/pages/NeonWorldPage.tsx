import { Application, Container } from 'pixi.js';
import { useCallback, useEffect, useRef } from 'react';
import PixiDevtoolsHandler from '../hooks/PixiDevtoolsHandler.tsx';
import AssetsLoader, { AssetsToLoad } from '../hooks/AssetsLoader.tsx';
import {
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT,
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH,
} from '../commons/constants/ColorChangingGalaxyConstants.ts';

const NeonWorldPage = () => {
  const pageContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const animationContainerRef = useRef<Container>(new Container());

  const handleResize = useCallback((): void => {
    if (!appRef.current) return;
    const curWidth = window.innerWidth;
    const canvasWidth = appRef.current.canvas.width;
    const scaleX = curWidth / canvasWidth;

    const curHeight = window.innerHeight;
    const canvasHeight = appRef.current.canvas.height;
    const differance =
      canvasHeight > curHeight
        ? (canvasHeight * scaleX - curHeight) * 0.5
        : -(curHeight - canvasHeight * scaleX) * 0.5;
    appRef.current.canvas.style.transform = `translate(0px, ${differance}px) scale(${scaleX})`;
  }, []);

  const initAnimation = useCallback((): void => {
    // const pageContainer = ColorChangingAnimationView();
    // animationContainerRef.current.addChild(pageContainer);
  }, []);

  const initCanvas = useCallback(async () => {
    if (appRef.current) return;
    const app = new Application();
    await app.init({
      backgroundColor: 0x000000,
      width: COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH,
      height: COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT,
    });
    appRef.current = app;
    app.stage.addChild(animationContainerRef.current);

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
      pageContainer.current.appendChild(app.canvas);
      app.canvas.className = 'neon-world-page-canvas';
    }
    // Load assets
    AssetsLoader(localAssets, () => {
      initAnimation();
      handleResize();
    });

    window.addEventListener('resize', () => {
      handleResize();
    });
  }, [handleResize, initAnimation]);

  useEffect(() => {
    initCanvas();
    return () => {
      if (appRef.current) {
        appRef.current.destroy(true, { children: true });
        appRef.current = null;
      }
      if (animationContainerRef.current) {
        animationContainerRef.current.destroy(true);
        animationContainerRef.current = new Container();
      }

      window.removeEventListener('resize', () => {});
    };
  }, [initCanvas]);

  return <div ref={pageContainer}></div>;
};

// const src = '/src/assets/images/';
const localAssets: AssetsToLoad[] = [
  // {
  //   alias: COLOR_CHANGING_ANIMATION_PAGE_ASSETS.galaxyBg,
  //   src: `${src}galaxy-bg.jpg`,
  // },
  // {
  //   alias: COLOR_CHANGING_ANIMATION_PAGE_ASSETS.rectange,
  //   src: `${src}rectangle.png`,
  // },
  // {
  //   alias: COLOR_CHANGING_ANIMATION_PAGE_ASSETS.ball,
  //   src: `${src}/ball.png`,
  // },
];

export default NeonWorldPage;

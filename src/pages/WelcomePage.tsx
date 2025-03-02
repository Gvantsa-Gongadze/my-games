import { Application, Container } from 'pixi.js';
import { useCallback, useEffect, useRef } from 'react';
import PixiDevtoolsHandler from '../hooks/PixiDevtoolsHandler.tsx';
import AssetsLoader, { AssetsToLoad } from '../hooks/AssetsLoader.tsx';
import WelcomePageAnimation from '../components/welcome-page/WelcomePageAnimation.tsx';
import {
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_WIDTH,
} from '../constants/WelcomePageConstants.ts';

const WelcomePage = () => {
  const pageContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const gameContainerRef = useRef<Container>(new Container());
  const animContainer = useRef<Container>(new Container());

  // const handleResize = useCallback((width: number): void => {
  //   if (!gameContainerRef.current) return;
  //   // gameContainerRef.current.height =
  //   //   gameContainerRef.current.height / gameContainerRef.current.width;
  //   // gameContainerRef.current.width = width;
  // }, []);

  const initAnimation = useCallback((): void => {
    animContainer.current = new WelcomePageAnimation();
    gameContainerRef.current.addChild(animContainer.current);
  }, []);

  const initCanvas = useCallback(async () => {
    if (appRef.current) return;
    const app = new Application();
    await app.init({
      backgroundColor: 0xffffff,
      width: WELCOME_PAGE_CANVAS_WIDTH,
      height: WELCOME_PAGE_CANVAS_HEIGHT,
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

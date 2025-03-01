import { Application, Assets, Container, Sprite } from 'pixi.js';
import { useCallback, useEffect, useRef } from 'react';
import PixiDevtoolsHandler from '../hooks/PixiDevtoolsHandler.tsx';
import AssetsLoader, { AssetsToLoad } from '../hooks/AssetsLoader.tsx';

const WelcomePage = () => {
  const pageContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const gameContainerRef = useRef<Container>(new Container());

  const handleResize = useCallback((width: number): void => {
    if (!gameContainerRef.current) return;
    gameContainerRef.current.height =
      (gameContainerRef.current.height / gameContainerRef.current.width) *
      width;
    gameContainerRef.current.width = width;
  }, []);

  const initAnimation = useCallback((): void => {
    const background = new Sprite(Assets.get('tilesBg'));
    gameContainerRef.current.addChild(background);
  }, []);

  const initCanvas = useCallback(async () => {
    if (appRef.current) return;
    const app = new Application();
    await app.init({
      backgroundColor: 0x1099bb,
      resizeTo: window,
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
      handleResize(app.canvas.width);
      app.stage.addChild(gameContainerRef.current);
    });

    window.addEventListener('resize', () => {
      handleResize(app.canvas.width);
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
    src: 'src/assets/photos/tiles-background.jpg',
  },
  {
    alias: 'bg',
    src: 'src/assets/photos/tiles-background.jpg',
  },
];

export default WelcomePage;

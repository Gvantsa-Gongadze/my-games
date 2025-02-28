import { Application, Assets, Container, Sprite } from 'pixi.js';
import { useCallback, useEffect, useRef, useState } from 'react';
import PixiDevtoolsHandler from '../hooks/PixiDevtoolsHandler.tsx';
import AssetsLoader, { AssetsToLoad } from '../hooks/AssetsLoader.tsx';

const WelcomePage = () => {
  const pageContainer = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const [gameContainer, setGameContainer] = useState<Container>(
    new Container()
  );
  const handleResize = useCallback(
    (width: number): void => {
      gameContainer.height =
        (gameContainer.height / gameContainer.width) * width;
      gameContainer.width = width;
      setGameContainer(gameContainer);
    },
    [gameContainer]
  );

  const initCanvas = useCallback(async () => {
    const app = new Application();
    await app.init({
      backgroundColor: 0x1099bb,
      resizeTo: window,
    });
    appRef.current = appRef?.current ?? app;

    // For PixiJS devtools
    PixiDevtoolsHandler(app);

    if (pageContainer.current && pageContainer.current.children.length < 1) {
      pageContainer.current.appendChild(app.canvas);
    }
    // Load assets
    AssetsLoader(localAssets, () => {
      const background = new Sprite(Assets.get('tilesBg'));
      background.height =
        (background.height / background.width) * app.canvas.width;
      background.width = app.canvas.width;

      gameContainer.addChild(background);
      setGameContainer(gameContainer);
      app.stage.addChild(gameContainer);
    });

    window.addEventListener('resize', () => {
      handleResize(app.canvas.width);
    });
  }, [gameContainer, handleResize]);

  useEffect(() => {
    initCanvas();
    return () => {
      if (appRef.current) {
        appRef.current.destroy(true, { children: true });
        appRef.current = null;
      }
      window.removeEventListener('resize', () => {});
    };
  }, [gameContainer, initCanvas]);

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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, Assets, Container, Sprite } from 'pixi.js';
import { useCallback, useEffect, useRef } from 'react';

const WelcomePage = () => {
  const pageContainer = useRef<HTMLDivElement>(null);
  const pageRef = useRef<Application | null>(null);

  const initCanvas = useCallback(async () => {
    const app = new Application();
    await app.init({
      backgroundColor: 0x1099bb,
      resizeTo: window,
    });
    pageRef.current = app;

    // for PixiJS devtools
    if (!(globalThis as any).__PIXI_APP__) {
      (globalThis as any).__PIXI_APP__ = app;
    }

    if (!(globalThis as any).__PIXI_RENDERER__) {
      (globalThis as any).__PIXI_RENDERER__ = app.renderer;
    }

    const gameContainer = new Container();
    app.stage.addChild(gameContainer);

    if (pageContainer.current && pageContainer.current.children.length < 1) {
      pageContainer.current.appendChild(app.canvas);
    }

    Assets.load([
      {
        alias: 'tilesBg',
        src: 'src/assets/photos/tiles-background.jpg',
      },
      {
        alias: 'bg',
        src: 'src/assets/photos/tiles-background.jpg',
      },
    ]).then(() => {
      const background = new Sprite(Assets.get('tilesBg'));
      background.height =
        (background.height / background.width) * app.canvas.width;
      background.width = app.canvas.width;
      gameContainer.addChild(background);
    });
  }, []);

  useEffect(() => {
    initCanvas();

    // window.addEventListener('resize', (e) => {
    //   console.log(e)
    // })
    return () => {
      if (pageRef.current) {
        pageRef.current.destroy(true, { children: true });
        pageRef.current = null;
      }
    };
  }, [initCanvas]);

  return <div ref={pageContainer}></div>;
};

export default WelcomePage;

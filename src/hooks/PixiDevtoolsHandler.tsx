import { Application, Renderer } from 'pixi.js';

interface GlobalThis {
  __PIXI_APP__: Application;
  __PIXI_RENDERER__: Renderer;
}

const PixiDevtoolsHandler = (app: Application) => {
  if (!(globalThis as unknown as GlobalThis).__PIXI_APP__) {
    (globalThis as unknown as GlobalThis).__PIXI_APP__ = app;
  }

  if (!(globalThis as unknown as GlobalThis).__PIXI_RENDERER__) {
    (globalThis as unknown as GlobalThis).__PIXI_RENDERER__ = app.renderer;
  }
};

export default PixiDevtoolsHandler;

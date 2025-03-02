import { Container } from 'pixi.js';
import BackgroundAnimation from './BackgroundAnimation';

class WelcomePageAnimation extends Container {
  constructor() {
    super();

    const bgAnimContainer = new BackgroundAnimation();
    this.addChild(bgAnimContainer);
  }

  maincAnimation = (): void => {};
}

export default WelcomePageAnimation;

import { Container } from 'pixi.js';
import BackgroundAnimation from './BackgroundAnimation';
import CubeAnimations from './CubeAnimations';

class WelcomePageAnimation extends Container {
  constructor() {
    super();

    const bgAnimContainer = new BackgroundAnimation();
    this.addChild(bgAnimContainer);

    const cubesAnimation = new CubeAnimations();
    this.addChild(cubesAnimation);
    cubesAnimation.position.set(500, 200);
  }
}

export default WelcomePageAnimation;

import { Container } from 'pixi.js';
import BackgroundAnimation from './BackgroundAnimation';
import CubeAnimations from './CubeAnimations';

const WelcomePageAnim = (): Container => {
  const welcomePageContainer = new Container();

  const bgAnimContainer = BackgroundAnimation();
  welcomePageContainer.addChild(bgAnimContainer);

  const cubesAnimation = CubeAnimations();
  welcomePageContainer.addChild(cubesAnimation);
  cubesAnimation.position.set(500, 200);

  return welcomePageContainer;
};

export default WelcomePageAnim;

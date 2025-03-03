import { Container } from 'pixi.js';
import BackgroundAnimation from './background/BackgroundAnimation.tsx';
import RectangleAnimations from './rectangles-bottom/RectangleAnimations.tsx';
import {
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_WIDTH,
} from '../../commons/WelcomePageConstants.ts';

const WelcomePageAnim = (): Container => {
  const welcomePageContainer = new Container();
  welcomePageContainer.label = 'welcome page';

  const bgAnimContainer = BackgroundAnimation();
  welcomePageContainer.addChild(bgAnimContainer);

  const cubesAnimation = RectangleAnimations();
  welcomePageContainer.addChild(cubesAnimation);

  cubesAnimation.position.set(
    WELCOME_PAGE_CANVAS_WIDTH * 0.5,
    WELCOME_PAGE_CANVAS_HEIGHT * 0.6
  );

  return welcomePageContainer;
};

export default WelcomePageAnim;

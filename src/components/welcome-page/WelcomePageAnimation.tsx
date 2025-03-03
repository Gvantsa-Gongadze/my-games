import { Container } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import BackgroundAnimation from './background/BackgroundAnimation.tsx';
import RectangleAnimations from './rectangles-bottom/RectangleAnimations.tsx';
import {
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_WIDTH,
} from '../../commons/WelcomePageConstants.ts';
import RectanglesTopAnimation from './rectangles-top/RectanglesTopAnimation.tsx';

const WelcomePageAnim = (): Container => {
  const welcomePageContainer = new Container();
  welcomePageContainer.label = 'welcome page';

  const bgAnimContainer = BackgroundAnimation();
  welcomePageContainer.addChild(bgAnimContainer);

  const bottomRectAnimation = RectangleAnimations();
  welcomePageContainer.addChild(bottomRectAnimation);
  bottomRectAnimation.position.set(
    WELCOME_PAGE_CANVAS_WIDTH * 0.5,
    WELCOME_PAGE_CANVAS_HEIGHT * 0.62
  );

  const topRectAnimation = RectanglesTopAnimation();
  welcomePageContainer.addChild(topRectAnimation);
  topRectAnimation.position.set(
    WELCOME_PAGE_CANVAS_WIDTH * 0.5,
    WELCOME_PAGE_CANVAS_HEIGHT * 0.49
  );

  gsap.to([bottomRectAnimation.skew, topRectAnimation.skew], {
    x: -0.1,
    y: 0.05,
    duration: 6,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeInOut,
  });

  return welcomePageContainer;
};

export default WelcomePageAnim;

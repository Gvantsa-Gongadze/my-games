import { Container, Sprite } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import RectangleAnimations from './rectangles-bottom/RectangleAnimations.tsx';
import {
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_WIDTH,
  WELCOME_PAGE_MAIN_LIGHT_COLOR,
  WELCOME_PAGE_RECTANGLE_POINTS,
} from '../../commons/WelcomePageConstants.ts';
import RectanglesTopAnimation from './rectangles-top/RectanglesTopAnimation.tsx';
import BallsAnimations from './balls/BallsAnimations.ts';
import BackgroundAnimation from './background/BackgroundAnimation.tsx';
import { getRandomNumber } from '../../hooks/GetRandomNumber.tsx';

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

  const ballsAnimationsBehinde = new Container();
  welcomePageContainer.addChild(ballsAnimationsBehinde);

  const topRectAnimation = RectanglesTopAnimation();
  welcomePageContainer.addChild(topRectAnimation);
  topRectAnimation.position.set(
    WELCOME_PAGE_RECTANGLE_POINTS.x,
    WELCOME_PAGE_RECTANGLE_POINTS.y
  );

  const ballsAnimations = BallsAnimations((ball: Sprite) => {
    ballsAnimationsBehinde.addChild(ball);

    ball.tint = WELCOME_PAGE_MAIN_LIGHT_COLOR;
    gsap.to(ball.position, {
      duration: 3.3,
      x: getRandomNumber(-10, -150),
      y: getRandomNumber(-10, -150),
      ease: 'none',
      onComplete: () => {
        ball.destroy();
      },
    });
  });
  welcomePageContainer.addChild(ballsAnimations);

  gsap.to([topRectAnimation.skew], {
    // gsap.to([bottomRectAnimation.skew, topRectAnimation.skew], {
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

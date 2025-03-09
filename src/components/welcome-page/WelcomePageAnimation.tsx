import { Container, Sprite } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import {
  WELCOME_PAGE_MAIN_LIGHT_COLOR,
  WELCOME_PAGE_RECTANGLE_POINTS,
} from '../../commons/WelcomePageConstants.ts';
import RectangleView from './rectangle/RectangleView.tsx';
import BallsAnimations from './balls/BallsAnimations.ts';
import BackgroundAnimation from './background/BackgroundAnimation.tsx';
import { getRandomNumber } from '../../hooks/GetRandomNumber.tsx';

const WelcomePageAnim = (): Container => {
  const welcomePageContainer = new Container();
  welcomePageContainer.label = 'welcome page';

  const bgAnimContainer = BackgroundAnimation();
  welcomePageContainer.addChild(bgAnimContainer);
  bgAnimContainer.label = 'background';

  const ballsAnimationsBehinde = new Container();
  welcomePageContainer.addChild(ballsAnimationsBehinde);
  ballsAnimationsBehinde.label = 'balls behinde container';

  const topRectAnimation = RectangleView(WELCOME_PAGE_MAIN_LIGHT_COLOR);
  welcomePageContainer.addChild(topRectAnimation);
  topRectAnimation.label = 'rectangle';
  topRectAnimation.position.set(
    WELCOME_PAGE_RECTANGLE_POINTS.x,
    WELCOME_PAGE_RECTANGLE_POINTS.y
  );

  gsap.to(topRectAnimation.position, {
    y: WELCOME_PAGE_RECTANGLE_POINTS.y - 30,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeInOut,
  });

  gsap.to(topRectAnimation.skew, {
    x: -3.1,
    y: -4,
    duration: 6,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeInOut,
  });

  const ballsAnimations = BallsAnimations((ball: Sprite) => {
    ballsAnimationsBehinde.addChild(ball);
    gsap.to(ball, {
      tint: WELCOME_PAGE_MAIN_LIGHT_COLOR,
      duration: 0.1,
    });

    gsap.to(ball.position, {
      duration: 4,
      x: getRandomNumber(-10, -300),
      y: getRandomNumber(-10, -300),
      ease: 'none',
      onComplete: () => {
        ball.destroy();
      },
    });
  });
  welcomePageContainer.addChild(ballsAnimations);

  return welcomePageContainer;
};

export default WelcomePageAnim;

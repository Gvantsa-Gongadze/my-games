import { Container, Sprite } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import {
  COLOR_CHANGING_ANIMATION_PAGE_MAIN_LIGHT_COLOR,
  COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS,
} from '../../commons/constants/ColorChangingGalaxyConstants.ts';
import RectangleView from './rectangle/RectangleView.tsx';
import BallsAnimations from './balls/BallsAnimations.ts';
import BackgroundAnimation from './background/BackgroundAnimation.tsx';
import { getRandomNumber } from '../../hooks/GetRandomNumber.tsx';

const ColorChangingAnimationView = (): Container => {
  const ColorChangingAnimationontainer = new Container();
  ColorChangingAnimationontainer.label = 'color changing galaxy page';

  const bgAnimContainer = BackgroundAnimation();
  ColorChangingAnimationontainer.addChild(bgAnimContainer);
  bgAnimContainer.label = 'background';

  const ballsAnimationsBehinde = new Container();
  ColorChangingAnimationontainer.addChild(ballsAnimationsBehinde);
  ballsAnimationsBehinde.label = 'balls behinde container';

  const topRectAnimation = RectangleView(
    COLOR_CHANGING_ANIMATION_PAGE_MAIN_LIGHT_COLOR
  );
  ColorChangingAnimationontainer.addChild(topRectAnimation);
  topRectAnimation.label = 'rectangle';
  topRectAnimation.position.set(
    COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS.x,
    COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS.y
  );

  gsap.to(topRectAnimation.position, {
    y: COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS.y - 30,
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
    if (ball && ball.position) {
      gsap.to(ball, {
        tint: COLOR_CHANGING_ANIMATION_PAGE_MAIN_LIGHT_COLOR,
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
    }
  });
  ColorChangingAnimationontainer.addChild(ballsAnimations);

  return ColorChangingAnimationontainer;
};

export default ColorChangingAnimationView;

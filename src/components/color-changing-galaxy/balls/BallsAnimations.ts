import { Container } from 'pixi.js';
import {
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT,
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH,
  COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS,
} from '../../../commons/constants/ColorChangingGalaxyConstants';
import gsap from 'gsap';
import { getRandomNumber } from '../../../hooks/GetRandomNumber';
import { SendBallCallback } from '../../../commons/types/ColorChangingGalaxyTypes';
import BallView from './BallView';

const BallsAnimations = (callback: SendBallCallback): Container => {
  const ballsContainer = new Container();
  ballsContainer.label = ' balls container';

  const addnewBalls = (count: number) => {
    for (let i = 0; i < count; i++) {
      const ball = BallView();
      ball.position.set(
        COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH + getRandomNumber(350, 650),
        COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT + getRandomNumber(50, 300)
      );
      ballsContainer.addChild(ball);

      const ballX =
        COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS.x +
        getRandomNumber(-90, 90);
      const ballY =
        COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS.y +
        getRandomNumber(-90, 90);

      gsap.to(ball.position, {
        duration: 4,
        x: ballX,
        y: ballY,
        ease: 'none',
        onComplete: () => {
          callback(ball);
        },
      });
    }
  };

  gsap.to(ballsContainer, {
    repeat: -1,
    duration: 0.09,
    onRepeat: () => {
      addnewBalls(getRandomNumber(20, 50));
    },
  });

  return ballsContainer;
};

export default BallsAnimations;

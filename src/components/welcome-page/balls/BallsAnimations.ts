import { Assets, Container, Sprite } from 'pixi.js';
import {
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_WIDTH,
  WELCOME_PAGE_RECTANGLE_POINTS,
} from '../../../commons/WelcomePageConstants';
import gsap from 'gsap';
import { getRandomNumber } from '../../../hooks/GetRandomNumber';
import { SendBallCallback } from '../../../commons/WelcomePageType';

const BallsAnimations = (callback: SendBallCallback): Container => {
  const ballsContainer = new Container();
  ballsContainer.label = ' balls container';

  const addNewBall = (): Sprite => {
    const ball = new Sprite(Assets.get('ball'));
    ball.scale.set(0.15);
    ball.position.set(
      WELCOME_PAGE_CANVAS_WIDTH - ball.width,
      WELCOME_PAGE_CANVAS_HEIGHT - ball.height
    );

    return ball;
  };

  const addnewBalls = (count: number) => {
    for (let i = 0; i < count; i++) {
      const ball = addNewBall();
      ball.position.set(
        WELCOME_PAGE_CANVAS_WIDTH + getRandomNumber(350, 500),
        WELCOME_PAGE_CANVAS_HEIGHT + getRandomNumber(10, 200)
      );
      ballsContainer.addChild(ball);

      const ballX = WELCOME_PAGE_RECTANGLE_POINTS.x + getRandomNumber(-60, 100);
      const ballY = WELCOME_PAGE_RECTANGLE_POINTS.y + getRandomNumber(-60, 100);
      gsap.to(ball.position, {
        duration: 3,
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
      addnewBalls(getRandomNumber(20, 40));
    },
  });

  return ballsContainer;
};

export default BallsAnimations;

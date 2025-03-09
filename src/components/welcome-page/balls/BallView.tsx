import { Assets, Sprite } from 'pixi.js';
import { WELCOME_PAGE_ASSETS } from '../../../commons/WelcomePageConstants';

const BallView = (): Sprite => {
  const ball = new Sprite(Assets.get(WELCOME_PAGE_ASSETS.ball));
  ball.scale.set(0.35);

  return ball;
};

export default BallView;

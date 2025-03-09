import { Assets, Sprite } from 'pixi.js';
import { COLOR_CHANGING_ANIMATION_PAGE_ASSETS } from '../../../commons/constants/ColorChangingGalaxyConstants';

const BallView = (): Sprite => {
  const ball = new Sprite(
    Assets.get(COLOR_CHANGING_ANIMATION_PAGE_ASSETS.ball)
  );
  ball.scale.set(0.35);

  return ball;
};

export default BallView;

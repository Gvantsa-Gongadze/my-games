import { Assets, Container, Sprite } from 'pixi.js';

const BallsAnimations = (): Container => {
  const ballsContainer = new Container();

  const ball = new Sprite(Assets.get('ball'));
  ball.scale.set(0.05);
  ballsContainer.addChild(ball);

  return ballsContainer;
};

export default BallsAnimations;

import { Assets, Sprite } from 'pixi.js';

const Rectangle3DView = (): Sprite => {
  const rect = new Sprite(Assets.get('rectange'));
  rect.label = 'rectangle';

  rect.skew.set(-0.65, 0.4);
  rect.pivot.set(300, 185);
  rect.alpha = 0.9;

  rect.width = 200;
  rect.height = 155;

  return rect;
};

export default Rectangle3DView;

import { Assets, Sprite } from 'pixi.js';
import { ColorType } from '../../../commons/types/ColorChangingGalaxyTypes';
import { COLOR_CHANGING_ANIMATION_PAGE_ASSETS } from '../../../commons/constants/ColorChangingGalaxyConstants';

const RectangleView = (tint: ColorType): Sprite => {
  const rect = new Sprite(
    Assets.get(COLOR_CHANGING_ANIMATION_PAGE_ASSETS.rectange)
  );
  rect.label = 'rectangle';

  rect.skew.set(-3, -4.02);
  rect.pivot.set(278, 175);
  rect.alpha = 0.8;
  rect.tint = tint;

  rect.width = 600;
  rect.height = 500;
  return rect;
};
export default RectangleView;

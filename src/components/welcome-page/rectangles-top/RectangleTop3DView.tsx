import { Assets, Sprite } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import { ColorType } from '../../../commons/WelcomePageType';

const RectangleTop3DView = (tint: ColorType): Sprite => {
  const rect = new Sprite(Assets.get('rectange'));
  rect.label = 'rectangle';

  rect.skew.set(-3, -4.02);
  rect.pivot.set(278, 175);
  rect.alpha = 0.8;
  rect.tint = tint;

  gsap.to(rect, {
    y: -20,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeInOut,
  });

  rect.width = 450;
  rect.height = 400;
  return rect;
};

export default RectangleTop3DView;

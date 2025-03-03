import gsap, { Power2 } from 'gsap';
import { Assets, Sprite } from 'pixi.js';

const Rectangle3DView = (): Sprite => {
  const rect = new Sprite(Assets.get('rectange'));
  rect.label = 'rectangle';

  rect.skew.set(-0.65, 0.4);
  rect.pivot.set(300, 185);
  rect.alpha = 0.8;

  gsap.to(rect, {
    x: -5,
    y: 10,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeInOut,
  });

  rect.width = 200;
  rect.height = 155;

  return rect;
};

export default Rectangle3DView;

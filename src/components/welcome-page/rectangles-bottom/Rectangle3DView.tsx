import { Assets, Sprite } from 'pixi.js';
import gsap, { Power2 } from 'gsap';

const Rectangle3DView = (): Sprite => {
  const rect = new Sprite(Assets.get('rectange'));
  rect.label = 'rectangle';

  rect.skew.set(-0.65, 0.4);
  rect.pivot.set(300, 185);
  rect.alpha = 0.9;

  gsap.to(rect, {
    x: 5,
    y: -5,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeIn,
  });

  rect.width = 200;
  rect.height = 155;

  return rect;
};

export default Rectangle3DView;

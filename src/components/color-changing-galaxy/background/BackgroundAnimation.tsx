import { Assets, Sprite } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import {
  COLOR_CHANGING_ANIMATION_PAGE_ASSETS,
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT,
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_SCALE,
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH,
} from '../../../commons/constants/ColorChangingGalaxyConstants.ts';

const BackgroundAnimation = (): Sprite => {
  const background = new Sprite(
    Assets.get(COLOR_CHANGING_ANIMATION_PAGE_ASSETS.galaxyBg)
  );
  background.anchor.set(0.5);
  background.position.set(
    COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH * 0.5,
    COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT * 0.5
  );

  gsap.to(background.scale, {
    duration: 1,
    x: COLOR_CHANGING_ANIMATION_PAGE_CANVAS_SCALE,
    y: COLOR_CHANGING_ANIMATION_PAGE_CANVAS_SCALE,
    ease: Power2.easeOut,
  });

  gsap.to(background.skew, {
    x: -0.07,
    y: 0.05,
    duration: 5,
    yoyo: true,
    delay: 1,
    repeat: -1,
    ease: Power2.easeInOut,
  });

  return background;
};

export default BackgroundAnimation;

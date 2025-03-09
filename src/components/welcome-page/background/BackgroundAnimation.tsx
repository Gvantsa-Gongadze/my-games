import { Assets, Sprite } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import {
  WELCOME_PAGE_ASSETS,
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_SCALE,
  WELCOME_PAGE_CANVAS_WIDTH,
} from '../../../commons/WelcomePageConstants.ts';

const BackgroundAnimation = (): Sprite => {
  const background = new Sprite(Assets.get(WELCOME_PAGE_ASSETS.galaxyBg));
  background.anchor.set(0.5);
  background.position.set(
    WELCOME_PAGE_CANVAS_WIDTH * 0.5,
    WELCOME_PAGE_CANVAS_HEIGHT * 0.5
  );

  gsap.to(background.scale, {
    duration: 1,
    x: WELCOME_PAGE_CANVAS_SCALE,
    y: WELCOME_PAGE_CANVAS_SCALE,
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

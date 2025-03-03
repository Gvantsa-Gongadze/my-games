import gsap, { Power2 } from 'gsap';
import { Assets, Container, Sprite } from 'pixi.js';
import {
  WELCOME_PAGE_CANVAS_HEIGHT,
  WELCOME_PAGE_CANVAS_SCALE,
  WELCOME_PAGE_CANVAS_WIDTH,
} from '../../commons/WelcomePageConstants.ts';

const BackgroundAnimation = (): Container => {
  const bgContainer = new Container();
  bgContainer.label = 'background';

  const addBg = (): void => {
    const background = new Sprite(Assets.get('tilesBg'));
    background.anchor.set(0.5);
    bgContainer.addChild(background);
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
      x: -0.05,
      y: 0.05,
      duration: 6,
      yoyo: true,
      delay: 1,
      repeat: -1,
      ease: Power2.easeInOut,
    });
  };

  // const addShadowOverlay = (): void => {
  //   const shadowOverlay = new Sprite(Assets.get('shadowOverlay'));
  //   shadowOverlay.rotation = Math.PI;
  //   shadowOverlay.anchor.set(0.5);
  //   shadowOverlay.position.set(
  //     WELCOME_PAGE_CANVAS_WIDTH * 0.5,
  //     WELCOME_PAGE_CANVAS_HEIGHT * 0.5
  //   );
  //   shadowOverlay.scale.set(1.7);
  //   shadowOverlay.alpha = 0.8;
  //   bgContainer.addChild(shadowOverlay);
  //   gsap.to(shadowOverlay.scale, {
  //     duration: 1,
  //     x: WELCOME_PAGE_CANVAS_SCALE + 0.5,
  //     y: WELCOME_PAGE_CANVAS_SCALE + 0.5,
  //     ease: Power2.easeOut,
  //   });
  //   gsap.to(shadowOverlay.skew, {
  //     duration: 1,
  //     x: -0.1,
  //     y: 0.01,
  //     ease: Power2.easeOut,
  //   });
  //   gsap.to(shadowOverlay.skew, {
  //     x: -0.2,
  //     y: 0.18,
  //     duration: 6,
  //     yoyo: true,
  //     delay: 1.3,
  //     ease: Power2.easeInOut,
  //     repeat: -1,
  //   });
  // };

  // const addRainbowOverlay = (): void => {
  //   const rainbowOverlay = new Sprite(Assets.get('rainbowOverlay'));
  //   rainbowOverlay.anchor.set(0.5);
  //   rainbowOverlay.position.set(
  //     WELCOME_PAGE_CANVAS_WIDTH * 0.5,
  //     WELCOME_PAGE_CANVAS_HEIGHT * 0.5
  //   );
  //   rainbowOverlay.alpha = 0.5;
  //   bgContainer.addChild(rainbowOverlay);
  //   gsap.to(rainbowOverlay.scale, {
  //     duration: 1,
  //     x: WELCOME_PAGE_CANVAS_SCALE - 0.1,
  //     y: WELCOME_PAGE_CANVAS_SCALE - 0.1,
  //     ease: Power2.easeOut,
  //   });
  // };

  addBg();
  // addShadowOverlay();
  // addRainbowOverlay();

  return bgContainer;
};

export default BackgroundAnimation;

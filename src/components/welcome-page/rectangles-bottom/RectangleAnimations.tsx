import { Container } from 'pixi.js';
import gsap, { Power2 } from 'gsap';
import Rectangles3DView from './Rectangles3DView.tsx';

const RectangleAnimations = (): Container => {
  const rectanglesContainer = new Container();
  rectanglesContainer.label = 'rectanges container';

  const tripleRect = Rectangles3DView();
  rectanglesContainer.addChild(tripleRect);

  const triplerect1 = Rectangles3DView();
  triplerect1.position.set(-67, 88);
  rectanglesContainer.addChild(triplerect1);

  const triplerect2 = Rectangles3DView();
  triplerect2.position.set(155, 67);
  rectanglesContainer.addChild(triplerect2);

  const triplerect3 = Rectangles3DView();
  triplerect3.position.set(88, 155);
  rectanglesContainer.addChild(triplerect3);

  rectanglesContainer.pivot.set(35, 65);

  gsap.fromTo(
    rectanglesContainer.scale,
    { x: 1.5, y: 1.5, duration: 2, ease: Power2.easeInOut },
    {
      x: 1,
      y: 1,
    }
  );

  gsap.to(rectanglesContainer.skew, {
    x: -0.1,
    y: 0.05,
    duration: 6,
    yoyo: true,
    repeat: -1,
    ease: Power2.easeInOut,
  });

  return rectanglesContainer;
};
export default RectangleAnimations;

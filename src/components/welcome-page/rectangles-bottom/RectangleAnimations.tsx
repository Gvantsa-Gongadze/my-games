import { Container } from 'pixi.js';
import TripleRectangle3DView from './TripleRectangle3DView.tsx';
import gsap, { Power2 } from 'gsap';

const RectangleAnimations = (): Container => {
  const rectanglesContainer = new Container();
  rectanglesContainer.label = 'rectanges container';

  const tripleRect = TripleRectangle3DView();
  rectanglesContainer.addChild(tripleRect);

  const triplerect1 = TripleRectangle3DView();
  triplerect1.position.set(-67, 88);
  rectanglesContainer.addChild(triplerect1);

  const triplerect2 = TripleRectangle3DView();
  triplerect2.position.set(155, 67);
  rectanglesContainer.addChild(triplerect2);

  const triplerect3 = TripleRectangle3DView();
  triplerect3.position.set(88, 155);
  rectanglesContainer.addChild(triplerect3);

  rectanglesContainer.pivot.set(35, 65);

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

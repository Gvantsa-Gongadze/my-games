import { Container } from 'pixi.js';
import Rectangle3DView from './Rectangle3DView.tsx';

const Rectangles3DView = (): Container => {
  const distanceX = -3;
  const distanceY = -12;
  const rectangoleCount = 4;

  const tripleRectangleCotainer = new Container();

  for (let i = 0; i < rectangoleCount; i++) {
    const rect = Rectangle3DView();
    tripleRectangleCotainer.addChild(rect);
    rect.position.set(distanceX * i, distanceY * i);
  }

  return tripleRectangleCotainer;
};

export default Rectangles3DView;

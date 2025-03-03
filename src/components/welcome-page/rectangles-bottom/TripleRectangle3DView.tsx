import { Container } from 'pixi.js';
import Rectangle3DView from './Rectangle3DView.tsx';

const TripleRectangle3DView = (): Container => {
  const distanceX = -3;
  const distanceY = -12;

  const tripleRectangleCotainer = new Container();

  const rect = Rectangle3DView();
  tripleRectangleCotainer.addChild(rect);

  const rect1 = Rectangle3DView();
  tripleRectangleCotainer.addChild(rect1);
  rect1.position.set(rect.x + distanceX, rect.y + distanceY);

  const rect2 = Rectangle3DView();
  tripleRectangleCotainer.addChild(rect2);
  rect2.position.set(rect1.x + distanceX, rect1.y + distanceY);

  return tripleRectangleCotainer;
};

export default TripleRectangle3DView;

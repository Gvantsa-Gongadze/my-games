import { Container } from 'pixi.js';
import RectangleTop3DView from './RectangleTop3DView';
import getRandomColor from '../../../hooks/RandomColourGenerator';

const RectanglesTopAnimation = (): Container => {
  const rectanglesContainer = new Container();
  rectanglesContainer.label = 'rectanges top container';
  const color = getRandomColor();

  const rect = RectangleTop3DView(color);
  rectanglesContainer.addChild(rect);

  return rectanglesContainer;
};
export default RectanglesTopAnimation;

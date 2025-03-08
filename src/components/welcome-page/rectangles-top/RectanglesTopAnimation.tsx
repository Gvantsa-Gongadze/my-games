import { Container } from 'pixi.js';
import RectangleTop3DView from './RectangleTop3DView';
import { WELCOME_PAGE_MAIN_LIGHT_COLOR } from '../../../commons/WelcomePageConstants';

const RectanglesTopAnimation = (): Container => {
  const rectanglesContainer = new Container();
  rectanglesContainer.label = 'rectanges top container';

  const rect = RectangleTop3DView(WELCOME_PAGE_MAIN_LIGHT_COLOR);
  rectanglesContainer.addChild(rect);

  return rectanglesContainer;
};
export default RectanglesTopAnimation;

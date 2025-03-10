import { Container } from 'pixi.js';
import MauntainsView from './mountains/mountainsView';
import { NEON_WORLD_PAGE_CANVAS_HEIGHT } from '../../commons/constants/NeonWorldConstants';

const NeowWorldView = (): Container => {
  const animationContainer = new Container();

  const mountineView = MauntainsView();
  animationContainer.addChild(mountineView);
  mountineView.position.set(
    0,
    (NEON_WORLD_PAGE_CANVAS_HEIGHT - mountineView.height) * 0.5
  );

  return animationContainer;
};

export default NeowWorldView;

import { Container } from 'pixi.js';
import Cube, { CubeColorsType } from './Cube';

const CubeAnimations = (): Container => {
  const cureContainer = new Container();
  const colors: CubeColorsType = {
    side: 0x000000,
    front: 0xffffff,
    top: 0xff0000,
  };
  const x: number = 100;
  const y = 100;
  const width = 100;
  const height = 40;
  const depth = 40;

  const cube = Cube(x, y, width, height, depth, colors);
  cureContainer.addChild(cube);

  const cube1 = Cube(200, 200, width, height, depth, colors);
  cureContainer.addChild(cube1);

  return cureContainer;
};
export default CubeAnimations;

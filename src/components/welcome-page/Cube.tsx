import { Graphics } from 'pixi.js';

type colorType = `#${string}` | number;

export type CubeColorsType = {
  side: colorType;
  front: colorType;
  top: colorType;
};
const Cube = (
  x: number,
  y: number,
  width: number,
  height: number,
  depth: number,
  colors: CubeColorsType
): Graphics => {
  const cube = new Graphics();

  // Side rect
  cube
    .moveTo(x, y)
    .lineTo(x + depth, y + depth)
    .lineTo(x + depth, y + height + depth)
    .lineTo(x, y + height)
    .closePath();
  cube.fill({ color: colors.side });

  // front rect
  cube.rect(x + depth, y + depth, width, height).fill({
    color: colors.front,
    alpha: 1,
  });

  // Top thickness
  cube
    .moveTo(x, y)
    .lineTo(x + depth, y + depth)
    .lineTo(x + width + depth, y + depth)
    .lineTo(x + width, y)
    .closePath()
    .fill({ color: colors.top });

  return cube;
};

export default Cube;

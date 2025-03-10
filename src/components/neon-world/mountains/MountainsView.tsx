import { Graphics } from 'pixi.js';
import { PointType } from '../../../commons/types/NeonWorldTypes';

const MauntainsView = () => {
  const mountainsGraphic = new Graphics();
  mountainsGraphic.beginPath();
  mountainsGraphic.setStrokeStyle({ width: 2, color: 0xffd700, alpha: 1 });
  let prevPoints: PointType = { cx: 0, cy: 0, x: 0, y: 0 };
  console.error(points.length);
  points.forEach(({ cx, cy, x, y }) => {
    cx = prevPoints.x + cx;
    cy = prevPoints.y + cy;
    x = prevPoints.x + x;
    y = prevPoints.y + y;
    mountainsGraphic.quadraticCurveTo(cx, cy, x, y, 10);
    prevPoints = { cx, cy, x, y };
  });

  mountainsGraphic.stroke();
  return mountainsGraphic;
};

const points: PointType[] = [
  { cx: 5, cy: 5, x: 60, y: -5 },
  { cx: 10, cy: 5, x: 40, y: 15 },
  { cx: 10, cy: 5, x: 65, y: -10 },
  { cx: 10, cy: -5, x: 55, y: 5 },
  { cx: 10, cy: 5, x: 50, y: -15 },
  { cx: 90, cy: -90, x: 120, y: -100 },
  { cx: 10, cy: 10, x: 30, y: 10 },
  { cx: 60, cy: -20, x: 100, y: -150 },
  { cx: 30, cy: 10, x: 70, y: 50 },
  { cx: 30, cy: -30, x: 70, y: -50 },
  { cx: 20, cy: 20, x: 80, y: 70 },
  { cx: 30, cy: 10, x: 50, y: 20 },
  { cx: 10, cy: 10, x: 50, y: 60 },
  { cx: 5, cy: 5, x: 40, y: -20 },
  { cx: 25, cy: 15, x: 80, y: 80 },
  { cx: 10, cy: -15, x: 50, y: -60 },
  { cx: 25, cy: 15, x: 40, y: 20 },
  { cx: 20, cy: 0, x: 50, y: 5 },
  { cx: 20, cy: -20, x: 60, y: -90 },
  { cx: 10, cy: 0, x: 50, y: 10 },
  { cx: 20, cy: -50, x: 60, y: -90 },
  { cx: 50, cy: 50, x: 70, y: 60 },
  { cx: 20, cy: 15, x: 30, y: 30 },
  { cx: 10, cy: 10, x: 70, y: 60 },
  { cx: 10, cy: -10, x: 30, y: -30 },
  { cx: 10, cy: 10, x: 30, y: 40 },
  { cx: 5, cy: 5, x: 30, y: 20 },
  { cx: 0, cy: 0, x: 30, y: 5 },
  { cx: 80, cy: -35, x: 120, y: -40 },
  { cx: 45, cy: 30, x: 50, y: 40 },
  { cx: 60, cy: -30, x: 120, y: -40 },
  { cx: 20, cy: 30, x: 40, y: 40 },
  { cx: 0, cy: 0, x: 40, y: 5 },
];

export default MauntainsView;

import { ColorType } from '../commons/WelcomePageType';

export const getRandomColor = (): ColorType => {
  return Math.floor(Math.random() * 16777215);
};

export const getRandomLightColor = (): ColorType => {
  const r = Math.floor(Math.random() * 156) + 100;
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  return (r << 16) | (g << 8) | b;
};

export const getDarkenColor = (
  color: ColorType,
  percent: number
): ColorType => {
  const curPercent = Math.min(100, Math.max(0, percent));
  let colorCode: string = '';

  if (typeof color === 'number') {
    colorCode = `#${color.toString(16).padStart(6, '0')}`.slice(1);
  } else if (color.startsWith('#')) {
    colorCode = color.slice(1);
  }

  const num = parseInt(colorCode, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  const factor = 1 - curPercent / 100;
  r = Math.round(r * factor);
  g = Math.round(g * factor);
  b = Math.round(b * factor);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

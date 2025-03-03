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

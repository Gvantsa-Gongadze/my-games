import { Point } from 'pixi.js';
import { getDarkenColor, getRandomLightColor } from '../hooks/GetRandomColor';
import { ColorType } from './WelcomePageType';

export const WELCOME_PAGE_CANVAS_WIDTH = 1920;
export const WELCOME_PAGE_CANVAS_HEIGHT = 1080;
export const WELCOME_PAGE_CANVAS_SCALE = 0.5;

export const WELCOME_PAGE_RECTANGLE_POINTS = new Point(
  WELCOME_PAGE_CANVAS_WIDTH * 0.5,
  WELCOME_PAGE_CANVAS_HEIGHT * 0.49
);

export const WELCOME_PAGE_MAIN_LIGHT_COLOR: ColorType = getRandomLightColor();
export const WELCOME_PAGE_MAIN_DARKER_COLOR: ColorType = getDarkenColor(
  WELCOME_PAGE_MAIN_LIGHT_COLOR,
  Math.random() * 50
);

export const WELCOME_PAGE_ASSETS = {
  galaxyBg: 'galaxyBg',
  rectange: 'rectange',
  ball: 'ball',
};

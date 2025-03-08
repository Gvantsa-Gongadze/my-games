import {
  getDarkenColor,
  getRandomLightColor,
} from '../hooks/RandomColourGenerator';
import { ColorType } from './WelcomePageType';

export const WELCOME_PAGE_CANVAS_WIDTH = 1920;
export const WELCOME_PAGE_CANVAS_HEIGHT = 1080;
export const WELCOME_PAGE_CANVAS_SCALE = 0.5;

export const WELCOME_PAGE_MAIN_LIGHT_COLOR: ColorType = getRandomLightColor();
export const WELCOME_PAGE_MAIN_DARKER_COLOR: ColorType = getDarkenColor(
  WELCOME_PAGE_MAIN_LIGHT_COLOR,
  Math.random() * 50
);

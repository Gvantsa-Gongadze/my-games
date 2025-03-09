import { Point } from 'pixi.js';
import {
  getDarkenColor,
  getRandomLightColor,
} from '../../hooks/GetRandomColor';
import { ColorType } from '../types/ColorChangingGalaxyTypes';

export const COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH = 1920;
export const COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT = 1080;
export const COLOR_CHANGING_ANIMATION_PAGE_CANVAS_SCALE = 0.5;

export const COLOR_CHANGING_ANIMATION_PAGE_RECTANGLE_POINTS = new Point(
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_WIDTH * 0.5,
  COLOR_CHANGING_ANIMATION_PAGE_CANVAS_HEIGHT * 0.49
);

export const COLOR_CHANGING_ANIMATION_PAGE_MAIN_LIGHT_COLOR: ColorType =
  getRandomLightColor();
export const COLOR_CHANGING_ANIMATION_PAGE_MAIN_DARKER_COLOR: ColorType =
  getDarkenColor(
    COLOR_CHANGING_ANIMATION_PAGE_MAIN_LIGHT_COLOR,
    Math.random() * 50
  );

export const COLOR_CHANGING_ANIMATION_PAGE_ASSETS = {
  galaxyBg: 'galaxyBg',
  rectange: 'rectange',
  ball: 'ball',
};

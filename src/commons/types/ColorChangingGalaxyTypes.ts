import { Sprite } from 'pixi.js';

export type ColorType = `#${string}` | number;

export type SendBallCallback = (data: Sprite) => void;

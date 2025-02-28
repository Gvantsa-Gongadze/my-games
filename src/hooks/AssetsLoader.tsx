import { Assets } from 'pixi.js';
import { ErrorInfo } from 'react';

type Callback = () => void;

export interface AssetsToLoad {
  alias: string;
  src: string;
}
const AssetsLoader = (assets: AssetsToLoad[], callback: Callback): void => {
  Assets.load(assets)
    .then(() => {
      callback();
    })
    .catch((error: ErrorInfo) => {
      console.log(error);
    });
};

export default AssetsLoader;

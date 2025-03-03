import { colorType } from '../commons/WelcomePageType';

const getRandomColor = (): colorType => {
  return Math.floor(Math.random() * 16777215);
};

export default getRandomColor;

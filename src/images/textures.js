import { TextureLoader } from "three";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const groundTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);

export {
  dirtTexture,
  logTexture,
  grassTexture,
  groundTexture,
  glassTexture,
  woodTexture,
};

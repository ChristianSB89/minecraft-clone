import { NearestFilter, TextureLoader, RepeatWrapping } from "three";
import { dirtImg, grassImg, glassImg, logImg, woodImg } from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const groundTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);

//Line 13 to 18; Prevents blurry texture

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;

//Ground texture needs special treatment

groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.repeat.set(100, 100);

export {
  dirtTexture,
  logTexture,
  grassTexture,
  groundTexture,
  glassTexture,
  woodTexture,
};

import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { Image } from "../models/Image.js";

export class ImagesController {
  constructor() {
    AppState.on("image", this.drawImage);
    this.setImage();
  }

  async setImage() {
    try {
      await imagesService.setImage();
    } catch (error) {
      Pop.toast(error);
    }
  }

  async drawImage() {
    const image = AppState.image;
    // setHTML("bgImage", image.backgroundImageHTMLTemplate);
    document.body.style.backgroundImage = `url(${image.largeImgUrl})`;
  }
}

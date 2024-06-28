import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js";

class ImagesService {
  async setImage() {
    const response = await api.get("/api/images");
    const newImage = new Image(response.data);
    AppState.image = newImage;
    console.log(response.data);
  }
}

export const imagesService = new ImagesService();

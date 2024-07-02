import { Image } from "./models/Image.js";
import { Quote } from "./models/Weather.js";
import { EventEmitter } from "./utils/EventEmitter.js";
import { createObservableProxy } from "./utils/ObservableProxy.js";

class ObservableAppState extends EventEmitter {
  user = null;
  /**@type {import('./models/Account.js').Account | null} */
  account = null;

  /**@type {Image} */
  image = null;
  ToDos = [];

  temperature = null;

  time = 0

  /**@type {Quote} */
  quote = null
}

export const AppState = createObservableProxy(new ObservableAppState());

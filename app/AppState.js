import { Image } from "./models/Image.js";
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
}

export const AppState = createObservableProxy(new ObservableAppState());

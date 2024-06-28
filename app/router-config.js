import { AccountController } from "./controllers/AccountController.js";
import { ImagesController } from "./controllers/ImagesController.js";

import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";
import { ToDosController } from "./controllers/ToDosController.js";

export const router = new Router([
  {
    path: "",
    controllers: [ImagesController, ToDosController],
    view: "app/views/HomeView.html",
  },
  {
    path: "#/account",
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: "app/views/AccountView.html",
  },
]);

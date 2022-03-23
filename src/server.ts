import "dotenv/config";
import config from "config";

import AuthController from "../controllers/auth.controller";
import UserController from "../controllers/users.controller";
import ProjectController from "../controllers/project.controller";
import App from "./app/App";
import TeamController from "../controllers/team.controller";

if (!config.get("jwtPrivateKey")) {
  console.error("Fatal Error: jwtPrivateKey is not defined.");
  process.exit(1);
}

const app = new App([new UserController(), new AuthController(), new ProjectController(), new TeamController()]);

const server = app.listen();

module.exports = server;

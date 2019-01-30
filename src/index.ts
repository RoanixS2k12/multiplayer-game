import "dotenv/config";
import App from "./main/App";

import {
    HelloController
} from "./controllers";

import validateEnv from "./utils/ValidateEnv";

validateEnv();

const app = new App([
    new HelloController()
], 3553);

app.listen();

import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

import GameServer from "./GameServer";

class App {

    public app: express.Application;
    public port: number;

    public gameServer: GameServer;

    constructor(controllers: any[], port: number) {
        this.app = express();

        this.gameServer = new GameServer(this.app);

        this.port = port;

        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.gameServer.listen(this.port);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach((ctrl) => {
            this.app.use("/", ctrl.router);
        });
    }

    private connectToDatabase() {
        const {
            MONGO_USER,
            MONGO_PASSWORD,
            MONGO_PATH
        } = process.env;

        mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);

    }

}

export default App;

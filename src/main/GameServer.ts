import express from "express";

import {
    BasicRoom
} from "../rooms";

import { log } from "../utils/Logger";

import { Server } from "colyseus";
import { createServer } from "http";

class GameServer {

    public app: express.Application;
    public gameServer: Server;

    constructor(app: express.Application) {

        this.app = app;

        const server = createServer(app);

        this.gameServer = new Server({
            server
        });

        this.initializeRooms();
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            log.info(`Server started on http://localhost:${port}`);
        });
    }

    private initializeRooms() {
        this.gameServer.register("basicRoom", BasicRoom);
    }

}

export default GameServer;

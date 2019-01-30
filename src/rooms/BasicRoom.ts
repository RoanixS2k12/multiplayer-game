
import { Client, Room } from "colyseus";

import { log } from "../utils/Logger";

export default class BasicRoom extends Room {

    public onInit(options: any) {
        log.info(`Room initiated ${options}`);
    }

    public onJoin(client: Client, options: any) {
        log.info(`[${client.id}] just joined the room`);
    }

    public onMessage(client: Client, message: any) {
        log.info(`[${client.id}] : ${message}`);
    }

    public onLeave(client: Client, consented: boolean) {
        log.info(`[${client.id}] just leaved the room`);
    }

}

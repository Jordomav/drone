import "reflect-metadata";
import {createSocketServer} from "socket-controllers";
import { ConnectionController } from "./controllers/ConnectionController";

createSocketServer(3001, {
    controllers: [ConnectionController]
});

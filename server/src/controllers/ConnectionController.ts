import {OnConnect, SocketController, ConnectedSocket, OnDisconnect} from "socket-controllers";

@SocketController()
export class ConnectionController {

    @OnConnect()
    connection(@ConnectedSocket() socket: any) {
        console.log("client connected");
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: any) {
        console.log("client disconnected");
    }
}

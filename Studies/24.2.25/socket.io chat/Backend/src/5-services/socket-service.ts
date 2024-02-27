import { Server as HttpServer } from 'http'; // Built-in in Node.js
import { Server as SocketServer, Socket } from 'socket.io'; // npm i socket.io

class SocketService {
  public handleMessages(httpServer: HttpServer): void {
    // Configuration - allow any client to communicate:
    const options = { cors: { origin: '*' } };

    // Create socket server:
    const socketServer = new SocketServer(httpServer, options);

    // 1. Server listens to client connections:
    socketServer.sockets.on('connection', (socket: Socket) => {
      console.log('Client has been connected.');

      // 4. Server listens to client messages:
      socket.on('message', (msg: string) => {
        console.log('Client sent message: ', msg);

        // Send message to all clients:
        socketServer.sockets.emit('message', msg);
      });

      // 7. Server listens to client disconnection:
      socket.on('disconnect', () => {
        console.log('Client has been disconnect.');
      });
    });
  }
}

export const socketService = new SocketService();

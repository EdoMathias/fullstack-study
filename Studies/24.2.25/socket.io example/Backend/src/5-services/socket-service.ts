import { Server as HttpServer } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';

class SocketService {
  public handleMessages(httpServer: HttpServer): void {
    // Configuration:
    const options = { cors: { origin: '*' } };

    // Create socket server:
    const socketServer = new SocketServer(httpServer, options);

    // 1. Server listens to client connections:
    socketServer.sockets.on('connection', (socket: Socket) => {
      console.log('Client connected');

      // 4. Server listens to client messages:
      socket.on('message', (msg) => {
        console.log('Client sent a message: ', msg);
      });

      const intervalId = setInterval(() => {
        // 5. Server sends message to client:
        socket.emit(
          'message',
          'Hello Client!, here is a random number: ' + Math.random()
        );
      }, 3000);

      // 7. Server listens to client disconnection:
      socket.on('disconnect', () => {
        console.log('Client disconnected');
        clearInterval(intervalId);
      });
    });
  }
}

export const socketService = new SocketService();

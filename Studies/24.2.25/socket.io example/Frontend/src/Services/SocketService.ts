import { Socket, io } from 'socket.io-client';

class SocketService {
  private socket: Socket;

  public connect(callback: Function): void {
    // 2. Client connects to server:
    this.socket = io('http://localhost:4000');

    // 6. Client listens to server messages:
    this.socket.on('message', (msg: string) => {
      callback(msg);
    });
  }

  public send(msg: string): void {
    // 3. Send message to server:
    this.socket.emit('message', msg);
  }

  // 8. Client disconnects from server:
  public disconnect(): void {
    this.socket.disconnect();
  }
}

export const socketService = new SocketService();

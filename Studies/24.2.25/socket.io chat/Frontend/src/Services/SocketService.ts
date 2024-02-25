import { Socket, io } from 'socket.io-client'; // npm i socket.io-client

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
    // 3. Client sends message to server:
    this.socket.emit('message', msg);
  }

  public disconnect(): void {
    // 8. Client disconnects from server:
    this.socket.disconnect();
  }
}

export const socketService = new SocketService();

import { useState } from 'react';
import { socketService } from '../../../Services/SocketService';
import './Home.css';

function Home(): JSX.Element {
  const [message, setMessage] = useState('');

  function connect(): void {
    socketService.connect((msg: string) => {
      console.log(msg);

      setMessage(msg);
    });
  }

  function disconnect(): void {
    socketService.disconnect();
  }

  function send(): void {
    socketService.send('this is a message');
  }

  return (
    <div className="Home">
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <button onClick={send}>Send</button>

      <p>{message}</p>
    </div>
  );
}

export default Home;

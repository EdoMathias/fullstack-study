import { ChangeEvent, useState } from 'react';
import { socketService } from '../../../Services/SocketService';
import './Home.css';

function Home(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  function connect(): void {
    socketService.connect((msg: string) => {
      setMessages((oldMessages) => [...oldMessages, msg]);
    });
  }

  function disconnect(): void {
    socketService.disconnect();
  }

  function send(): void {
    socketService.send(text);
  }

  function handleChange(args: ChangeEvent<HTMLInputElement>): void {
    setText(args.target.value);
  }
  return (
    <div className="Home">
      <button className="btn btn-info" onClick={connect}>
        Connect
      </button>
      <button className="btn btn-info" onClick={disconnect}>
        Disconnect
      </button>
      <hr></hr>
      <label>Message:</label>
      <input type="text" onChange={handleChange} value={text}></input>
      <hr></hr>
      <button className="btn btn-info" onClick={send}>
        Send
      </button>

      <div>
        {messages.map((m, index) => (
          <p key={index + m}>{m}</p>
        ))}
      </div>
    </div>
  );
}

export default Home;

import { useState } from 'react';

export const FormData = () => {
  const [text, setText] = useState('text');

  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        value={text}
      ></input>
      <p>{text}</p>
    </div>
  );
};

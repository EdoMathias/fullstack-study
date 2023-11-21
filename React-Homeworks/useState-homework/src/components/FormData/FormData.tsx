import { useState } from 'react';

type User = {
  firstName: string;
  lastName: string;
  age: string;
}

export const FormData = ({firstName, lastName, age}:User) => {
  const [text, setText] = useState({firstName, lastName, age});
  const [inputText, setInputText] = useState({...text});
  const [inputState, setInputState] = useState(true)

  return (
    <>
    <div>
      <h2>User Details:</h2>
      <p className='firstName-p'>First Name: {text.firstName}</p>
      <p className='lastName-p'>Last Name: {text.lastName}</p>
      <p className='ageName-p'>Age: {text.age}</p>
    </div>
    <hr></hr>
    <input
    onChange={(e)=>{
      setInputText({...inputText, firstName: e.target.value})
    }}
        type="text"
        className='firstName-input'
        disabled={inputState}></input>
    <input 
    onChange={(e)=>{
      setInputText({...inputText, lastName: e.target.value})
    }}
        type="text"
        className='lastName-input'
        disabled={inputState}></input>
    <input
    onChange={(e)=>{
      setInputText({...inputText, age: e.target.value})
    }}
        type="text"
        className='age-input'
        disabled={inputState}></input>

    <hr></hr>
    <button onClick={() => {setInputState(false)}}>Edit Data</button>
    <button onClick={() =>{setText({...inputText})}}>Save Data</button>
    <button onClick={()=>{setInputState(true)}}>Disable</button>
    </>
  );
};

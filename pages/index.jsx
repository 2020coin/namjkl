import React, { useState } from 'react';
import TextBox from '../components/Textbox';

const main = () => {
  const [state, setState] = useState();
  return (
  <div>
    <TextBox 
    type="text"
    placeholder="아이디"
    change={() => {
      setState(document.getElementById('textBox').value);
      }}/>
      <button
        type="button"
        onClick={() => {
          console.log(state);
        }}
      >
        버튼
      </button>
  </div>
  );1
};

export default main;
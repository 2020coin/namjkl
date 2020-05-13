import React, { useState } from 'react';

const login = () => {
  const Login = () => {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    if (id === 'admin' && password === '1234') {
      alert('로그인에 성공했습니다');
    } else {
      alert('로그인에 실패했습니다');
    }
  };

  const [state, setState] = useState();
  console.log(state);
  setState(365);

  return (
    <>
      <input id="id" type="text" placeholder="id" />
      <input
        id="password"
        type="password"
        placeholder="password"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            Login();
          }
        }}
      />
      <button type="button" onClick={Login}>
        Login
      </button>
      <style jsx>
        {`
          input {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default login;
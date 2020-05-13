import React from 'react';

const Button = (props) => {
    const { text } = props;
    return(
  <div>
    <button type="button">{text}</button>
    
    <style jsx>
      {`
        button {
          width: 300px;
          height: 150px;
          background-color: red;
          box-shadow: 0px 0px 3px 0px;
          border-radius: 20px;
          font-size: 30px;
          font-weight: bold;
          color: white;
        };
      `}
    </style>
  </div>)
};

export default Button;
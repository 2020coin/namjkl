import React from 'react';

const Textbox = (props) => {
    const { placeholder, type, change } = props;
    return (
        <>
        <input id="textBox" style="background-color: yellow" type={type} placeholder={placeholder} onKeyPress={change} />
        </>
    );
};

export default Textbox;

//placeholder 
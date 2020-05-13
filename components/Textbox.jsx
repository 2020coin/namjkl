import React from 'react';

const Textbox = (props) => {
    const { placeholder, type, change } = props;
    return (
        <>
        <input id="textBox" type={type} placeholder={placeholder} onKeyPress={change} />
        </>
    );
};

export default Textbox;

//placeholder 
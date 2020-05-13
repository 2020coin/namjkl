import React from 'react';
import axios from 'axios';

const login = () => {
    /*
        async 
        프로그램
        A라는 함수, B라는 함수
        C언어에선
        A, B 순서로 실행
        JS또한
        A, B 순서로 실행
        JS는 
        A, B 동시에 실행
    */
        const Login = async () => {
        const name = document.getElementById("name").value;

        try {
            const result = await axios.post('http://coin-study.herokuapp.com/exam', { name: name });
            const div1 = document.getElementById("my-img");
            div1.src = result.data;
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <input type="text" id="name" placeholder="NAME" />
            <button type="button" onClick={Login}>실행</button>
            <img id="my-img" src=""></img>
        </>
    );
};

export default login;
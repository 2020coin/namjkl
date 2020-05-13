const // constant -> 수정이 불가능한 변수
let // -> 수정이 가능한 변수
var // variable -> 수정이 가능한 변수 - 블록 밖에서도 사용 가능

const func = () => {
  var a = 0;
  let b = 0;
  b = 2;
  const c = 3;
  c = 4; // error
  // ->
  const d = 4;
}

func2(); // warning

/*
a = 2;
  console.log(a);
  console.log(b); // error
  console.log(c); // error
*/

function func2() {
  a = 2;
  console.log(a);
  console.log(b); // error
  console.log(c); // error
}

a(); // OK
// // ...

const a = () => {
  // ...
} // lambda method

== // 단순 비교 형변환까지
const a = 0;
const b = '0';
if (a == b) // true

===
const a = 0;
const b = '0';
if (a === b) // false

let a = '111';
a + 1 -> '1111';
a - 1 -> 110;

if (0 == []) // true
if (0 == {}) // true
if (0 == '0') // true
if ('0' == []) // false

console.log();
console.error();
console.warn();

// HTTP status code
// 통신 상에서 나타나는 결과들을 문자열이 아닌 숫자로만 판단하기 위해서 사용한다

//ststus cold
// 1**
// 조건부 응답
// 2**
// 성공적인
// 3**
// 리다이렉션 완료
// 4**
// 소스코드에서 발생한 에러
// 5**
// 서버 자체에서 발생한 에러

/*
200 -> success - 성공적인
401 -> Unauthorization - 비밀번호 같은거 틀렸을 때 로그인을 실패했을 때
403 -> Forbidden - 로그인을 안했는데 로그인을 해야만 볼 수 있는 데이터에 접근
404 -> not found - 데이터를 찾을 수가 없을 때
    ex) 아이디로 로그인을 시도했는데 아이디가 없다.
409 -> conflict - 충돌
    ex) 회원가입을 하는데 이미 같은 아이디가 있을때
412 -> Precondition Failed - 사용자가 보내준 데이터가 부족할 때
    ex) 회원가입을 해야하는데 뭔가 빠트리고 시도했을 때, 이름을 입력하지 않았을 때
500 -> Error - 알수없는
*/

/*
int a
char b
double c
*/

String // 문자열
// char 없음
Number // 숫자
// int, double, float 싹다 포함
Date // 시간
// year, month, day, date, hour, minute, second

let
var
// dynamic variable
let a = "Hi";
// String
a = 424;
// Number

// int a[30] = { 0,}
const a = [];
const b = { name: "심재성" };
b.name = '남승일';
b['name'] = '남승일';

`` // 키보드 1 왼쪽

const a = `
    sdfsdfsdfsdf
    sdfsdfsd
    sdf
    sdf
    sdf
    sdgfsd
    ${}
    `

console.log(`${a} ${b}`); // 보간 문자열

try {
    // 뭔가 시도
} catch (err) {
    // try에서 에러가 발생하면 여기로 넘어온다.
} finally {
    // try가 끝나거나 catch가 끝나면 여기로 넘어온다.
    // 별로 안씀 - 재성이형 피셜
}

const array = [12, 13, 14, 15];
array.forEach((item) => {
    console.log(item);
});

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// array. ~ 와 for문을 돌린 것은 완전히 똑같다. 위의 코드

const array2 = array.map((item) => {
    return item * 2;
});

// array2 = [24, 26, 28, 30];

const array3 = array.some((item) => {
    return item === 14;
    // some 안에서 return으로 true가 반환되면, 반복문이 멈춘다.
});

// array3 = [12, 13];

const method = async () => {
    // await function();
}

// moduels
// 기능을 분할할 수 있는 기능

import something from ''; // 신 문법 - ES6
const something = require(''); // 구 문법 - common JS

require('modules').method(); // 편하지만 남용하면 퍼포먼스에 문제가 생긴다.

const method = () => {
    console.log('Hello World');
};

export default method; // default
// import method from 'method';
export { method };
import method from 'method';
method.method();

import { method } from 'method';
method();

import {  } from 'method'

import axios from 'axios';
axios.post
axios.get
import { get, post } from 'axios';
get();
post();

const a = { data: '3' };
a.data = 'fdko';
// JSON
// Javascript Object Notation
const json = {
    key='value',
};

const person = {
    name: '김민상',
    stature: 175,
    weight: 68,
} // json으로 사람을 표현했다.

person.name
person.stature
person.weight

const methods = {
    method1: () => {
        console.log('method1');
    },
    method2: () => {
        console.log
    }
}

Array.prototype 

const a =[];
const str = 'aaaa    ';
str.trim(); // 문자열 다듬기 공백제거
// aaaa

const str = 'AAAABBBCCC';
str.replace('AB', 'B'); // 문자열 교체
// AA

const str = 'A:B:C';
str.split(':') // 문자열 나누기
// ['A', 'B', 'C']

const str = 'abcdefg';
str.substring(3, 5) // 문자열의 시작점과 끝지점을 바꾼다.
// ef

str.length; // 문자열의 길이

const str = 'abcdefg';
str.indexOf('b'); // 문자열을 찾고 그 인덱스를 변환
// 1

const str = 'abcdefg';
str.search('bcd'); // 문자열이 존재하는가 찾는다
// true
str.search('i');
// false

const num = 123;
num.toString(); // 문자열로 바꿔주는 함수
// '123'

const arr = [1,2,3];
arr.push(4); // 제일 뒤에 데이터를 추가
// [1, 2, 3, 4]
arr.pop(); // 제일 앞에 데이터를 지워줌
// [2, 3, 4]

arr.find(3); // 입력한 데이터가 배열 안에 있는가 판단
// true
arr.find(9); 
// false

arr.reverse(); // 배열 뒤집기
// [3, 2, 1]

arr.sort(-1); // 작은 것부터 큰 것대로 정렬

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.slice(3, 6);
// 4,5,6,7

const date = new Date();
date.toISOString // ISO UTC+9
// 2007-03-01T13:00:00Z

const names = [
    '김관우',
    '남승일',
    '김민상',
    '박진성',
    '이채은',
]

const name = names.findIndex((name) => name === '김민상');
// 2

undefined
// 정의하다
// 정의되지 않은
const data = {
    name: '이름',
    grade: '2학년',
};

data.score;
// undefined

if (data.score === undefined);
if (!data.score);

undefined // 공간 x
null // 공간 o

const arr = [1, 2, 3, 4, 5];
arr.forEach((x) => {
    console.log(x);
    // x = arr[i];
})

arr.some((x) => {
    console.log(x);
    return x === 3;
})

// 1, 2, 3

const buf = arr.map((x) => {
    console.log(x);
    return x * 2;
})

//buf = [2, 4, ]
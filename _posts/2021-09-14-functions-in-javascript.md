---
layout: post
title: "Functions in JavaScript"
date: 2021-09-14 12:19:10 +0200
categories: Notes-JavaScript
tags: Notes JavaScript function
---





## What are functions?

A piece of code that we can reuse over and over again in our code.

A function holds one or more complete lines of code.



### Example:

**1)**

```js
function keyWord() {
  console.log('this is the code');
}

keyWord();

```

`function keyWord()` // like this, if you don't assign any  `parameter` in parentheses, that means you made a simple function that runs without any argument. Don't forget the `curly brackets({})` around the code block. Don't use reserved keyword for the keyword(the name of function)

`console.log('this is the code');` // here, you can write the code that the function will hold. Don't forget the `semicolon(;)` at the end of it.

`keyWord();` // here, you are **running / calling / invoking** the function, that is you are using the function you created.

> Not all functions need to return something and not all functions need to accept parameters



2)

```js
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
```

`function fruitProcessor(apples, oranges)` // `apples` and `oranges` are parameters. They represent the value which will be assigned. So actually the name of parameter is not important, they are just like `x` or `y` in math. 

`return juice;` // this return the created value. 'Return' means that it puts the created value in the variable so that you can use the value when you will use the variable in the future (even outside of the function)

`fruitProcessor(5, 0);` // You can run the function like this. If you assign the specific value inside of parentheses, which we call it `arguments`, will be assigned in lieu of parameter of the code block either.

`const appleJuice = fruitProcessor(5, 0);` //To us e returned value, we can capture the value in a variable (not mandatory).

Further reading - 

[Functions in JavaScript](https://www.scaler.com/topics/javascript/javascript-functions/)



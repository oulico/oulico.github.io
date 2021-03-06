---
layout: post
title: "Strings and template literals in JavaScript"
date: 2021-09-03 16:31:20 +0200
categories: Notes-JavaScript
tags: Notes JavaScript string
---

Let's learn how to write **strings** in JavaScript.



### 1. Strings

``` js
const firstName = Oulico;
const birthYear = 1992;
let thisYear = 2021;
const job = Teacher;

const oulico = "I'm" + firstName + ', a ' + (thisYear - birthYear) + ' years old ' + job + '!';

console.log(oulico);
```



You can put `single quote(')`or `couble quote(")` around of strings. But you should be careful when you put `'` or `"` inside of strings like `I'm`. 

So I recommend to use **backtick (`)**.



### 2. Template literal

``` js
const oulicoNew = `I'm ${firstName}, a  ${thisYear - birthYear} years old ${job}!`
```

Or, you can do like this. Remember, you have to use **backticks** for it.



### 3. Multiple line string

```js
console.log(`multiple
line
strings`)
```



To write multiple lines, you can simply seperate the lines just like that (just hit the enter key).

But you should only use **backtick(`)**, or it doesn't work.



 


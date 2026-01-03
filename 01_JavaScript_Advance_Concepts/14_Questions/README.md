## Q1. 
```js
console.log(age); // undefine
var age = 20;
console.log(age);  // 20
```

## Q2.
```js
age = 21;   
console.log(age);
let age = 21;
```

Line 1 will give an error because we can’t access `let` or `const` variables before initialization. `let` and `const` live in the Temporal Dead Zone (TDZ) before they are actually initialized.

## Q3. 

```js
function test(x=y, y=2){
    console.log(x,y);
}

test();
```
It gives referenceError, in x=y y is not yet initiakized, y is in TDZ

## Q4.

```js
console.log("A");
console.log("B");
setTimeout(()=>console.log("C"), 5000);
console.log("D");
```

Output

``` 
A
B
D
C
```

## Q5. 
```js
async function getData(){
    return "Data";
}

console.log("A");
setTimeout(()=> console.log("B"), 0);
getData.then(()=> console.log("get Data done")); //promise
console.log("C");
console.log("D");
```

Output 
```
A
C
D
get Data done
B
```

## Q6.

```js
function a(){
    console.log("A");
}

setTimeout(()=>console.log("B"), 0);
a();
console.log("C");
Promise.reslove().then(()=> console.log("D"));
```

Output

```
A
C
D
B
```

## Q7.

```js
for(var i = 0; i < 5; i++){
    setTimeout(()=> console.log(i),0);
}

```

Output 

```
5
5
5
5
5
```

`var` is function scoped. It don't create new closure for each loop iteration.


## Q8.

```js
for(let i = 0; i < 5; i++){
    setTimeout(()=> console.log(i), 0);
}
```

Output 

```
0
1
2
3
4
```

`let` or `const` are block scope, They create a new closure for each loop iteration.

## Q9. 

```js
const A = {
    name : "Sam",
    sayName : function(){
        console.log(this.name);
    }
};

setTimeout(A.sayName, 3000);
```

Output

```
undefined
```

Because `setTimeout` runs differently, it doesn’t preserve `this`. So we need to explicitly bind the value of `this`.

```js
setTimeout(A.sayName.bind(A), 1000);
```

## Q10.

```js

console.log(+'5'); // convert '5' to number 5

console.log("5" + 5); /*or*/ console.log(5 + "5"); // "55" Continuation happens.

console.log("5" - 5); /*or*/ console.log(5 - "5"); // 0
 
console.log(5 + 'a'); // "5a"

console.log(5 - 'a'); // NaN
```

JavaScript is a dynamically typed and loosely typed language, meaning it automatically converts values based on context.

`+` is overloaded => it's used for both addition and string concatenation.

where as all other operaters `( -, *, /, % )` try to convert operands to number.

## Q11.

```js
if(""){
    console.log("hi");
}
```
Print noting, because `""` are falsy.

```js
if("0"){
    console.log("hi");
}
```
Print `hi`, `"0"` is true value.

```js
console.log([] == false);
```

Output : true

`[]` is converts to `""`, and `""` is false 

```js
console.log({} == false);
```

Output : false

Because object never converts to empty string directly.


## Q12. Pass by value or pass by reference, which one is used in JS ?

JS uses both.

JS uses  "pass by value" for everything, but for objects are passed bu reference.

Premitive types => pass by value.

Objects / arrays / function => pass by reference.



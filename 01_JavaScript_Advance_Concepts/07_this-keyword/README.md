# 'this' Keyword

`this` keyword is a special keyword that refers to the object that is executing current function or method.

<b>Note : </b> `this` is not decided where the function is written, but how the function is called.

## How this is Determined

Look at how the function is called, not where it is defined

### 1. `this` in Global Scope : 

- In browser it refers to `window`
- In Node.js it refers to empty object `{}`

Example : 

```js
console.log(this);

// Output :
// Browser => window
// Node.js => {}
```

### 2. `this` Inside a Normal Function : 

- In Non-strict mode it refers to window

Example :

```js
function show() {
  console.log(this);
}
show();

// Output  => window
```

- In strict mode it refers to undefined

Example : 
```js
"use strict";
function show() {
  console.log(this);
}
show();

// Output => undefined
```

Strict mode prevents accidental global binding.

### 3. `this` Inside an Object Method : 

- It refers to object who calling it

Example : 

```js
const user = {
  name: "Sam",
  greet() {
    console.log(this.name);
  }
};

user.greet();

// Output  => 'Sam'
```


### 4. `this` in Arrow Function : 

- Arrow functions do NOT have their own this
- They inherit this from their lexical (parent) scope

Example : 

```js
const obj = {
  name: "JS",
  arrow: () => {
    console.log(this.name);
  }
};

obj.arrow();

// Output => undefined
```

Here `this` comes from global scope, not obj

<hr>

## `this` Problem: Method Extraction

```js
const user = {
  name: "Samarth",
  greet() {
    console.log(this.name);
  }
};

const greetFn = user.greet;
greetFn();

// Output => undefined
```
Because now it’s a <b>normal function</b> call, not user.greet()

<hr>

## Explicit `this` Binding Methods

To explicitly bind `this` value while calling function we can use .call(), .apply(), or .bind() method.

### 1. .call() :

- Execute function immediately
- Arguments separated by commas

Syntax : 

```
functionName.call(thisArg, arg1, arg2, ...);
```

Example : 

```js
function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Sam" };

greet.call(user, "Japan");

// Output => "Sam from Japan"
```

### 2. .apply() :

- Execute function immediately
- Arguments passed as an array

Syntax : 

```
functionName.apply(thisArg, [arg1, arg2]);
```

Example :
```js
function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Sam" };

greet.apply(user, ["Japan"]);

// Output => "Sam from Japan"
```

### 3. .bind() :

- Does NOT execute immediately
- Returns a new function
- `this` is permanently bound

Syntax : 

```
const newFn = functionName.bind(thisArg, arg1, arg2);
```

Example : 

```js
function greet(city) {
  console.log(this.name + " from " + city);
}

const user = { name: "Sam" };

const boundGreet = greet.bind(user, "Japan");
boundGreet();

// Output => "Sam from Japan"
```

<hr>

### Note : 

### 1. `this` is lost in callbacks

Example :

```js
const user = {
  name: "Sam",
  greet() {
    console.log(this.name);
  }
};

setTimeout(user.greet, 1000); 

// Output => undefined 
```

Solution using bind()

```js
setTimeout(user.greet.bind(user), 1000);

// Output => Sam
```

### 2. `bind()` cannot be overridden

Once bound, always bound

Example : 
```js
function test() {
  console.log(this.name);
}

const a = test.bind({ name: "A" });
a.call({ name: "B" }); // A
```

### 3. Arrow functions ignore call/apply/bind
Example : 
```js
const arrow = () => {
  console.log(this.name);
};

const obj = { name: "Samarth" };

arrow.call(obj);   // undefined
arrow.apply(obj); // undefined

const boundArrow = arrow.bind(obj);
boundArrow();     // undefined
```
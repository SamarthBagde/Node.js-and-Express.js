# Type Conversion

Type Conversion in JavaScript is the process of manually converting a value from one data type to another.

It is explicit, meaning the developer intentionally changes the type.

Example :

```js
// String to Number
let num = Number("123"); // 123

// Number to String
let str = String(123); // "123"

// Any value to Boolean
let bool = Boolean(0); // false
```

# Type Coercion

Type Coercion in JavaScript is when the language automatically converts a value from one data type to another so that an operation can work.

It is implicit, meaning JavaScript does it for you without you having to write any conversion code.

Example :

```js
// String + Number → Number is coerced to string
console.log("5" + 2); // "52"

// String - Number → String is coerced to number
console.log("5" - 2); // 3

// Boolean in arithmetic
console.log(true + 1); // 2 (true → 1)
console.log(false + 5); // 5 (false → 0)
```

# Loose and Strict Equality

### 1. Loose Equality (==)

- Checks only the value, not the type
- Performs type coercion if needed

Example :

```js
5 == "5"; // true  (string "5" is converted to number 5)
0 == false; // true  (false → 0)
null == undefined; // true
```

### 2. Strict Equality (===)

- Checks both value and type
- No type coercion happens

Example :

```js
5 === "5"; // false (number !== string)
0 === false; // false (number !== boolean)
null === undefined; // false
```

<hr>

### Key Points

| Operator | Type Conversion | Compares     |
| -------- | --------------- | ------------ |
| `==`     | Yes (coercion)  | Value only   |
| `===`    | No              | Value + Type |

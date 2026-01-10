# Error Handling In Express

Express uses a specific type of middleware to handle errors, which is distinguished by having four arguments instead of three.

To define an error-handling middleware, you must provide four arguments: `(err, req, res, next)`. Even if you don't use the `next` object, you must maintain the signature so Express recognizes it as an error handler.

Example : 

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message
  });
});
```

Placement: This must be defined last, after all other app.`use()` and route calls.

## Types of errors 

There are two main types of errors :

### 1. Operational error :

Mistakes or problem that arise during the use of system or software.

They are not necessarily bugs in the code itself.

These are part of normal app flow

<b>Common Operational Errors : </b>

- Invalid user input.
- Wrong password
- JWT expired
- File not found

### 2. programming error : 

Errors caused by bugs in code.

- These are developer mistakes.
- They indicate something is wrong in the logic.

<b>Common Programming Errors : </b>

- Undefined variable
- Accessing property of `undefined`
- Syntax errors
- Wrong function usage


### Note : 
- So error handing in express mainly about operational error. 
- In error handler in express only show operational error. We never show programming error insted fo this we give simple error message like "Internal server error" (500).

- When we pass `err` in `next()`, express call error middleware.


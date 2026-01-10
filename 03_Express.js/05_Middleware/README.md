# Middleware 

Middleware is a function that sits between the request and the response in the Express request–response cycle. It has access to the request (req), response (res), and the next() function, which passes control to the next middleware in the chain.

Middleware can read, modify, block, or end a request. If it does not send a response, it must call `next()` to continue the flow.

## Types of Middleware in Express

### 1. Built-in Middleware

These are provided by express.

Common ones : 

- express.json() → parse JSON body (Makes the data available on req.body)
- express.urlencoded() → parse form data
- express.static() → serve static files

### 2. Application-level Middleware

Applied to the entire app or specific routes using `app.use()` or `app.METHOD()`.

Examples:

- Logging requests
- Parsing JSON
- Authentication


```js
app.use(express.json());
```

### 3. Router-level Middleware

Works like application middleware but is attached to an `express.Router()`.

Apply logic to a specific route.

Example :

```js
workRoute.get('/' , protect, getWorks);
```

Here protect is route-level middleware.

### 4. Custome middleware 

You can create your own middleware function.

Example :

```js
const logger = (req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    necx();
}

app.use(logger);
```


### 5. Error-handling Middleware

Used to catch and handle errors globally.

It takes 4 parameters : `(err, req, res, next)`

Example : 

```js
const errorhandler = (err, req, res, next)=>{
    res.send(msg : "Error ${err.msg}");
}

app.use(errorhandler);
```


## Note

- Order of middleware matters
    - Like logger middleware should be at first.
    - error handling middleware always at end of all routes and middleware.

- There two categories of middlewares, application (global) middleware and route-level middleware.
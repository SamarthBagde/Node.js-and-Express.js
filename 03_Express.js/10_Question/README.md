## Q1. app.use() vs app.all() ? 

- app.use() is used to mount middleware for HTTP methods.

    ```js
    app.use('/api', authMiddleware);
    ```

    Runs for:

    - GET /api/users
    - POST /api/login
    - DELETE /api/user
    - PUT /api/user


- app.all() is used for Global Route Handling. Route handler use for all HTTP methods.

    ```js
    app.all('/health', (req, res) => {
    res.send('OK');
    });
    ```

    Runs for:

    - GET /health
    - POST /health
    - PUT /health

    Used when you want same response for all methods on a specific route.


## Q2. Explain the Event Loop role in express ?

Although Express handles routing / middlewares logic, the actual request handling depends on Node.js Event Loop.

## Q3. How do you scale an Express.js app ?

Methods : 

- Node.js cluster module.
- Load balancers.
- Horizontal scaling with containers.
- Caching with Redis.
- Reverse proxies.


## Q4. How does Express handles security ? 

We can use :

- CORS configuration
- Rate limiting
- JWT authentication
- Input validation
- HTTPS usage

## Q5. Expres Router internals ? 

- Routes are stored as a stack.
- Each layer has path, HTTP method, Handler.
- During request : 
    - matching is O(n) sequential search.
    - calls each matching middleware.


## Q6. How does Express.js internally match a route ? 

Flow : 

- Incoming request arrive.
- Express iterates through middleware stack sequentially.
- For each item it perform
    - path matching
    - mathod matching
- If matched, the handler is executed.
- If handler call next(), express continue to next matching layer.

## Q7. What happen if `next()` is not called in middleware ?

If middleware does not call `next()` then

- The request hangs
- Brower keeps loading indefinitely
- Express will never reach the route handler or send response to client.


## Q8. Why Express considered "unopinionated" ?

Because it does not enforece a fixed structured for :
- folders
- Routing layout
- ORM or database
- Middleware section
- Project architecture

Developer decides everything.

## Q9. Express limitations ? 

- No built-in async error handling
- Routing takes O(n) time complexity
- No strict file structure
- Not the fastest framework\

## Q10. How do you test Express API's ?

We can use Jest, Mucha + chai, supertest for testing api endpoints or also for E2E testing , unit test.

## Q11. What is babel ?

Babel is JavaScript compiler that converst modern JS (ES6+) into  other JS (ES5). So it can run in other browsers or enviroment.

Bable makes it browser compatible.
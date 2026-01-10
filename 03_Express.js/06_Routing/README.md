# Routing

Routing decides how your server responds to a client request based on:
- URL (path)
- HTTP method (GET, POST, PUT, DELETE, etc.)


Think of it as a switchboard that directs incoming traffic to the correct function.

## Route Syntax

```js
app.METHOD(PATH, HANDLER)
```

- `app` : An instance of express.
- `METHOD` : An HTTP request method (like get, post, put, or delete).
- `PATH` : The path on the server (e.g., /users).
- `HANDLER` : The function executed when the route is matched.

Example :

```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```
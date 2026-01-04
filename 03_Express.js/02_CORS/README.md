# CORS

CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a web application running on one origin (domain, port, or protocol) is allowed to access resources from another origin.

It prevents malicious websites from reading data from another site without permission.


## Why CORS exists

Browsers follow the Same-Origin Policy.

This means :

- A frontend running on http://localhost:3000
- cannot access an API at http://localhost:5000

unless the server explicitly allows it using CORS headers.

## Using CORS in Express (ES6)

```js
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors(
    {
        origin : "http://localhost:5173",
        methods : ['GET' , 'POST' , 'PUT' , 'DELETE'],
        credentials : true
    }
));

app.get('/api', (req, res) => {
  res.json({ message: 'CORS enabled' });
});

app.listen(3000);
```

## Note 

- CORS is enforced by the browser, not the server
- Postman, curl, backend-to-backend calls do not care about CORS
- CORS errors appear only in browsers
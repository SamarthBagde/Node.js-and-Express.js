# Authentication

Authentication is the process of verifying the identity of a user.

It answers the question: “Are you really who you claim to be?”

Examples :

- Login using email & password
- OTP verification
- JWT token validation
- OAuth (Google, GitHub login)

Without authentication, the system does not know who the user is.

# Authorization

Authorization is the process of checking permissions after authentication.

It answers the question: “What can you access or do?”

Examples :

- Admin vs normal user access
- Only owner can delete a resource
- Role-based access (RBAC)

Authorization always happens after authentication.


# JWT

JWT (JSON Web Token) is a stateless authentication mechanism used to securely transmit user information between a client and a server.

<b>JWT is a digitally signed token that proves a user is authenticated.</b>

## JWT Structure

A JWT has three parts, separated by dots (.):

```css
HEADER.PAYLOAD.SIGNATURE
```

Example :

```nginx
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJpZCI6MSwicm9sZSI6InVzZXIifQ
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

1. Header :

    Contains token type and signing algorithm. Encoded using Base64Url.

    ```json
    {
    "alg": "HS256",
    "typ": "JWT"
    }
    ```

2. Payload :

    Contains claims (user data).

    Types of claims:

    - Registered: exp, iat, iss
    - Public: user-defined
    - Private: app-specific data

    ```json
    {
    "id": 1,
    "email": "sam@example.com",
    "role": "user",
    "exp": 1710000000
    }
    ```
    Payload is NOT encrypted, only encoded.

3. Signature : 

    Ensures integrity & authenticity.
    ```css
    HMACSHA256(
        base64UrlEncode(header) + "." + base64UrlEncode(payload),
        secretKey
    )
    ```


## Generate Token

```js
import jwt from 'jsonwebtoken';

const token = jwt.sign(
  { id: user.id, role: user.role }, // payload
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);
```

## Verify Token (Middleware)

```js
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ message: 'Token missing' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
```

## Sending JWT Token through Cookie

```js
  const options = {
    expire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,  // JS cannot access (XSS protection)
  };
  
  res.status(statusCode).cookie("token", token, options).json({
    status: "Success",
    token,
    data: {
      user,
    },
  });
```
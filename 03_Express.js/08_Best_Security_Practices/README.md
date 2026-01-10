# Best Security Practices in Express.js

- Use HTTPS to encrypt data in transit
- Use Helmet to set secure HTTP headers
- Disable x-powered-by header
- Hash passwords using bcrypt
- Use JWT with short expiration
- Store tokens in httpOnly cookies
- Validate and sanitize all user input
- Protect against NoSQL / SQL injection
- Configure CORS properly (avoid * in production)
- Apply rate limiting to prevent brute-force attacks
- Use CSRF protection when using cookies
- Handle errors securely (no stack traces in prod)
- Store secrets in environment variables (.env)
- Keep dependencies updated (npm audit)
- Log security events (auth failures, rate limits)
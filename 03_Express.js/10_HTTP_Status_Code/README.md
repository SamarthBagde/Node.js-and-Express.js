# HTTP Status Codes

HTTP status codes tell the client what happened to the request.

## 1xx – Informational
- 100 Continue → Request received, continue
- 102 Processing → Request has been received, Server is still processing it



## 2xx – Success

- 200 OK → Request successful
- 201 Created → Resource created
- 202 Accepted → Request accepted but not processed yet
- 203 Non-Authoritative Information → Response modified by a proxy
- 204 No Content → Success, no response body
- 205 Reset Content → Client should reset the form/view


## 3xx – Redirection

- 301 Moved Permanently → Resource moved permanently
- 302 Found → Temporary redirect
- 304 Not Modified → Cached response can be used
- 307 Temporary Redirect → Resource temporarily moved, HTTP method must remain same

## 4xx – Client Errors

- 400 Bad Request → Invalid request data
- 401 Unauthorized → Authentication required/failed
- 402 Payment Required → Reserved for future use
- 403 Forbidden → No permission
- 404 Not Found → Resource not found
- 405 Method Not Allowed → HTTP method not supported for this resource
- 406 Not Acceptable → Server cannot provide response in requested format
- 408 Request Timeout → Client took too long to send request, Server closed the connection
- 409 Conflict → Duplicate / conflict state
- 422 Unprocessable Entity → Validation error

## 5xx – Server Errors

- 500 Internal Server Error → Generic server error
- 501 Not Implemented → Server does not support requested method
- 502 Bad Gateway → Invalid upstream response
- 503 Service Unavailable → Server down/overloaded



## Common REST usage

- GET success → 200
- POST create → 201
- Auth failed → 401
- Permission denied → 403
- Not found → 404
- Validation error → 422
- Server crash → 500
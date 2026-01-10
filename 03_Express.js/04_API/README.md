# API 

An API (Application Programming Interface) allows software systems to communicate with each other in a well-defined and predictable way.

Example :

If you are at a restaurant, you (the Client) want food from the kitchen (the Server). You don't go into the kitchen yourself; instead, you give your order to the waiter (the API), who delivers it to the kitchen and brings the food back to you.

# REST API

A REST API (Representational State Transfer API) is a type of web API that follows a set of architectural principles for building scalable and maintainable services over HTTP.

### REST Constraints (Rules) :

- Client–Server : Client (UI) and server (logic + data) are separated.
- Stateless : Server stores no client session.
- Cacheable : Responses define whether they can be cached
- Resources are identified using URLs (e.g., /users, /users/1)


### Common Types of API Methods

When interacting with a REST API, you typically use these methods : 

| Method | Purpose        | Has Body |
| ------ | -------------- | -------- |
| GET    | Read           | ❌        |
| POST   | Create         | ✅        |
| PUT    | Replace        | ✅        |
| PATCH  | Partial update | ✅        |
| DELETE | Remove         | ❌        |


### PUT vs PATCH

`PUT` replaces the entire resource, while `PATCH` updates only specific fields.
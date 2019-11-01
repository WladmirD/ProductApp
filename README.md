# Ice Cream Ordering App

A Ice Cream ordering app made with javascript, node, express and mongodb.

## Getting Started

Clone the repository and extract it.
### Prerequisites

Node Js

NPM

MongoDB

### Running the tests

Take note that the API uses a token, you first have to create an account using postman

```
POST http://localhost:3000/users/register
```

using a name, email and passowrd, after that authenticate using 

```
Post http://localhost:3000/users/authenticate
```

with your email and password. Save the token and on headers add a key 

```
x-access-token TOKEN GOES HERE
```

plus your token. After an hour you have to authenticate again to keep using the api. To create a list or order, use 

```
POST http://localhost:3000/lists (or /order for orders)
```

Specify each key, for lists you will need a creator ID (you get it from authenticate) and a name for the list. For orders you will need 

```
"name, sabor, list (id), size and creator(id)"
```

To update simply use PUT with the ID of the list or order

```
PUT http://localhost:3000/lists/ID
```

To Delete, the same as PUT but with DELETE.

```
DELETE http://localhost:3000/lists/ID
```

to view all lists or orders, simply 

```
GET using http://localhost:3000/lists
```

To see a single list or order, use 

```
GET http://localhost:3000/lists/ID.
```

## Built With

* [Node.js]
* [Express]
* [MongoDB]
* [Body Parser]
* [Json Web Token]
* [Mongoose]
* [BCrypt]



## Versioning

0.0.1

## Authors

* **Wladmir Domingos** - *All* - [WladmirD](https://github.com/WladmirD)

## License

This project is licensed under the MIT License

## Acknowledgments

* First time ever trying javascript, it was hard.


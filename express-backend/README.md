# Express backend for Club Management System

This is a CRUD of RestAPI using NodeJS and MongoDB as a backend.

Run `npm install`

Run `npm start`

Respone will be a JSON

Home URL: `https://clubmanagementsystem-express.herokuapp.com`

Managing accounts `/users`

SIGN UP
Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/signup`
Request type: `POST`
Request header: key `Content-Type` value `application/json`
Request body: 
```
{
  "email": "String",
  "password": "String"
}
```

LOGIN
Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/login`
Request type: `POST`
Request header: key `Content-Type` value `application/json`
Request body:
```
{
  "email": "String",
  "password": "String"
}
```

LIST ALL USERS
Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/`
Request type: `GET`
Request header: 
  key `Content-Type` value `application/json`
  key `Authorization` value `Bearer YOUR_JWT`



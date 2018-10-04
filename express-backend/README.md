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

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

EDIT USER 

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id_TARGET_ID`

Request type: `PATCH`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body:
```
[
  {"propName": "FIELD_YOU_WANT_TO_EDIT", "value": "NEW_VALUE_OF_THAT_FIELD"}
]
```

DELETE USER 

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id_TARGET_ID`

Request type: `DELETE`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`


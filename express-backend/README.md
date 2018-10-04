# Express backend for Club Management System

This is a CRUD of RestAPI using NodeJS and MongoDB as a backend.

Run `npm install`

Run `npm start`

Respone will be a JSON

Home URL: `https://clubmanagementsystem-express.herokuapp.com`

---

**Managing authoriaztion** `/users`

**SIGN UP**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/signup`

Request type: `POST`

Request header: key `Content-Type` value `application/json`

Request body: 
```
{
  "email": "String",
  "password": "String",
  "accountId": "Number",
}
```

**LOGIN**

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

**LIST ONE USER**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

**LIST ALL USERS**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

**EDIT USER** 

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id`

Request type: `PATCH`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body:
```
[
  {"propName": "FIELD_YOU_WANT_TO_EDIT", "value": "NEW_VALUE_OF_THAT_FIELD"}
]
```

**DELETE USER**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id`

Request type: `DELETE`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

---

**Managing accounts** `/accounts`

**CREAT NEW ACCOUNT PROFILE**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts`

Request type: `POST`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body: 
```
{
  "name": "String",
  "isStaff": "String",
  "staffId": "String",
  "studentId": "String",
  "clubId": "String",
  "clubRole": "String",
  "joinDate": "String"
}
```

**LIST ONE ACCOUNT**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

**LIST ALL ACCOUNTS**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

**EDIT ACCOUNT**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/_id`

Request type: `PATCH`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body:
```
[
  {"propName": "FIELD_YOU_WANT_TO_EDIT", "value": "NEW_VALUE_OF_THAT_FIELD"}
]
```

**DELETE ACCOUNT**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/_id`

Request type: `DELETE`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`


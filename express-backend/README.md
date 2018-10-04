# Express backend for Club Management System

This is a CRUD of RestAPI using NodeJS and MongoDB as a backend.

Run `npm install`

Run `npm start`

Respone will be a JSON

Home URL: `https://clubmanagementsystem-express.herokuapp.com`

---

**MANAGING AUTHORIZATION** `/users`

**Sign up**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/signup`

Request type: `POST`

Request header: key `Content-Type` value `application/json`

Request body: 
```
{
  "email": "String",
  "password": "String",
  "accountId": "String",
}
```

**Login**

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

**List one user**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

**List all users**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

**Edit user** 

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id`

Request type: `PATCH`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body:
```
[
  {"propName": "FIELD_YOU_WANT_TO_EDIT", "value": "NEW_VALUE_OF_THAT_FIELD"}
]
```

**Delete user**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/users/_id`

Request type: `DELETE`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

---

**MANAGING ACCOUNTS DETAILS** `/accounts`

**Create new account details**

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

**List one account details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json`

**List all accounts details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/`

Request type: `GET`

Request header: key `Content-Type` value `application/json` 

**Edit account details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/_id`

Request type: `PATCH`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body:
```
[
  {"propName": "FIELD_YOU_WANT_TO_EDIT", "value": "NEW_VALUE_OF_THAT_FIELD"}
]
```

**Delete account details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accounts/_id`

Request type: `DELETE`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

---

**MANAGE CLUB DETAILS** `/clubs/`

**Create new club details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/clubs`

Request type: `POST`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body: 
```
{
  "clubName": "String",
  "president": "String",
  "vice": "String",
  "finance": "String",
  "currPoint": "Number",
  "currRank": "String",
  "prevRank": "String",
  "staffId": "String",
}
```

**List one club details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/clubs/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json`

**List all clubs details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/clubs/`

Request type: `GET`

Request header: key `Content-Type` value `application/json` 

**List all clubs details by rank**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/clubs/rank/currRank_NAME`

Request type: `GET`

Request header: key `Content-Type` value `application/json` 

**Edit club details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/clubs/_id`

Request type: `PATCH`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body:
```
[
  {"propName": "FIELD_YOU_WANT_TO_EDIT", "value": "NEW_VALUE_OF_THAT_FIELD"}
]
```

**Delete club details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/clubs/_id`

Request type: `DELETE`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

---

**MANAGE SCHEDULES DETAILS** `/schedules/

**Create new schedule details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/schedules`

Request type: `POST`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body: 
```
{
  "clubId": "String",
  "accountId": "String",
  "time": "String",
  "eventStart": "String",
  "eventEnd": "String",
  "description": "String",
  "porposalStatus": "String",
  "submitDate": "String",
  "reportStatus": "String",
  "reportDate": "String",
}
```

**List one schedule details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/schedules/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json`

**List one schedule details by clubId**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/schedules/clubId/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json`

**List all schedules details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/schedules/`

Request type: `GET`

Request header: key `Content-Type` value `application/json`

**Edit schedule details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/schedules/_id`

Request type: `PATCH`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body:
```
[
  {"propName": "FIELD_YOU_WANT_TO_EDIT", "value": "NEW_VALUE_OF_THAT_FIELD"}
]
```

**Delete schedule details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/schedules/_id`

Request type: `DELETE`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

---

**MANAGE ACCESS LOGS DETAILS** `/accessAudits/

**Create new schedule details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accessAudits`

Request type: `POST`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

Request body: 
```
{
  "clubId": "String",
  "accountId": "String",
  "prevLogin": "String",
  "prevLogout": "String",
  "prevAction": "String",
}
```

**List one audit details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accessAudits/_id`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`

**List all audits details**

Request URL: `https://clubmanagementsystem-express.herokuapp.com/accessAudits/`

Request type: `GET`

Request header: key `Content-Type` value `application/json` | key `Authorization` value `Bearer YOUR_JWT`



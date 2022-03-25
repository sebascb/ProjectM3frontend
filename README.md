# Project's name

*Ironhack-server-Project-M3*
*Pokkemon App*
*Version JS Platinum*

## Description 

A pokemon searching cards app where people can create Pokemon cards and collect your favorites ones and show them in your profile.

## Setup
- Fork this repo
- Clone this repo
```js
$ cd ProjectM3frontend
$ npm install
$ npm start
```

## User Actions

- 404: As a user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

- Sign up: As an user I can sign up in the platform.

- Login: As a user I can login to the platform and go to my profile/dashboard.

- Logout: As a user I can logout from the platform so no one else can use it

- Edit profiles As a user I can edit my profile.

## Requirements
### Authentication

- auth.login(user)
- auth.signup(user)
- auth.logout()

### Models
```js
User model

{
    name: String,
    email: String,
    password: String,
}

Card Poke model

{
	cardID: Number,
	image: String,
	name: String ,
	element: String,
	description: String,
	attack: Number,
	HP: Number,
	ability: String,
}
```

## Routes


|            |                                     |                                                              |                |              |                        |
| ---------- | ----------------------------------- | ------------------------------------------------------------ | -------------- | ------------ | ---------------------- |
| **Method** | **Route**                           | **Description**                                              | Success status | Error status | Request - Body         |
| `GET`      | `/`                                 | Main Pokemon page route.                                     |                |              |                        |
| `GET`      | `auth/login`                        | Renders `login` form view.                                   |                |              |                        |
| `POST`     | `auth//login`                       | Sends Login form data to the server.                         | 200            | 401          | { email, password }    |
| `GET`      | `auth/signup`                       | Renders `signup` options.                                    | 201            | 404          |                        |
| `GET`      | `auth/signup-user`                  | Renders `signup` form view for user.                         | 201            | 404          |                        |
| `POST`     | `auth/signup-user`                  | Sends Sign Up info to the server and creates user in the DB  | 201            | 404          | { email, password }    |     
| `GET`      | `/private/userprofile`              | Shows user profile details with cards.                       |                |              |                        |
| `GET`      | `/private/edit-userprofile`         | Private route. Shows`edit-profile user` form                 |                |              |                        |
<br>

## Backlog
-  Social Network
-  Meeting point through the map view

## Links
- Backend: https://github.com/sebascb/server-projectM3-jwt
- Instructions: https://slides.com/bagaloxley/deck/edit
- Slides: http://slides.com/sebascorralbrito/deck-4b9ada?ref=share#/0/6
- Deploy: https://cranky-lewin-d3d1ec.netlify.app

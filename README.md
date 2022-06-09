# api-server
## server features:
> - `/` (`get ,ethod`): to show home page (`localhost:3000/`).
> - `/food` (`post method`) : to enter a new food (`localhost:3000/food`).
> - `/food` (`get method`) : to show all foods in database (`localhost:3000/food`).
> - `/food/:id` (`get method`) : to show specific food by id (`localhost:3000/food/1`).
> - `/food/:id` (`put method`) : to update specific food (`localhost:3000/food/1`).
> - `/food` (`delete method`) : to delete all food database (`localhost:3000/food`).
> - `/food/:id` (`delete method`) : to delete specific food by id (`localhost:3000/1`).
- same methods used for clothes just replace food with clothes.

# express-list-endpoints:

## How to run server:
>`[`
`{ path: '/', methods: [ 'GET' ], middlewares: [ 'welcome' ] },`
`{`
`path: '/food',`
`methods: [ 'POST', 'GET', 'DELETE' ],`
`middlewares: [ 'addNewFood' ]`
`},`
`{`
`path: '/food/:id',`
`methods: [ 'GET', 'DELETE', 'PUT' ],`
`middlewares: [ 'getOneFood' ]`
`},`
`{`
`path: '/clothes',`
`methods: [ 'POST', 'GET', 'DELETE' ],`
`middlewares: [ 'addNewClothes' ]`
`},`
`{`
`path: '/clothes/:id',`
`methods: [ 'GET', 'DELETE', 'PUT' ],`
`middlewares: [ 'getOneClothes' ]`
`}`
` ] `
>### 1- by run in local:
>> - clone this repo to your local machine.
>> - cd to the repo.
>> - in terminal run `npm install` to install backage that used in this server `express , dotenv , jest , supertest , nodemon,pg,sequalize,sqlite3,body-barser,postgress,express-list-endpoints`
>> - after that run npm `index.js` ore use `nodemon`.
>> - there is multible way to see result of this server by browser or thunder client . 
>> - if u want to add feature to this server there is `test` by `jest` you can test features with it before add to main.
>> - if you see any issue with my server fork my repo with datals and solution if you have it.
>### 2- by use online app for this server by heruku 
>> - [saleh-basic-api-server](https://saleh-basic-api-server.herokuapp.com/)


## About this server
> - this server untel now undr workinf and many features will be added soon.
> - the food and clothes method make in this server as glopal middle war same as logger.
> - this server contains `middleWar` way for write functions.
> - this server contain  `404 error , 500 eror` handler. 
> - this server has test for all methods you can test before use anytime :).

# heroku link
> [saleh-basic-api-server](https://saleh-api-server.herokuapp.com/)

# GitHub actions link
> - [actions link](https://github.com/Salehziad/api-server/actions)

# The pull request link
> - [pull request](https://github.com/Salehziad/api-server/pulls?q=is%3Apr+is%3Aclosed)
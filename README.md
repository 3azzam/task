# Description 
this task to fetch some paginated data from external api then fetch the requried data from a local Database and display it in a front-end as table
## Installation
 you need [Node.js](https://nodejs.org/) installed , [Vue.js](https://vuejs.org/) v2, additionally a local relational database server is required. the task based on [Sequelize](https://sequelize.org/) orm to run (highly recommend Mysql).
 
 first adjust the `.env` files for client directory, server directory.  an `env.example` is provided in each directory then ,
 Install the dependencies and devDependencies and to start the server.
### backend
```sh
cd server
npm i
npm start
```
### frontend
```sh
cd client
npm i
npm run serve
```
additionally there is an extra directory to mock the external service if you wish to use it 
```sh
cd externalService
npm i
npm start
```

#### aditional notes
 - make sure you select the correct Dialect for sequlize in the `.env` file i used phpmyadmin as DB so the corresponding dialect was mariaDb 
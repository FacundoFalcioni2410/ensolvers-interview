# Ensolvers to-dos
### Ensolvers's interview

#### To get access to the application you will be asked to log in:
The test user is the following:  
email: 'testuser@test.com'  
password: 'testuser'

Visit the live deployed version clicking here: [Live deployed version](https://facundo-falcioni-ensolvers.herokuapp.com/)

This project was created with the following versions:

### Database
##### MySQL 5.1.1

### Frontend
##### Angular 12.2.11

### Backend
##### Express 4.17.1
##### NodeJS 14.18.1

To run locally the project will need a local mySQL database. Inside api/Server folder create a .env file to set up the DB with the following structure:

```
DATABASE_HOST="host name"  
DATABASE_USER="user name"  
DATABASE_NAME="bd name"  
DATABASE_PASSWORD="****"
```

The script to create the local database can be found in 'api/database/database.sql'  

Inside api/server directory, run:
'npm install'

This installs all dependecies needed

'npm run dev' to initialize the server

Inside todoApp directory, run:
'npm install'

To installs all dependecies needed

ng s -o to run locally

Open http://localhost:4200 to view it in the browser.

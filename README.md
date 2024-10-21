# Project Readme file

This document contains steps on how to setup and run this project in local machine

## Structure

`server` folder contgains the code for backend

## Setup React

### cd to the root directory of the project and run `npm install` to install th dependencies for the react application

### Run `npm start` to start the server on port `3000`

## Setup Backend server

### Run `cd server`

### Run `npm install` to install the deps for BE

## High level description

This project used multiple npm packages on both FE and on BE. Below are the detials of the packages used:

### React packages

1. mui - Component Styling
2. axios - External API calls
3. redux - For state management
4. sass - Custom CSS code
5. WebSocket - To use web sockets

### Node packages

1. express - To credate http server
2. nodemon - To listen for changes and auto restart server
3. pg - to connect to PostGresql
4. cors - To allow cross origin requests

### Import the DB.sql to setup the database in local

## DB Structure

DB Used: Postgres v15

Schema - 1
Tables - 2

Schema Used: public
Tables - user, connections

user table columns - username, email, password, fname, lname, last_login (date), last_pasword_change (date), photo_url

connections table columns - user_email, con_email, con_date, con_score

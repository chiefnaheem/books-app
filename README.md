<!-- 
# **Books App**

## **Description**

This is the project codebase for books app. It allows you do basic functionalities of CRUD  
<br>

## **Installation**
Getting Started
Before we start, we need to install some packages and tools. Recommend version is LTS Version for every tool and package.

Make sure check that tools has been installed successfully.

NodeJs
Yarn
Git


Clone Repo
Clone books-app with git.

git clone https://github.com/chiefnaheem/books-app.git
Install Dependencies
This project need some dependencies. Let's go install it.


```bash
$ yarn
```

Create environment
Make your own environment with copy from .env.example and edit some value.

cp .env.example .env
 

Database Migration
For this project, heroku provisioned postgres server was used

For migrate

npx prisma migrate dev --name init
npx prisma migrate deploy 


Environment
Detail information about the environment

APP Environment
NODE_ENV : string - (development or production)
DATABASE_URL: string - (postgres server url)
SHADOW_DATABASE_URL: string - (another postgres server url)

<br>

## **Running the app**

```bash
# development
$ yarn compile
$ yarn start


```



## API Documentation

Postman Documentation Link:

https://documenter.getpostman.com/view/18352675/2s83tDnXLB

open the document in your postman and run the requests with 'BOOKS-APP' environment


<!-- ## Test

```bash
# unit tests
$ yarn test


<br>

## **Code quality and convention**

- no committing of code with unused variable
- no committing of console.log to the repository

<br>


```
# example

feat: add commit message linting capabilities
```

allowed commit types include the following:

    "feat", "fix", "docs", "style", "refactor", "test", "revert"


 -->



```mermaid
erDiagram

  Person {
    Int id PK 
    String name  
    DateTime createdAt  
    DateTime updatedAt  
    }
  

  Professor {
    Int id PK 
    Int salary  
    Int personId  
    DateTime createdAt  
    DateTime updatedAt  
    }
  

  Student {
    Int id PK 
    Int studentNumber  
    Int personId  
    DateTime createdAt  
    DateTime updatedAt  
    }
  

  Address {
    Int id PK 
    String street  
    String city  
    String country  
    Int personId  
    DateTime createdAt  
    DateTime updatedAt  
    }
  

  Vehicle {
    Int id PK 
    String model  
    String plateNumber  
    Int personId  
    DateTime createdAt  
    DateTime updatedAt  
    }
  

  Drive {
    Int id PK 
    DateTime date  
    String distance  
    Int vehicleId  
    DateTime createdAt  
    DateTime updatedAt  
    }
  
    Professor o|--|| Person : "person"
    Student o|--|| Person : "person"
    Address o|--|| Person : "person"
    Vehicle o|--|| Person : "person"
    Drive o|--|o Vehicle : "vehicle"
```

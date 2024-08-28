## Overview

This is an Angular Todo application that allows users to create, view, edit, and delete todos. The application communicates with a dedicated API built using FastAPI and PostgreSQL to handle CRUD operations on the todos. The todo schema has title, category, done and id properties. The application also uses the Angular's FormBuilder, FormGroup and LocalStorage.
Getting Started
Prerequisites

* Node.js and npm (included with Node.js)
* Angular CLI
* FastAPI + Postgres - [API Repo](https://github.com/Thiagovasc/Todo-API)

Installation

Clone the repository:

    git clone https://github.com/Thiagovasc/Todo-App.git

Install the dependencies:

    npm install

Start the development server:

    ng serve -o

Navigate to http://localhost:4200/ in your browser to access the application.

![](/src/assets/images/todo-app.gif) 


## Testing 

Components:
- [x] addtodo component;
- [ ] todocontent;
- [ ] todolist;
- [ ] app component.

Services:
- [ ] api service.

# React-Quiz-App 

This is a simple quiz application created in [React.js](https://react.dev)
The application uses [Sass](https://sass-lang.com/) for styling, and [Vite](https://vitejs.dev/) building tool.


## Installations

### Install Git 
Refer to [this page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for instructions on how to install Git on your machine.

### Install NodeJs
Refer to https://nodejs.org/en/ to install nodejs.

### Install create-react-app
nstall create-react-app npm package globally. This will help to easily run the project and also build the source files easily.
```
$ npm install -g create-react-app
```
### Install Vite
```
$ npm install vite@latest
```

### Cloning the app
Clone the GitHub repository to local repository, then go into the project directory
``` 
$ git clone https://github.com/Alain-Pascal/react-quiz-app.git

$ cd react-quiz-app
```
### Install dependencies
```
$ npm install
```
### Run the application
```
$ npm run dev
```
The application runs on http://localhost:5173/

## App Arch
### Components
1. **Quiz** component: This component displays the questions. Questions and answers are hardcoded in quizQuestions.js file
2. **Result** component: This component displays the results of the quiz with an option to try again and save the scores.
3. **AnswerTimer** component: This component allows answering of questions within a limitted time. The current time limit is 15 seconds for each question.

### _To Do_
1. Fetch questions and answers from a database or using an API.
2. Add or create custom questions with custom score for each question.
3. Randomize the display of questions.

## Contributions
Feel free to contribute to this project or recommend any improvements. Any idea on how to implement those [ToDos](#To-Do) ?

## License
This repository is licensed under the [MIT License]().
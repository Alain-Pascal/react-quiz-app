import Quiz from "./components/Quiz/Quiz";
import { jsQuiz } from "./quizQuestions";

function App() {
  return (
    <Quiz questions={jsQuiz.questions}/>
  );
}

export default App

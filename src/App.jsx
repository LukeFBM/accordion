import data from "./data";
import Questions from "./Questions";
import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Questions question={questions} />
    </main>
  );
};
export default App;

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <article className="question">
      <header>
        {title}
        <button
          className="question-btn"
          onClick={() => setShowQuestion(!showQuestion)}
        >
          {showQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showQuestion && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;

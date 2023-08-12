import React from 'react';

const MCQSection = ({ questions, selectedAnswers, onSelectAnswer, onCheckout }) => {
  const maxQuestionsPerPage = 10;
  const currentPage = 0; // Assuming it's the first page (you can implement pagination if required)

  // Get the MCQ questions for the current page
  const currentQuestions = questions.slice(currentPage * maxQuestionsPerPage, (currentPage + 1) * maxQuestionsPerPage);

  return (
    <div className="mcq-section">
      <h3 className="text-lg divider font-bold mb-4">MCQ Section</h3>
      {currentQuestions.map((question, index) => (
        <div key={index} className="mcq-question bg-gray-100 rounded p-4 mb-4">
          <p className="text-gray-800 mb-2">{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={`btn  btn-sm mx-1 ${selectedAnswers[currentPage * maxQuestionsPerPage + index] === option ? 'btn-accent' : 'btn-outline'}`}
                onClick={() => onSelectAnswer(currentPage * maxQuestionsPerPage + index, option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        className="btn btn-accent mt-2"
        onClick={() => onCheckout()}
        disabled={selectedAnswers.length < maxQuestionsPerPage || selectedAnswers.length % maxQuestionsPerPage !== 0}
      >
        Checkout
      </button>
      {selectedAnswers.length >= maxQuestionsPerPage && selectedAnswers.length % maxQuestionsPerPage === 0 && (
        <div className="selected-answers mt-4">
          <h4 className="text-lg font-bold mb-2">Selected Answers</h4>
          {selectedAnswers.map((answer, index) => (
            <p key={index} className="mb-1">
              Question {index + 1}: {answer}
            </p>
          ))}
        </div>
      )}
      <button className='btn'>Check Answer</button>
    </div>
  );
};

export default MCQSection;

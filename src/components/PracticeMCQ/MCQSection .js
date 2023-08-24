import React, { useState } from 'react';

const MCQSection = ({ questions, selectedAnswers, onSelectAnswer, onCheckAnswers }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const maxQuestionsPerPage = 5;

  // Get the MCQ questions for the current page
  const currentQuestions = questions.slice(currentPage * maxQuestionsPerPage, (currentPage + 1) * maxQuestionsPerPage);
  // Determine if all questions on the page are answered
  const allQuestionsAnswered = currentQuestions.every((_, index) => selectedAnswers[currentPage * maxQuestionsPerPage + index]);


  const goToNextPage = () => {
    if (currentPage < Math.ceil(questions.length / maxQuestionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
      setShowCorrectAnswers(false); // Reset correct answers display
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setShowCorrectAnswers(false); // Reset correct answers display
    }
  };
  return (
    <div className="mcq-section">
      <h3 className="text-lg divider font-bold mb-4">MCQ Section : Total Questions {questions.length}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {currentQuestions.map((question, index) => (
          <div key={index} className="mcq-question bg-gray-100 rounded p-4 mb-4">
            <p className="text-gray-800 mb-2">{question.question}</p>
            <ul className="grid grid-cols-2 gap-2">
              {/* <ul className={`grid ${window.innerWidth <= 640 ? '' : 'md:grid-cols-2'}`}> */}
              {question.options.map((option, optionIndex) => {
                const isSelected = selectedAnswers[currentPage * maxQuestionsPerPage + index] === option;
                const isCorrect = option === question.correctAnswer;
                const shouldBeHighlighted = showCorrectAnswers && (isSelected || isCorrect);

                let className = "btn btn-sm m-1";
                if (shouldBeHighlighted) {
                  if (isSelected && !isCorrect) {
                    className += " bg-red-500";
                  } else if (isCorrect) {
                    className += " bg-green-500 text-neutral-50 font-bold";
                  }
                } else {
                  className += " " + (isSelected ? "btn-accent" : "btn-outline");
                }

                return (
                  <>
                    <li
                      key={optionIndex}
                      className={className}
                      onClick={() => onSelectAnswer(currentPage * maxQuestionsPerPage + index, option)}
                      style={{ textTransform: "none" }}
                    >
                      {option}

                    </li>

                  </>
                );
              })}
            </ul>
            {/* Show explanation if the answer is wrong */}
            {showCorrectAnswers &&
              selectedAnswers[currentPage * maxQuestionsPerPage + index] !==
              question.correctAnswer && <>
              <p className="text-red-300 mt-2">
                 {`ব্যাখ্যা: ${question.explanation}`} 
              </p>
            </> 

            }
            

          </div>
        ))}
      </div>

      {/* Check answer button */}

      <button
        className='btn btn-primary m-5'
        onClick={() => setShowCorrectAnswers(true)}
        disabled={!allQuestionsAnswered}
      >
        Check Answers
      </button>

      {/* Next page button */}
      <div className="pagination-buttons">
        <button className='btn btn-secondary m-5' onClick={goToPrevPage} disabled={currentPage === 0}>Prev</button>
        <button className='btn btn-secondary' onClick={goToNextPage} disabled={currentPage === Math.ceil(questions.length / maxQuestionsPerPage) - 1}>Next</button>
      </div>
    </div>
  );
};

export default MCQSection;

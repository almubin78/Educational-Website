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
      <h3 className="text-lg divider font-bold mb-4">MCQ Section</h3>

      {/* Updated */}
      {currentQuestions.map((question, index) => (
        <div key={index} className="mcq-question bg-gray-100 rounded p-4 mb-4">
          <p className="text-gray-800 mb-2">{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => {
              const isSelected = selectedAnswers[currentPage * maxQuestionsPerPage + index] === option;
              const isCorrect = option === question.correctAnswer;
              const shouldBeHighlighted = showCorrectAnswers && (isSelected || isCorrect);

              let className = "btn btn-sm mx-1";
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
                  >
                    {option}
                    
                  </li>
                  
                </>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Check answer button */}

      <button
        className='btn btn-accent mt-2'
        onClick={() => setShowCorrectAnswers(true)}
        disabled={!allQuestionsAnswered}
      >
        Check Answers
      </button>

      {/* Show answer Section */}

      {/* Next page button */}
      <div className="pagination-buttons">
        <button className='btn' onClick={goToPrevPage} disabled={currentPage === 0}>Prev</button>
        <button className='btn' onClick={goToNextPage} disabled={currentPage === Math.ceil(questions.length / maxQuestionsPerPage) - 1}>Next</button>
      </div>
    </div>
  );
};

export default MCQSection;

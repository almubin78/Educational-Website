import React, { useEffect } from 'react';
// import MakeMCQ from './MakeMCQ';
// import { Link } from 'react-router-dom';
import Calculator from './Calculator ';
import MCQSection from './MCQSection ';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PracticeMCQ = () => {
    const [mcqQuestions, setMcqQuestions] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/sscMcq')
        fetch('https://phyict-server-almubin78.vercel.app/sscMcq')
            .then(res => res.json())
            .then(data => setMcqQuestions(data))
    }, [])


    // Sample motivational speeches
    const motivationalSpeeches = [
        'Believe in yourself! You are capable of achieving greatness. With dedication and perseverance, you can conquer any challenge that comes your way.',
        'জীবন এবং সময়কে কীভাবে ও কোন পন্থায় ব্যবহার করা হয় তা দ্বাড়া আত্মমর্যাদাবোধ নির্ধারিত হয়ে থাকে।',
        'Success is not final; failure is not fatal: It is the courage to continue that counts.',
        'সুযোগ কখনো আমাদের দরজায় কড়া নাড়েনা কিংবা দরজা ভেংগে ভেতরে ঢুকার চেষ্টাও করেনা তবে সে আমাদের দরজার সামনেই দাঁড়িয়ে থাকে।',
        'The only limit to our realization of tomorrow will be our doubts of today.',
        'আমাদের ভবিষ্যৎ নির্ধারিত হয় সর্বোচ্চ গুরুত্বের ইচ্ছা শক্তি দ্বারা।',
        'You are never too old to set another goal or to dream a new dream.',
    ];

    // Randomly select a motivational speech
    // const randomMotivationalSpeech = motivationalSpeeches[Math.floor(Math.random() * motivationalSpeeches.length)];

    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [motivationalSpeechIndex, setMotivationalSpeechIndex] = useState(0);
    const [calculatorVisible, setCalculatorVisible] = useState(false);
    const toggleCalculator = () => {
        setCalculatorVisible(!calculatorVisible);
    };
    // Function to handle answer selection
    const handleSelectAnswer = (questionIndex, selectedAnswer) => {
        setSelectedAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            console.log(updatedAnswers);
            updatedAnswers[questionIndex] = selectedAnswer;
            return updatedAnswers;
        });
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setMotivationalSpeechIndex(prevIndex => (prevIndex + 1) % motivationalSpeeches.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    // Function to handle the "Checkout" button click
    const handleCheckout = () => {
        // Do something with the selected answers
        console.log('Selected Answers:', selectedAnswers);
    };


    return (
        <>
            <Link className='btn' to="/">Home Page</Link>
            <div className="">
                {/* Left Section - Motivational Speech */}
                {/* <div className={`motivational-section ${motivationalSpeechIndex >= 0 ? 'visible' : ''}`}>
                    <p>{motivationalSpeeches[motivationalSpeechIndex]}</p>
                </div> */}
                
                {/* Another system {easy} */}
                <div className="motivational-section p-4 min-h-[150px] shadow-xl">
                    <p className="text-lg italic text-purple-300">{motivationalSpeeches[motivationalSpeechIndex]}</p>
                    {/* <p className="text-lg italic">{randomMotivationalSpeech}</p> */}
                </div>



            </div>
            {/* MCQ Section */}
            {/* <ScientificCalculator/> */}
            <div className="motivational-and-calculator">
            <div className={`calculator-section ${calculatorVisible ? 'calculator-visible' : ''}`}>
                    <button className="btn btn-accent mb-2" onClick={toggleCalculator}>
                        {calculatorVisible ? "Hide Calculator" : "Show Calculator"}
                    </button>
                    {calculatorVisible && <Calculator />}
                </div>
                <MCQSection
                    questions={mcqQuestions}
                    selectedAnswers={selectedAnswers}
                    onSelectAnswer={handleSelectAnswer}
                    onCheckout={handleCheckout} // Pass the handleCheckout function to MCQSection
                />
                {/* Right Section - Calculator and MCQs */}
                
            </div>
        </>
    );
};


export default PracticeMCQ;
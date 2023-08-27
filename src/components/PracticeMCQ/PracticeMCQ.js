import React, { useContext, useEffect } from 'react';
import Calculator from './Calculator ';
import MCQSection from './MCQSection ';
import { useState } from 'react';
import { VarContext } from '../../context/AuthProvider';
import useDyanmicTitle from '../hooks/useDyanmicTitle';
import useMenu from '../hooks/useMenu';
import MenuCategory from './MenuCategory';

const PracticeMCQ = () => {
    useDyanmicTitle('Practice');
    const [menu] = useMenu();

    const firstCapter = menu.filter(item=>item.chapter === "ভৌত রাশি ও পরিমাপ")
    const secondCapter = menu.filter(item=>item.chapter === "গতি")
    const thirdCapter = menu.filter(item=>item.chapter === "বল")
    const forthCapter = menu.filter(item=>item.chapter === "কাজ, ক্ষমতা ও শক্তি");

    // console.log('first chapter',firstCapter,'second chapter',secondCapter,'third:',thirdCapter,'four',forthCapter);

    const {loading} = useContext(VarContext)
    const [mcqQuestions, setMcqQuestions] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/sscMcq')
        fetch('https://phyict-server-almubin78.vercel.app/sscMcq')
            .then(res => res.json())
            .then(data => setMcqQuestions(data))
    }, [])


    // Sample motivational speeches

/* 
    
*/
    // Randomly select a motivational speech
    // const randomMotivationalSpeech = motivationalSpeeches[Math.floor(Math.random() * motivationalSpeeches.length)];

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const [calculatorVisible, setCalculatorVisible] = useState(false);
    const toggleCalculator = () => {
        setCalculatorVisible(!calculatorVisible);
    };
    // Function to handle answer selection
    const handleSelectAnswer = (questionIndex, selectedAnswer) => {
        setSelectedAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            // console.log(updatedAnswers);
            updatedAnswers[questionIndex] = selectedAnswer;
            return updatedAnswers;
        });
    };

    // Function to handle the "Checkout" button click
    const handleCheckout = () => {
        // Do something with the selected answers
        console.log('Selected Answers:', selectedAnswers);
    };
    if(loading){
        return <progress className="progress w-56">Please wait</progress>
    }

    return (
        <>
            {/* <Motivational/> */}
            
            <div className="calculator-and-mcq">
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
                <MenuCategory chapter={firstCapter}></MenuCategory>
                <MenuCategory chapter={secondCapter}></MenuCategory>
                <MenuCategory chapter={thirdCapter}></MenuCategory>
                <MenuCategory chapter={forthCapter}></MenuCategory>

            </div>
        </>
    );
};


export default PracticeMCQ;
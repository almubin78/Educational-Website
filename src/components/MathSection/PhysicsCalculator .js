import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PhysicsCalculator = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [firstVelocity, setFirstVelocity] = useState('');
    const [time, setTime] = useState('');
    const [distance, setDistance] = useState('');
    const [acceleration, setAcceleration] = useState('');
    const [result, setResult] = useState('');




    const calculate = () => {
        if (selectedOption === 'distance') {
            const calculatedDistance = parseFloat(firstVelocity) * parseFloat(time) + 0.5 * parseFloat(acceleration) * parseFloat(time) ** 2;
            setResult(` নির্ণেয় দুরত্ব: ${calculatedDistance} m`);
        } else if (selectedOption === 'firstVelocity') {
            const calculateFirstVelocity = parseFloat(distance) / parseFloat(time) - 0.5 * parseFloat(acceleration) * parseFloat(time);
            setResult(`আদিবেগ: ${calculateFirstVelocity} m/s`);
        } else if (selectedOption === 'time') {
            const calculatedTime = Math.sqrt(parseFloat(2 * distance) / parseFloat(acceleration));
            setResult(`সময়: ${calculatedTime} s`);
        } else if (selectedOption === 'acceleration') {
            // Calculate acceleration option
        }
    };

    const renderInputFields = () => {
        if (selectedOption === 'distance') {
            return (
                <div className='grid'>
                    <div>
                        <label htmlFor="">আদি বেগ</label>
                        <input
                            type="number"
                            placeholder="আদিবেগ লিখ"
                            value={firstVelocity}
                            onChange={(e) => setFirstVelocity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">ত্বরণ</label>
                        <input
                            type="number"
                            placeholder="ত্বরণ লিখ"
                            value={acceleration}
                            onChange={(e) => setAcceleration(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">সময়</label>
                        <input
                            type="number"
                            placeholder="সময় লিখ"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div>
            );
        } else if (selectedOption === 'firstVelocity') {
            // Render input fields for firstVelocity calculation
            return (
                <div className='grid'>
                    <div>
                        <label htmlFor="">দুরত্ব</label>
                        <input
                            type="number"
                            placeholder="Distance"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">ত্বরণ</label>
                        <input
                            type="number"
                            placeholder="Enter Acceleration"
                            value={acceleration}
                            onChange={(e) => setAcceleration(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">সময়</label>
                        <input
                            type="number"
                            placeholder="Enter Time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div>
            );
        } else if (selectedOption === 'time') {
            // Render input fields for time calculation
            return (
                <div className='grid'>
                    <div aria-disabled>
                        <label htmlFor="">আদিবেগ [u = 0]</label>
                        <input
                            type="number"
                            placeholder=" আদিবেগ 0 ধরে কাজ করা হয়েছে"
                            value={0}
                            onChange={(e) => setFirstVelocity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">দুরত্ব</label>
                        <input
                            type="number"
                            placeholder="Distance"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="">ত্বরণ</label>
                        <input
                            type="number"
                            placeholder="Enter Acceleration"
                            value={acceleration}
                            onChange={(e) => setAcceleration(e.target.value)}
                        />
                    </div>

                </div>
            );
        } else if (selectedOption === 'acceleration') {
            // Render input fields for acceleration calculation
        }

        return null; // Default case, no input fields
    };

    return (
        <div className="distance-calculator">
            <h3 className="text-lg divider font-bold mb-4">s = ut+0.5 &#215; a &#215; t<sup>2</sup> এর ব্যবহার</h3>
            <div className="calculation-options grid md:grid-cols-2 lg:grid-cols-4">
                {/* Radio Button start */}
                <label>
                    <input
                        type="radio"
                        value="distance"
                        checked={selectedOption === 'distance'}
                        onChange={() => setSelectedOption('distance')}
                    />
                    দূরত্ব নির্ণয়ঃ
                </label>
                <label>
                    <input
                        type="radio"
                        value="firstVelocity"
                        checked={selectedOption === 'firstVelocity'}
                        onChange={() => setSelectedOption('firstVelocity')}
                    />
                    আদিবেগ নির্ণয়ঃ
                </label>
                <label>
                    <input
                        type="radio"
                        value="time"
                        checked={selectedOption === 'time'}
                        onChange={() => setSelectedOption('time')}
                    />
                    সময় নির্ণয়ঃ
                </label>
                <label>
                    <input
                        type="radio"
                        value="acceleration"
                        checked={selectedOption === 'acceleration'}
                        onChange={() => setSelectedOption('acceleration')}
                    />
                    ত্বরণ নির্ণয়ঃ
                </label>
            </div>
            {/* Radio button end */}

            <div className="input-fields">
                {renderInputFields()}
            </div>
            <button className="btn btn-accent mt-2" onClick={calculate}>
                Calculate
            </button>
            <div className="result">{result}</div>
            {/* Animation */}
            <div className="animation relative h-40">
                {selectedOption === 'distance' && (
                    <motion.div
                        className="bg-red-500 w-6 h-6 rounded-full absolute bottom-0"
                        initial={{ y: 0 }}
                        animate={{ y: -distance }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                )}
            </div>
        </div>
    );
};

export default PhysicsCalculator;

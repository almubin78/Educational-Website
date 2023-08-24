import React from 'react';
import { Link } from 'react-router-dom';

const Routine = () => {
  const schedule = [
    { day: 'Saturday', morningBatch1: 'HSC-Physics-1st', morningBatch2: 'Class Ten', eveningBatch1: 'Class Nine' },
    { day: 'Sunday', morningBatch1: 'HSC-Physics-2nd', morningBatch2: 'Class Ten', eveningBatch1: 'Home-Work ' },
    { day: 'Monday', morningBatch1: 'HSC-Physics-1st', morningBatch2: 'Home-Work ', eveningBatch1: 'Class Nine' },
    { day: 'Tuesday', morningBatch1: 'HSC-Physics-2nd', morningBatch2: 'Class Ten', eveningBatch1: 'Class Nine' },
    { day: 'Wednesday', morningBatch1: 'HSC-Physics-1st', morningBatch2: 'Class Ten', eveningBatch1: 'Home-Work ' },
    { day: 'Thursday', morningBatch1: 'HSC-Physics-2nd', morningBatch2: 'Home-Work ', eveningBatch1: 'Class Nine' },
    { day: 'Friday', morningBatch1: 'Weekly Exam', morningBatch2: 'Weekly Exam', eveningBatch1: 'Weekly Exam' },
  ];

  return (
    <div className="container table-container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-400">Weekly Schedule</h2>
      <p className='text-center'>( ICT will be included soon & the schedule is in test mood )</p>
      <span
        style={{ letterSpacing: '2px' }}
        class="inline-block animate-bounce rounded-full mt-3 p-3 bg-teal-700  text-white text-sm"
      >ICT with Advance!!Coming Soon....
      </span>
      <table className="table-auto w-full border">
        <caption className="text-xl font-bold mb-2">Routine Overview</caption>
        <caption className="text-sm font-bold mb-2">প্রত্যেক শ্রেণির আলাদা করে লেকচার প্লান দেখতে <Link to='/fullRoutine' className='text-warning'>এখানে ক্লিক কর</Link></caption>
        <thead>
          <tr>
            <th className="border px-4 py-2">Days Name</th>
            <th className="border px-4 py-2">8am - 9am</th>
            <th className="border px-4 py-2">9am - 10am</th>
            <th className="border px-4 py-2">4pm - 5pm</th>
            {/* <th className="border px-4 py-2">Evening Batch-2</th> */}
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-warning">{item.day}</td>
              <td className="border px-4 py-2">{item.morningBatch1}</td>
              <td className="border px-4 py-2">{item.morningBatch2}</td>
              <td className="border px-4 py-2">{item.eveningBatch1}</td>
              {/* {/* <td className="border px-4 py-2">{ite/} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Routine;
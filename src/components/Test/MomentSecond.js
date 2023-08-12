import moment from 'moment';
import React, { useEffect, useState } from 'react';

const MomentSecond = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);


  const calculateTimeLeft = () => {
    const targetDate = moment('2023-8-20', 'YYYY-MM-DD');
    const duration = moment.duration(targetDate.diff(currentTime));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return {
      days,
      hours,
      minutes,
      seconds,
      targetDate
    };
  };

  const timeLeft = calculateTimeLeft();
  const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  // const targetDate2 = moment('2023-8-15', 'YYYY-MM-DD');
  return (
    <div className="bg-gray-200 bg-transparent p-4 rounded-lg">

      Todays time:<p>{formattedDate}</p>
      Start at : 20-August-2023
      {/* We will be start Our program at {targetDate2} */}
      <p className=" text-lg font-bold mb-2">Launch after</p>
      
       <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default MomentSecond;
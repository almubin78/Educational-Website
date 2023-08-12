import React from 'react';

const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-600 h-16 w-16"></div> <br />
        <p className="text-gray-100 text-xl mt-4">Please Wait....</p>
      </div>
    );
  };

export default Loading;
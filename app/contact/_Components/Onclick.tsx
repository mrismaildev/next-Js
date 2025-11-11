"use client"
import React from 'react'


const Onclick = ({ className}) => {
  const fun = () => {
    console.log(alert('click me'));
  };
  return (
    <>
      <div className="mt-5">
        <h1>Hello ismail</h1>
        <button className={`${className} `} onClick={fun}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default Onclick
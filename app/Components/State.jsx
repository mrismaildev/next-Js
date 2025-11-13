'use client';
import React, { useState } from 'react';

const State = () => {
  const [text, setText] = useState('Hello');

  function textHandel(e) {
    console.log(setText(e.target.value));
  }

  const [like, setlike] = useState(false);

  function handelChange(e) {
    setlike(e.target.value);
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <input type="text" value={text} onChange={textHandel} />
      <p>Count: {text}</p>
      <label htmlFor="text">
        <input type="checkbox" checked={like} onChange={handelChange} />I like
        This
      </label>
      <p>you {like ? 'like' : 'did not like '} this.</p>
      <button onClick={() => setText('hello')}>Reset</button>
    </div>
  );
};

export default State;

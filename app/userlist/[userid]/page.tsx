"use client"
import React from 'react';

const page = ({ params }) => {
  return (
    <div>
      <h1>User Informatin: {params.userid}</h1>
    </div>
  );
};

export default page;

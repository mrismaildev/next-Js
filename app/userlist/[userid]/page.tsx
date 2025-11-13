'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const page = () => {
  const { userid } = useParams();
  return (
    <div>
      <h1>User Informatin: {userid}</h1>
    </div>
  );
};

export default page;

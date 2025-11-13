"use client";
import React from 'react';
import { useParams } from 'next/navigation';

const page = () => {
  const { topic } = useParams();
  return <p>This is catch all segment Page: {topic}</p>;
};

export default page;

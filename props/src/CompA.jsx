import React from 'react';
import CompB from './CompB';

const CompA = () => {
  const message = "Hello from CompA!";

  return (
    <div>
      <h1>This is CompA</h1>
      <CompB message={message} />
    </div>
  );
};

export default CompA;


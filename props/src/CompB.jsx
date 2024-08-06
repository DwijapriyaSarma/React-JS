import React from 'react';

const CompB = (props) => {
  return (
    <div>
      <h2>This is CompB</h2>
      <p>Message from CompA: {props.message}</p>
    </div>
  );
};

export default CompB;

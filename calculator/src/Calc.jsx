import React, { useState } from 'react';

let Calc = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      alert('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        if (number2 !== 0) {
          res = number1 / number2;
        } else {
          alert('Division by zero is not allowed');
          return;
        }
        break;
      case '%':
        if (number2 !== 0) {
          res = number1 % number2;
        } else {
          alert('Division by zero is not allowed');
          return;
        }
        break;
      default:
        alert('Invalid operation');
        return;
    }

    setResult(`Result: ${res}`);
  };

  const turnOff = () => {
    alert('Thank you for using the calculator');
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter first number"
      />{' '}
      <br /> <br />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter second number"
      />
      <br /> <br />
      <div className="calculator-keys">
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('/')}>/</button>
        <button onClick={() => calculate('%')}>%</button>
        <button onClick={turnOff}>Off</button>
      </div>
      <p id="result">{result}</p>
    </div>
  );
};

export default Calc;

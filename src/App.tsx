import React, { useState } from 'react';

const App: React.FC = () => {
  const [number, setNumber] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');
  const [width, setWidth] = useState<number | ''>('');

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value === '' ? '' : parseInt(e.target.value));
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value === '' ? '' : parseInt(e.target.value));
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value === '' ? '' : parseInt(e.target.value));
  };

  const renderNumbers = () => {
    if (typeof number === 'number' && number > 0) {
      const numbers = [];
      for (let i = 1; i <= number; i++) {
        numbers.push(i);
      }
      return <div>{numbers.toString()}</div>;
    }
    return null;
  };

  const calculateArea = () => {
    if (typeof height === 'number' && typeof width === 'number' && height > 0 && width > 0) {
      return <div>Area of Triangle: {0.5 * height * width}</div>;
    }
    return null;
  };

  return (
    <div className="app-div">
      <label>
        Number:
        <input type="number" value={number} onChange={handleNumberChange} />
      </label>
      <br />
      <br />
      {renderNumbers()}
      <br />
      <br />
      <label>
        Height:
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <label>
        Width:
        <input type="number" value={width} onChange={handleWidthChange} />
      </label>
      {calculateArea()}
    </div>
  );
};

export default App;
import React, { useState } from 'react';

const Task = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [pairs, setPairs] = useState([]);
  const findPairs = (target) => {
    const foundPairs = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          foundPairs.push([numbers[i], numbers[j]]);
        }
      }
    }
    setPairs(foundPairs);
  };

  return (
    <div>
      <h1>Number Pair Comparisons</h1>
      <div>
        <button onClick={() => findPairs(5)}>Find Pairs That Sum to 5</button>
      </div>
      <h2>Pairs:</h2>
      <ul>
        {pairs.map((pair, index) => (
          <li key={index}>{pair[0]} + {pair[1]} = {pair[0] + pair[1]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <h1>{inputValue}</h1>
    </div>
  );
}

export default App;

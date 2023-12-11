import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Enter Your name:</h1>
      <input type="text" onChange={(event)=>setInputValue(event.target.value)} />
    
    {inputValue ? <p>Hello {inputValue}!</p> : ""}
    
    </div>
  );
}

export default App;

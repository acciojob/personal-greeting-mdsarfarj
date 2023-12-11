import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <p>Enter Your name:</p>
      <input type="text" onChange={(event)=>setInputValue(event.target.value)} />
    
    {inputValue ? <p>Hello {inputValue}!</p> : ""}
    
    </div>
  );
}

export default App;

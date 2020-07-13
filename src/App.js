import React from 'react';
import Input from "./components/Input/input";
import Button from "./components/Button/button";

function App() {

  const addValue = () => {
    console.log('1111111111111111')
  }




  return (
      <div>
        <h1>todos</h1>
        <Input/>
        <Button onClick={addValue}/>
      </div>
  )

}

export default App;

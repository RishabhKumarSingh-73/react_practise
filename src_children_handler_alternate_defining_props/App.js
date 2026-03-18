import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from './Button';
import { Screen } from './Screen';

function App() {

  const [age,setAge] = useState(0)
  const [salary,setSalary] = useState(0)

  function handleAge(){
    setAge(age+1)
  }

  const handleSalary = ()=>{
    setSalary(salary+1000)
  }


  return (
    <div className="App">
      <Screen>Age: {age}</Screen>
      <Button handler={handleAge}>increment age</Button>
      <Screen>Salary: {salary}</Screen>
      <Button handler={handleSalary}>increment salary</Button>
    </div>
  );
}


export default App;

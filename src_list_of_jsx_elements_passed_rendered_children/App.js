import logo from './logo.svg';
import './App.css';
import { Employee } from './Employee';

function App() {

  const dept = ["dev","hr","testing","research"]

  const deptList = dept.map((index,dep)=>{
    return <li key={index}>{dep}</li>
  })

  return (
    <div className="App">
      <Employee><ol type='I'>{deptList}</ol></Employee>
    </div>
  );
}

export default App;

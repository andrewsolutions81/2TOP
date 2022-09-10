import Button from './'
import {useState} from
import './App.css';
import { Count } from './Components/Count';


function App() {

 const [count, setCount] = useState(0)
 const [color, setColor] =useState({blue})

  return (
    <div className="App">
      {/* <Count nombre={valor}/> */}
      <Count num={count}/>
      <Button setNum={setCount()} num={count}>Clickeame</Button>
    </div>
  );
}

export default App;

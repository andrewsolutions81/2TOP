import {
  React, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home.jsx'
import TodoSeTrataDeContexto from './pages/TodoSeTrataDeContexto.jsx'
import ReduxSimple from './pages/ReduxSimple.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/context" element={<TodoSeTrataDeContexto />} />
            <Route path="/reduxsimple" element={<ReduxSimple />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

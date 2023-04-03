import { Routes } from 'react-router-dom';
import './App.css';
import { getRouter } from './route';

// define your grid at different breakpoints, mobile first (smallest to largest)



function App() {

  // console.log(instance,photos);
  return (
    <Routes>
      {getRouter()}
    </Routes>
  );
}

export default App;

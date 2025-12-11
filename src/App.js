import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Approutes from './Approutes';

function App() {
  return (
    <>
      <Outlet/>
      <Approutes/>
    </>
  );
}

export default App;

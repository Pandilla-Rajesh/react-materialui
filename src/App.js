import './App.css';
import { Outlet } from 'react-router-dom';
import Approutes from './Approutes';
import OnLoadPopUp from './OnLoadPopUp/OnLoadPopUp';

function App() {
  return (
    <>
      <Outlet />
      <Approutes />
      <OnLoadPopUp />
    </>
  );
}

export default App;

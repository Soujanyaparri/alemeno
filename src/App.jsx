import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './Dashboard';
import Courselist from './Courselist'
import Coursedetails from './Coursedetails';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
        <Route path="Coursedetails" element={<Coursedetails/>}>
        </Route>
        <Route path="Courselist" element={<Courselist/>}/>

      </Routes>
    </BrowserRouter>  
    {/* <Dashboard/> */}
  </div>
    </>
  );
}

export default App;


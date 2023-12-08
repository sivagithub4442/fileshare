import React from 'react';
import './App.css';
import Mainpage from './Components/Mainpage';
import Frontpage from './Components/Frontpage';
import { Route, Routes } from 'react-router-dom';
import Uploads from './Components/Uploads';



function App() {
  

  return (
   <>
   <Routes>
      <Route path='/' element={<Frontpage/>}/>
      <Route path='/main' element={<Mainpage />}/>
      <Route path='/uploads' element={<Uploads/>}/>
   </Routes>
   
   
   
   </>
  );
}

export default App;


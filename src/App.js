import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

 


function App() {
 const pagesize =12;
  const [progress, setprogress] = useState(0);
  return (
  
     <div>
        <Router>
        <Navbar/>
     
        <Routes>
          <Route path="/" element={<News setprogress={setprogress}    pagesize={pagesize} key= "general" category = "general" country = "in" />} />
          <Route path="/business" element={<News setprogress={setprogress}    pagesize={pagesize} key= "business" category = "business" country = "in" />} />
          <Route path="/entertainment" element={<News setprogress={setprogress}    pagesize={pagesize} key= "entertainment" category = "entertainment" country = "in" />} />
          <Route path="/health" element={<News setprogress={setprogress}    pagesize={pagesize} key= "health" category = "health" country = "in" />} />
          <Route path="/science" element={<News setprogress={setprogress}    pagesize={pagesize} key= "science" category = "science" country = "in" />} />
          <Route path="/sports" element={<News setprogress={setprogress}    pagesize={pagesize} key= "sports" category = "sports" country = "in" />} />
          <Route path="/technology" element={<News setprogress={setprogress}    pagesize={pagesize} key= "technology" category = "technology" country = "in" />} />          
        </Routes>
        <LoadingBar
        height={5}
        color='#2597DE'
        progress={progress}
       
      />
     
    </Router>
     
     </div>
  )
}

export default App



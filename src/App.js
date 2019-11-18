import React from "react";
import About from "./components/About";
import Myfamily from "./components/Myfamily";
import Myrepositories from "./components/Myrepositories"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        
      <About/>

      <Myfamily/>

      <Myrepositories/>

     
      </div>
    </div>
  );
}

export default App;

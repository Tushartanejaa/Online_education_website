import React, { useState } from "react";
import './App.css';
import ResourcesPage from "./Cat";
import ForumPage from './ForumPage';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle === false ? <ResourcesPage /> : <ForumPage />}
    </div>
  );
}
export default App;

import style from "./App.module.css";
import axios from "axios";
import { Home } from "../src/components/views/index";
import { Routes, Route, useLocation } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3001"; 

function App() {

  // const location = useLocation();

  return (
    <div className={style.container}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
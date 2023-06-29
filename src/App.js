import './App.css';
import axios from "axios";
import { Home } from "../src/components/views/index";
import { Routes, Route } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3001"; 

function App() {

  // const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
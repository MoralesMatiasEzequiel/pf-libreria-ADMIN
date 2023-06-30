import './App.css';
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Products from './components/views/Products/Products';
import SideBar from './components/views/Sidebar/Sidebar';
import Post from './components/common/PostProducts/Post'
import Get from './components/common/GetProducts/Get'
import DisaPro from './components/common/DisabledProducts/DisaPro';
import PutPro from './components/common/PutProducts/PutPro';

axios.defaults.baseURL = "http://localhost:3001";

function App() {

  // const location = useLocation();

  return (
    <div className="App">
      <SideBar />
      <Routes>

        <Route path='/products' element={<Products />}>
          <Route path=':get' element={< Get />} />
          <Route path=':post' element={< Post />} />
          <Route path=':put' element={< PutPro />} />
          <Route path=':disa' element={< DisaPro />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
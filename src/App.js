import './App.css';
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Products from './components/views/Products/Products';
import SideBar from './components/views/Sidebar/Sidebar';
import Post from './components/common/PostProduct/PostProduct'
import GetProducts from './components/common/GetProducts/GetProducts'
import DisaPro from './components/common/DisabledProducts/DisaPro';
import PutPro from './components/common/PutProducts/PutPro';
import Users from './components/views/Users/Users';
import GetUsers from './components/common/GetUsers/GetUsers';
import PutUsers from './components/common/PutUser/PutUser';


axios.defaults.baseURL = "http://localhost:3001";

function App() {

  // const location = useLocation();

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path='/products' element={<Products />}>
          <Route path=':get' element={<GetProducts />} />
          <Route path=':post' element={<Post />} />
          <Route path=':put' element={<PutPro />} />
          <Route path=':disa' element={<DisaPro />} />
        </Route>
      </Routes>
      <Routes>
        <Route path='/users' element={<Users />}>
          <Route path=':get' element={<GetUsers />} />
          <Route path=':put' element={<PutUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
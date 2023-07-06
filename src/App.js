import './App.css';
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Products from './components/views/Products/Products';
import SideBar from './components/views/Sidebar/Sidebar';
import Post from './components/common/PostProduct/PostProduct'
import GetProducts from './components/common/GetProducts/GetProducts'
import PutPro from './components/common/PutProducts/PutPro';
import Users from './components/views/Users/Users';
import GetUsers from './components/common/GetUsers/GetUsers';
import DetailUser from './components/views/DetailUser/DetailUser';
import Orders from './components/views/Orders/Orders';


axios.defaults.baseURL = "http://localhost:3001";

function App() {

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path='/products' element={<Products />}>
          <Route path=':get' element={<GetProducts />} />
          <Route path=':post' element={<Post />} />
          <Route path=':put' element={<PutPro />} />
        </Route>

        <Route path='/users' element={<Users />}>
          <Route path=':get' element={<GetUsers />} />
          <Route path=':detail' element={<DetailUser />} />
        </Route>
        <Route path='/orders' element={<Orders />}/>
      </Routes>
    </div>
  );
}

export default App;

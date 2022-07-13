import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Notfound from './pages/Notfound';
import Orders from './Orders/Orders';

function App() {
  return (
    <div className="">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/menu' element={<Menu></Menu>}></Route>

          <Route path='/orders/:ordersId' element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }></Route>
          
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

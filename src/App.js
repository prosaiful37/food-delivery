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
import MyOrder from "./pages/Dashboard/Order/MyOrder";
import Dashboard from './pages/Dashboard/Dashboard';
import MyReview from './pages/Dashboard/MyReview/MyReview';
import Users from './pages/Dashboard/Users/Users';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './pages/Login/RequireAuth/RequireAdmin';

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

          {/* nested route dashboard */}
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}>
            </Route>

          </Route>
          
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Routes>
        <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;

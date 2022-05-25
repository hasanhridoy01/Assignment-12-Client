import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/CommonPages/Footer/Footer';
import Header from './components/CommonPages/Header/Header'
import Home from './components/HomePage/Home/Home';
import AllProduct from './components/HomePage/AllProduct/AllProduct';
import Purchase from './components/HomePage/Purchase/Purchase';
import MyProfile from './components/MyProfile/MyProfile';
import Login from './components/AuthPages/Login/Login';
import Registration from './components/AuthPages/Registration/Registration';
import RequireAuth from './components/AuthPages/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyOrder from './components/Dashboard/MyOrder';
import AllUser from './components/Dashboard/AllUser';
import RequireAdmin from './components/AuthPages/RequireAdmin';
import AddReview from './components/Dashboard/AddReview';
import MyReview from './components/Dashboard/MyReview';
import AddProduct from './components/Dashboard/AddProduct';
import MyProduct from './components/Dashboard/MyProduct';
import Payment from './components/Dashboard/Payment';
import DefaultPage from './components/DefaultPage/DefaultPage';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/home' element={ <Home></Home> }></Route>
        <Route path='/allproducts' element={ <AllProduct></AllProduct> }></Route>
        <Route path='/myprofile' element={ 
          <RequireAuth>
            <MyProfile></MyProfile>
          </RequireAuth>
         }></Route>
        <Route path='/purchase/:itemsId' element={ 
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
         }></Route>

         <Route path='/dashboard' element={ 
           <RequireAuth>
             <Dashboard></Dashboard>
           </RequireAuth>
          }>
            <Route path='alluser' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>}></Route>
            <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
            <Route path='addreview' element={<AddReview></AddReview>}></Route>
            <Route path='myreview' element={<MyReview></MyReview>}></Route>
            <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='myproduct' element={<MyProduct></MyProduct>}></Route>
            <Route path='payment/:paymentId' element={<Payment></Payment>}></Route>
          </Route>

        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/registration' element={ <Registration></Registration> }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<DefaultPage></DefaultPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

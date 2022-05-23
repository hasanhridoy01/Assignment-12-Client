import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/CommonPages/Footer/Footer';
import Header from './components/CommonPages/Header/Header'
import Home from './components/HomePage/Home/Home';
import AllProduct from './components/HomePage/AllProduct/AllProduct';
import Purchase from './components/HomePage/Purchase/Purchase';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/home' element={ <Home></Home> }></Route>
        <Route path='/allproducts' element={ <AllProduct></AllProduct> }></Route>
        <Route path='/myprofile' element={ <MyProfile></MyProfile> }></Route>
        <Route path='/purchase' element={ <Purchase></Purchase> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

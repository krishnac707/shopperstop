import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import MultipleProduct from './components/mulipleProduct/MultipleProduct';
import SingleProduct from './components/singleproduct/SingleProduct';
import Profile from './components/profile/Profile';
import Cart from './components/cart/Cart';


function App() {

  return (
    <>
        <Header></Header>
        <Routes>
            <Route exact path='/login' element = {<Login />} />
            <Route exact path='/register' element ={<Register />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/all-products' element={<MultipleProduct />} />
            <Route exact path='/single-product/:id' element={<SingleProduct />} />
            <Route exact path='/profile' element = {<Profile   />} />
            <Route exact path='/cart' element = {<Cart   />} />

        </Routes>
        <Footer></Footer>
    </>
  );
}

export default App;

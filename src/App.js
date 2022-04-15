import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home/Home';
import Header from './pages/shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Authentication/Login/Login';
import Signup from './pages/Authentication/Signup/Signup';
import BreakFast from './pages/home/Home/FoodSection/BreakFast/BreakFast';
import Lunch from './pages/home/Home/FoodSection/Lunch/Lunch';
import Dinner from './pages/home/Home/FoodSection/Dinner/Dinner';
import Footer from './pages/shared/Footer/Footer';
import Cart from './pages/Cart/Cart';
import RequireAuth from './pages/Authentication/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}>
          <Route path='breakfast' element={<BreakFast />}></Route>
          <Route path='lunch' element={<Lunch />}></Route>
          <Route path='dinner' element={<Dinner />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/cart' element={<RequireAuth>
          <Cart></Cart>
        </RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

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
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

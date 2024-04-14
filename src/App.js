import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages';
import Payment from './pages/payment';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './pages/success';

function App() {
  return (
    <div style={{minHeight:"100vh"}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './component/landingPage';
import Cart from './component/cart';
import Order from './component/order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

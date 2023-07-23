import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './component/landingPage';
import Cart from './component/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

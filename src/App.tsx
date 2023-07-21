import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './component/login';
import LandingPage from './component/landingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/profile' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

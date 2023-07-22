import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './component/landingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

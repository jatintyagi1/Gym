import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import WomenHomePage from './portals/Women/pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/women' element={<WomenHomePage />} />
    </Routes>
  );
}

export default App;

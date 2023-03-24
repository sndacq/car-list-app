import { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';

import NavBar from './components/NavBar';

import NoPage from './pages/NoPage';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';

import { getCars } from './utils/mocks';

import { ICar } from './utils/types';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cars, setCars] = useState([] as ICar[]);

  useEffect(() => {
    const data = getCars(100);
    setCars(data);
  }, []);

  return (
    <div className="main">
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home data={cars} searchTerm={searchTerm} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="details/:id" element={<DetailsPage data={cars} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

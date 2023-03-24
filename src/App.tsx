import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import NavBar from './components/NavBar';

import NoPage from './pages/NoPage';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';

const App = () => (
  <div className="main">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

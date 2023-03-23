import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';

import NoPage from './pages/NoPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="details/:id" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

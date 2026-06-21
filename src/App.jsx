import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Payments from './pages/Payments';
import Forms from './pages/Forms';
import Shop from './pages/Shop';
import ServiceCategory from './pages/ServiceCategory';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service/:slug" element={<ServiceCategory />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

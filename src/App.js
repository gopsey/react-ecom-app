import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BrowseByCategory from "./pages/BrowseByCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/:categories/productsBy/:categoryId' element={<BrowseByCategory />} />
            <Route path='/:productId/:variantId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

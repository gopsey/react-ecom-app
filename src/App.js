import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BrowseByCategory from "./pages/BrowseByCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/:categories/productsBy/:categoryId' element={<BrowseByCategory />} />
            <Route path='/:category/:product/:skuId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

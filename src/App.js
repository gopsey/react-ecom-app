import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BrowseByCategory from "./pages/BrowseByCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category' element={<BrowseByCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

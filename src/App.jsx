import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
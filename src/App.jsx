import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer'



function App() {

  return (

    <div>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes >
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/Categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/Item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h2>Sitio en Construcción</h2>} />
          </Routes>
          <Footer />
        </CarritoProvider>

      </BrowserRouter>

    </div>

  );
}

export default App;
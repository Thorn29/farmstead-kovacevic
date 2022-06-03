import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollUp from './ScrollUp';
import Loader from './components/layout/Loader';
import About from './pages/About';
import Information from './pages/Information';
import Products from './pages/Products';
import Shop from './pages/Shop';
import Livestock from './pages/Livestock';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

const App = () => {

    return (
      <BrowserRouter>
        <HelmetProvider>
          <Suspense fallback={<Loader />}>
            <div className="App">
              <ScrollUp>
              <Routes>
                <Route exact path='/' element={<About />}/>
                <Route exact path='/informacije' element={<Information />}/>
                <Route exact path='/proizvodi' element={<Products />}/>
                <Route exact path='/prodavnica' element={<Shop />}/>
                <Route exact path='/prodaja_grla' element={<Livestock />}/>
                <Route exact path='/kontakt' element={<Contact />}/>
                <Route exact path='/kasa' element={<Checkout />}/>
                <Route path='/*' element={<Error />}/>
              </Routes>
              </ScrollUp>
            </div>
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    );
}

export default App;

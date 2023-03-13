

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Content from './pages/content/Content'
import Cart from './components/cart/Cart';
import Favorites from './pages/favorites/Favorites';

function App() {

  const [cartOpened, setCartOpened] = useState(false)

  return (
    <div className='main-wrapper bg-[#fff] max-w-[1080px] rounded-[20px] mx-[auto] pb-[42px] overflow-hidden'>

      {cartOpened && <Cart 
      onClose={() => setCartOpened(false)} />}

      {cartOpened ? 
      document.querySelector('body').classList.add('overflow-hidden') :
      document.querySelector('body').classList.remove('overflow-hidden')}

      <Header openCart={() => setCartOpened(true)} />

      <div className='w-[100%] h-[1px] bg-[#EAEAEA]'></div>      

      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    
    </div>
  );
}

export default App;

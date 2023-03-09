

import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content'
import Cart from './components/cart/Cart';

function App() {

  const [cartOpened, setCartOpened] = useState(false)

  return (
    <div className='main-wrapper bg-[#fff] max-w-[1080px] rounded-[20px] mx-[auto] pb-[42px]'>

      {cartOpened && <Cart onClose={() => setCartOpened(false)} />}

      <Header openCart={() => setCartOpened(true)} />

      <div className='w-[100%] h-[1px] bg-[#EAEAEA]'></div>

      <Content />
    
    </div>
  );
}

export default App;

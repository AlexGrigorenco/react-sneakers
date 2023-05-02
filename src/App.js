

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/content/Home'
import Cart from './components/cart/Cart';
import Favorites from './pages/favorites/Favorites';
import Orders from './pages/orders/Orders';
import { FirebaseState } from './context/firebaseState';

function App() {

  const [cartOpened, setCartOpened] = useState(false)

  return (
    <FirebaseState>
        <div className='main-wrapper bg-[#fff] max-w-[1080px] rounded-[20px] mx-[auto] pb-[42px] overflow-hidden'>

           <Transition
                in={cartOpened}
                timeout={500}
                mountOnEnter
                unmountOnExit
                >
                      {state => <Cart state={state}
                      onClose={() => setCartOpened(false)} />}
          </Transition>

          {cartOpened ? 
          document.querySelector('body').classList.add('overflow-hidden') :
          document.querySelector('body').classList.remove('overflow-hidden')}

          <Header openCart={() => setCartOpened(true)} />

          <div className='w-[100%] h-[1px] bg-[#EAEAEA]'></div>      

          <Routes>
            <Route path='/react-sneakers' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        
        </div>
    </FirebaseState>
  );
}

export default App;

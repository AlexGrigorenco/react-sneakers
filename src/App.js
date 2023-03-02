
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content'
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className='main-wrapper bg-[#fff] max-w-[1080px] rounded-[20px] mx-[auto] pb-[42px]'>

      <Cart />

      <Header />

      <div className='w-[100%] h-[1px] bg-[#EAEAEA]'></div>

      <Content />
    
    </div>
  );
}

export default App;

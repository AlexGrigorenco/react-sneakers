
import cart from './images/cart.svg'
import heart from './images/heart.svg'
import userIcon from './images/user-icon.svg'
import logo from './images/logo.svg'


const Header = () => {
    return ( 
        <header className='py-[42px]'>
        <div className='container'>
        <div className='flex justify-between gap-[20px]'>
        <div className='left flex gap-[16px]'>
          <img className='max-w-[40px]' src={logo} alt="logo" />
          <div>
            <h3 className='font-[700] text-[20px]'>
            REACT SNEAKERS
            </h3>
            <span className='font-[400] text-[14px] text-[#9D9D9D]'>
            Магазин лучших кроссовок
            </span>
          </div>
        </div>

        <div className='right flex items-center gap-[30px]'>
          <div className='flex gap-[10px]'>
            <img className='max-w-[18px]' src={cart} alt="cart" />
            <span className='text-[#5C5C5C]'>
            1205 руб.
            </span>
          </div>
          <div className='flex gap-[28px]'>
            <img className='max-w-[18px]' src={heart} alt="heart" />
            <img className='max-w-[18px]' src={userIcon} alt="userIcon" />
          </div>
        </div> 
        </div>
        </div>
      </header>
     );
}
 
export default Header;
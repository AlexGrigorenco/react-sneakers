

import { NavLink } from 'react-router-dom';
import arrow from './images/arrow.svg'
import emodge from './images/emodge.png'

const FavoriteEmpty = () => {
    return ( 
        <div className=' flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 z-10'>
            <div className='flex flex-col items-center gap-[12px]'>
                <div>
                    <img src={emodge} alt="emodge" />
                </div>
                <p className='font-[600] text-[24px] text-[#000] pt-[12px]'>
                Закладок нет :(
                </p>
                <span className='opacity-40 text-[16px] pb-[30px]'>
                Вы ничего не добавляли в закладки
                </span>
                <NavLink to="/" className='pt-[30px]'>
                    <button className='bg-[#9DD458] rounded-[18px] flex items-center gap-[20px] py-[18px] px-[32px] hover:bg-[#77a93a]'>
                        <img className='rotate-180' src={arrow} alt="arrow" />
                        <span className='text-[#fff] font-[600] '>
                        Вернуться назад
                        </span>
                    </button>
                </NavLink>
            </div>
        </div>
     );
}
 
export default FavoriteEmpty;
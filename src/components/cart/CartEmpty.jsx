

import boxEmpty from './images/box-empty.png'
import arrow from './images/arrow.svg'


const CartEmpty = ({onClose}) => {
    return ( 
        <div className='min-h-[100%] flex flex-col justify-center gap-[10px] items-center grow '>
        <div className='pb-[30px]'>
            <img src={boxEmpty} alt="boxEmpty" />
        </div>
        <p className='title font-[600] text-[22px] text-center '>
        Корзина пустая
        </p>
        <span className='text-center opacity-40 text-[16px] max-w-[300px]'>
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </span>
        <div className='pt-[30px]'>
            <button onClick={onClose} className='bg-[#9DD458] rounded-[18px] flex items-center gap-[20px] py-[18px] px-[32px] hover:bg-[#77a93a]'>
                <img className='rotate-180' src={arrow} alt="arrow" />
                <span className='text-[#fff] font-[600] '>
                Вернуться назад
                </span>
            </button>
        </div>
        </div>
     );
}
 
export default CartEmpty;
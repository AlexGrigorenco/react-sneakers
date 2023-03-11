

import axios from 'axios';
import removeImg from './images/remove.svg'


const Card = ({img, title, price, id}) => {

    const removeCartProduct = () => {
        axios.delete(`https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/cart/${id - 1}.json`)
    }

    return ( 
        <div className='flex items-center gap-[20px] border border-[#F3F3F3] rounded-[20px] py-[30px] px-[20px] '>
                        <div className='max-w-[70px]'>
                            <img src={img} alt="sneakers" />
                        </div>
                        <div className='flex flex-col gap-[8px] '>
                            <p className='text-[14px]'>{title}</p>
                            <p className='font-[700] text-[14px] '>{price} руб.</p>
                        </div>
                        <div>
                            <button 
                            onClick={removeCartProduct}
                            className='opacity-[0.5] hover:opacity-[1] w-[32px] h-[32px] rounded-[8px] border border-[#DBDBDB] flex items-center justify-center cursor-pointer '>
                                <img src={removeImg} alt="remove" />
                            </button>
                        </div>
                    </div>
     );
}
 
export default Card;
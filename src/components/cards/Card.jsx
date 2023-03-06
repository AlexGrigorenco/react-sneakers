

import './style.css'
import heart from "./images/heart.svg"
import plus from "./images/plus.svg"


const Card = ({img, title, price, id}) => {
    
    return ( 
        <div className='card w-[220px] rounded-[40px] border border-[#F3F3F3] p-[30px] flex flex-col gap-[10px]'>

            <div className="relative">
                <div className="absolute  top-[0] left-[0] border p-[6px] rounded-[4px] cursor-pointer">
                    <img src={heart} alt="heart" />
                </div>
            <img className='w-[133px] h-[112px]' src={img} alt="sneakers" />
            </div>

            <p className='text-[14px] font-[400]'>{title}</p>

            <div className="flex justify-between items-center">
                <div>
                    <span className="font-[500] uppercase text-[#BDBDBD] text-[11px]">Цена:</span>
                    <p className="font-[700] text-[14px]">{price} руб.</p>
                </div>
                <div>
                    <button onClick={() => alert(id)} className="border p-[8px] rounded-[4px] cursor-pointer">
                            <img src={plus} alt="plus" />
                    </button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Card;


import './style.css'


const Card = ({img, title, price, id}) => {
    
    return ( 
        <div className='card w-[220px] rounded-[40px] border bg-[#fff] border-[#F3F3F3] p-[30px] flex flex-col gap-[10px]'>
              <div className="relative">
            <img className='w-[133px] h-[112px]' src={img} alt="sneakers" />
            </div>

            <p className='text-[14px] font-[400]'>{title}</p>

            <div className="">
                <div>
                    <span className="font-[500] uppercase text-[#BDBDBD] text-[11px]">Цена:</span>
                    <p className="font-[700] text-[14px]">{price} руб.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;
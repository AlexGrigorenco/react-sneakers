

import Card from "../cards/Card";
import data from '../cards/SneakersData'
import loupe from './images/loupe.svg'


const Content = () => {
    return ( 
        <main className="py-[42px]">
            <div className="container">
                <div className="flex justify-between gap-[10px]">
                <h1 className="font-[700] text-[32px]">
                Все кроссовки
                </h1>
                <div className="search-block flex items-center gap-[14px] border border-[#F3F3F3] rounded-[10px] py-[15px] px-[18px]">
                    <img className="max-w-[16px]" src={loupe} alt="search" />
                    <input className='text-[16px] border-[none] tracking-[1px]' type="text" placeholder="Search..." />
                </div>
                </div>

                <div className="cards pt-[30px] flex gap-[30px] flex-wrap">
                        {data.map(item => <Card key={item.id} img={item.img} text={item.text} price={item.price} />)}
                </div>
            </div>
        </main>
     );
}
 
export default Content;
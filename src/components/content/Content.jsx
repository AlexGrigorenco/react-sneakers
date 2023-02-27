
import Card from "../cards/Card";
import data from '../cards/SneakersData'


const Content = () => {
    return ( 
        <main className="py-[42px]">
            <div className="container">
                <h1 className="font-[700] text-[32px]">
                Все кроссовки
                </h1>

                <div className="cards flex gap-[30px] flex-wrap">
                        {data.map(item => <Card key={item.id} img={item.img} text={item.text} price={item.price} />)}
                </div>
            </div>
        </main>
     );
}
 
export default Content;
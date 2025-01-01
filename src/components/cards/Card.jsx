import {fit, shirt, sleeve, tshort} from "../../assets/index";
import Button from "../button/Button.jsx";

const cards = [
    {
        image: tshort,
        name: " T-SHIRT WITH TAPE DETAILS",
        price: 120,
        // oldPrice: 0,
    },
    {
        image: fit,
        name: " SKINNY FIT JEANS",
        price: 240,
        oldPrice: 260,
    },
    {
        image: shirt,
        name: "CHECKERED SHIRT",
        price: 180,
        // oldPrice: 0,
    },
    {
        image: sleeve,
        name: "SLEEVE STRIPED T-SHIRT",
        price: 130,
        oldPrice: 160,
    },
]

const Card = () => {
    return (
        <div className="container ">
            <div className="flex gap-[20px] ">
                {cards.map(item => {
                    return (
                        <div key={item.name}>
                            <div className={'w-[295px] h-[298px] mb-[40px] transition-all hover:translate-y-[-4px]'}>
                                <img className={'w-[295px] h-[298px] rounded-[20px] mb-[16px] transition-transform transform hover:scale-105'} src={item.image}
                                     alt={item.name}/>
                                <div className="">
                                    <h4 className={'text-[20px] leading-[27px] font-bold mb-[35px]'}>{item.name}</h4>
                                    <div className={'flex gap-[10px]'}>
                                        <h5 className="text-[24px] leading-[32px] font-bold">${item.price}</h5>
                                        {item.oldPrice && (
                                            <h5 className="text-[24px] leading-[32px] font-bold old-price line-through text-[gray]">${item.oldPrice}</h5>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Card;
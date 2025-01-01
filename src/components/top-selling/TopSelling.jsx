import React from 'react';
import Button from "../button/Button.jsx";
import {cour, faded, loose, vertical} from "../../assets/index.js";

const topCard = [
    {
        image: vertical,
        name: " T-SHIRT WITH TAPE DETAILS",
        price: 120,
        // oldPrice: 0,
    },
    {
        image: cour,
        name: " SKINNY FIT JEANS",
        price: 240,
        oldPrice: 260,
    },
    {
        image: loose,
        name: "CHECKERED SHIRT",
        price: 180,
        // oldPrice: 0,
    },
    {
        image: faded,
        name: "SLEEVE STRIPED T-SHIRT",
        price: 130,
        oldPrice: 160,
    },
]

const TopSelling = () => {
    return (
        <div className={'container'}>
            <h1 className="font-bold text-[48px] h-[58px] leading-[57px] text-center mt-[72px] mb-[55px]">TOP SELLING</h1>
            <div className="flex gap-[20px] ">
                {topCard.map(item => {
                    return (
                        <div key={item.name}>
                            <div className={'w-[295px] h-[298px] mb-[40px] transition-all hover:translate-y-[-4px]'}>
                                <img
                                    className={'w-[295px] h-[298px] rounded-[20px] mb-[16px] transition-transform transform hover:scale-105'}
                                    src={item.image}
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
            <div className={'mt-[120px]'}>
                <Button buttonText={"View All"}/>
            </div>
        </div>
    );
};

export default TopSelling;

import React from 'react';
import Card from "../cards/Card.jsx";
import Button from "../button/Button.jsx";

const NewArrivals = () => {
    return (
        <div className={'container'}>
            <h1 className="font-bold text-[48px] h-[58px] leading-[57px] text-center mt-[72px] mb-[55px]">NEW
                ARRIVALS</h1>
            <Card/>
            <div className={'mt-[120px] mb-[64px]'}>
                <Button buttonText={"View All"}/>
            </div>
                <hr/>
        </div>
    );
};

export default NewArrivals;

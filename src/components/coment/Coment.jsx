import React, { useState } from 'react';
import { left, right, stars, yes } from "../../assets/index.js";

const Coment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const comments = [
        {
            name: "Sarah M.",
            text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        },
        {
            name: "Alex K.",
            text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        },
        {
            name: "James L.",
            text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        },
        {
            name: "Emma W.",
            text: "I love how comfortable and stylish the clothes are. They fit perfectly, and I feel amazing every time I wear them.",
        },
        {
            name: "John D.",
            text: "The shopping experience was seamless. I found exactly what I needed, and the quality is just fantastic. Highly recommend!",
        },
        {
            name: "Lily R.",
            text: "I was a bit skeptical at first, but after trying on a few items, I’m hooked. Stylish, affordable, and great customer service.",
        },
        {
            name: "David P.",
            text: "Every piece I've bought fits like a glove. I'm very happy with my purchases. The range of sizes is perfect.",
        },
        {
            name: "Sophia H.",
            text: "I can't get enough of the amazing styles. Whether it's a casual day or a formal event, Shop.co has something for every occasion.",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % comments.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + comments.length) % comments.length);
    };

    return (
        <div className={'container'}>
            <div className={'flex items-center justify-between mb-[40px]'}>
                <div>
                    <h1 className={'text-[48px] leading-[57px] font-bold'}>OUR HAPPY CUSTOMERS</h1>
                </div>
                <div>
                    <button className={'w-[30px] mr-[15px] h-[30px]'} onClick={handlePrev}>
                        <img src={left} alt="left" />
                    </button>
                    <button className={'w-[30px] h-[30px]'} onClick={handleNext}>
                        <img src={right} alt="right" />
                    </button>
                </div>
            </div>
            <div className={'flex gap-[20px]'}>
                {comments.slice(currentIndex, currentIndex + 3).map((comment, index) => (
                    <div
                        key={index}
                        className={'w-[400px] h-[240px] rounded-[20px] py-[28px] px-[32px] border-[#0000001A] border'}
                    >
                        <div>
                            <img className={'mb-[15px]'} src={stars} alt="stars" />
                            <div className={'flex'}>
                                <h4 className={'text-[20px] leading-[22px] font-bold mb-[12px] pt-[3px]'}>
                                    {comment.name}
                                </h4>
                                <img className={'pb-[10px]'} src={yes} alt="yes" />
                            </div>
                            <p className={'text-[16px] leading-[22px] text-[#00000099]'}>
                                {comment.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coment;
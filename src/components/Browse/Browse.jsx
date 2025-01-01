import React from 'react';
import { boy1, boy2, boy3, girl1 } from "../../assets/index.js";
import "./Browse.css"
const Browse = () => {
    return (
        <div className='container'>
            <div className='h-[866px] rounded-[40px] bg-[#F0F0F0] mt-[80px] py-[65px] text-[48px] leading-[57px] font-bold mb-[80px]'>
                <h1 className='text-center'>BROWSE BY DRESS STYLE</h1>
                <div className='flex gap-[20px] pt-[70px] pb-[0px] px-[64px] mb-[20px]'>
                    <div className='card'>
                        <div style={{
                            width: '407px',
                            height: '289px',
                            borderRadius: '20px',
                            backgroundImage: `url(${boy1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <h3 className='pt-[25px] pl-[36px] text-[36px] leading-[48px]'>Casual</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <div style={{
                            width: '684px',
                            height: '289px',
                            borderRadius: '20px',
                            backgroundImage: `url(${boy2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <h3 className='pt-[25px] pl-[36px] text-[36px] leading-[48px]'>Formal</h3>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[20px] px-[64px]'>
                    <div className='card'>
                        <div style={{
                            width: '684px',
                            height: '289px',
                            borderRadius: '20px',
                            backgroundImage: `url(${girl1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <h3 className='pt-[25px] pl-[36px] text-[36px] leading-[48px]'>Party</h3>
                        </div>
                    </div>
                    <div className='card'>
                        <div style={{
                            width: '407px',
                            height: '289px',
                            borderRadius: '20px',
                            backgroundImage: `url(${boy3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                            <h3 className='pt-[25px] pl-[36px] text-[36px] leading-[48px]'>Gym</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Browse;
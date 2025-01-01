import { boy, vec1, vec2 } from "../../assets/index.js";

const Home = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '663px' }}>
            <div style={{
                position: "absolute",
                backgroundImage: `url(${boy})`,
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: -1
            }}>
                <div className='container' style={{ paddingTop: '95px' }}>
                    <h2 className='text-[64px] w-[577px] font-bold mb-[25px] leading-[64px]'>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h2>
                    <p className='text-[16px] w-[555px] mb-[32px] leading-[22px] text-[#00000099]'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <button className='w-[210px] h-[52px] rounded-[62px] py-[16px 17px] px-[54px] bg-black text-[white] mb-[40px] leading-[21px]'>
                        Shop Now
                    </button>
                    <div className='flex w-[596px] h-[74px] gap-[64px]'>
                        <div className='w-[141px] h-[74px]'>
                            <h3 className='text-[40px] font-bold'>200+</h3>
                            <p className='text-[16px] w-[145px] h-[22px] leading-[22px] text-[#00000099]'>International Brands</p>
                        </div>
                        <div className='w-[141px] h-[74px]'>
                            <h3 className='text-[40px] font-bold'>2,000+</h3>
                            <p className='text-[16px] w-[156px] h-[22px] leading-[22px] text-[#00000099]'>High-Quality Products</p>
                        </div>
                        <div className='w-[141px] h-[74px]'>
                            <h3 className='text-[40px] font-bold'>30,000+</h3>
                            <p className='text-[16px] w-[156px] h-[22px] leading-[22px] text-[#00000099]'>Happy Customers</p>
                        </div>
                    </div>
                    <div className="absolute top-[85px] left-[1235px] flex space-x-4">
                        <img src={vec1} alt="Icon 1" className="w-104 h-104" />
                    </div>
                    <div className="absolute top-[300px] left-[750px] flex space-x-4">
                        <img src={vec2} alt="Icon 1" className="w-104 h-104" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
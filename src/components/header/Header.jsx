import {cart, per, ser} from "../../assets/index.js"
import "./Header.css"

const Header = () => {
    return (
        <div className={'container'}>
            <div className={'flex mb-[24px]'}>
                <div className={'text-[32px] font-bold h-[22px] mr-[80px]'}>
                    <h1>SHOP.CO</h1>
                </div>
                <div className={'flex'}>
                    <a className={'mr-[24px] py-[13px]'} href="">On Sale</a>
                    <a className={'mr-[40px] py-[13px] '} href="">New Arrivals</a>
                    <div className={'flex'}>
                        <img className={'absolute pl-[5px] pt-[13px] ml-[12px]'} src={ser} alt=""/>
                        <input
                            className={'w-[691px] h-[48px] rounded-[62px] pl-[50px] pr-[20px] py-[12px] bg-[#F0F0F0] mr-[40px] mr-[12px]'} type="search" placeholder="Search for products..."/>
                    </div>
                </div>
                <div className={'py-[12px] '}>
                    <button className={'mr-[14px]'}>
                        <img src={cart} alt=""/>
                    </button>
                    <button>
                        <img src={per} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;

import {calvin, gucci, prada, ver, zara} from "../../assets/index.js"

const Moda = () => {
    return (
        <div className={'bg-black'}>
            <div className={'container flex gap-[106px] py-[45px] mb-[72px] '}>
                <img src={ver} alt=""/>
                <img src={zara} alt=""/>
                <img src={gucci} alt=""/>
                <img src={prada} alt=""/>
                <img src={calvin} alt=""/>
            </div>
        </div>
    );
};

export default Moda;

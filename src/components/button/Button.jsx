const Button = ({buttonText}) => {
    return (
        <div className={'container text-center '}>

            <button className="w-[218px] h-[52px] rounded-[62px] border-[1px] pb-[16px] pt-[17px] px-[54px] border-[#0000001A] transition-transform transform hover:scale-105 text-[16px] leading-[10px]">
                {buttonText}
            </button>
        </div>
    );
};

export default Button;
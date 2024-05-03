

const NamePricereusable = ({ proname, pric, black }) => {
    return (
        <div className="">
            <div className="flex justify-between py-[10px]">
                <h5 className="font-dm font-bold text-[12px] lg:text-[20px] text-[#262626]">{proname}</h5>
                <p className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">{pric}</p>
            </div>
            <p className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">{black}</p>
        </div>
    )
}

export default NamePricereusable
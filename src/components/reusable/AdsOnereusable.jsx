

const AdsOnereusable = ({ heads, adspone, adsoffer, adstwo, shopbtn }) => {
    return (
        <>
            <h3 className="font-dm font-bold text-[38px] text-[#262626]">{heads}</h3>
            <div className="flex items-center py-5">
                <p className="font-dm font-normal text-[16px] text-[rgba(38,38,38,0.7)] ">{adspone}</p>
                <span className="px-[5px] font-dm font-bold text-[40px] text-[#262626]">{adsoffer}</span>
                <p className="font-dm font-normal text-[16px] text-[rgba(38,38,38,0.7)] ">{adstwo}</p>
            </div>
            <button className="px-[50px] py-[16px] bg-[#262626] font-dm font-bold text-[14px] text-[#FFF]">{shopbtn}</button>
        </>
    )
}

export default AdsOnereusable
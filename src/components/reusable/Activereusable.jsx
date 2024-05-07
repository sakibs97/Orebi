import { FaHeart, FaCartPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Activereusable = ({ WishList, Compare, cart }) => {
    return (
        <div className="bg-[#F5F5F5] h-[150px] absolute bottom-[-150px] left-0 w-full opacity-0
                        flex justify-end items-center group-hover:bottom-0
                        group-hover:h-[150px] group-hover:opacity-100 duration-500 ease-in-out">
            <div className="">
                <div className="flex items-center justify-end gap-x-3 py-2 mr-2">
                    <p className="font-dm font-normal text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out">{WishList}</p>
                    <FaHeart />
                </div>
                <div className="flex items-center justify-end gap-x-3 py-2 mr-2">
                    <p className="font-dm font-normal text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out">{Compare}</p>
                    <FaCartPlus />
                </div>
                <div className="flex items-center justify-end gap-x-3 py-2 mr-2">
                    <p className="font-dm font-normal text-[16px] text-[#767676] hover:font-bold hover:text-[#262626] duration-300 ease-in-out">{cart}</p>
                    <TfiReload />
                </div>
            </div>
        </div>
    )
}

export default Activereusable
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Activereusable = ({ WishList, Compare, cart }) => {
    return (
        <div className="absolute invisible group-hover/item:visible bottom-[18%] right-[40px] w-[90%]">
            <div className="relative bg-[#f5f5f593] h-[150px]">
                <div className="absolute bottom-[90px] right-[30px]">
                    <p className="flex items-center">{WishList}<FaHeart className="ml-[10px]" /></p>
                </div>
                <div className="absolute bottom-[55px] right-[30px]">
                    <p className="flex items-center">{Compare}<TfiReload className="ml-[10px]" /></p>
                </div>
                <div className="absolute bottom-[25px] right-[30px]">
                    <a href="#" className="flex items-center">{cart}<FaCartPlus className="ml-[10px]" /></a>
                </div>
            </div>
        </div>
    )
}

export default Activereusable
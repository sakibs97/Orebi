/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Activereusable from "../reusable/Activereusable"
import NewCollectreusable from "../reusable/NewCollectreusable"


const Post = ({ allPage }) => {
    return (

        <div className="flex flex-wrap justify-between">
            {allPage.map((item) => (
                <>
                    <div className="lg:w-[24%] w-[32%] mb-[10px] lg:mb-0">
                        <Link to={`/products/${item.id}`}>
                            <div className="relative overflow-hidden group">
                                <img src={item.thumbnail} alt="best1" className="w-full lg:h-[250px] h-[150px] hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                                <NewCollectreusable newcoll='10%' />
                                <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                            </div>
                            <div className="">
                                <div className="flex justify-between items-center pt-[10px] py-2">
                                    <div className="">
                                        <h3 className="font-dm font-bold text-[14px] lg:text-[20px] text-[#262626]">{item.title}</h3>
                                    </div>
                                    <div className="">
                                        <h3 className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">${item.price}</h3>
                                    </div>
                                </div>
                                <div className="mb-[15px]">
                                    <p className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">{item.brand}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </>
            ))}
        </div >
    )
}

export default Post
import { Link } from "react-router-dom"
import Container from "../components/Container"
import Flex from "../components/Flex"
import { FiPlus } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { IoGridSharp } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Products = () => {
    return (
        <>
            <Container>
                <div className="my-[30px]">
                    <h3 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">Products</h3>
                    <span className="font-dm font-normal text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
                        Home</Link> &gt; Products</span>
                </div>
                <Flex>
                    <div className="w-[20%] mb-[30px]">
                        <div className="">
                            <h3 className="font-dm font-bold text-[15px] lg:text-[20px] text-[#262626] my-[30px]">Shop by Category</h3>
                            <ul>
                                <li className="flex items-center justify-between border-b-[2px] border-[#F0F0F0] py-[10px]">Category 1<FiPlus /> </li>
                                <li className="flex items-center justify-between border-b-[2px] border-[#F0F0F0] py-[10px]">Category 2<FiPlus /> </li>
                                <li className="flex items-center justify-between border-b-[2px] border-[#F0F0F0] py-[10px]">Category 3<FiPlus /> </li>
                                <li className="flex items-center justify-between border-b-[2px] border-[#F0F0F0] py-[10px]">Category 4<FiPlus /> </li>
                                <li className="flex items-center justify-between border-b-[2px] border-[#F0F0F0] py-[10px]">Category 5<FiPlus /> </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[15px] lg:text-[20px] text-[#262626] my-[30px]">Shop by Color</h3>
                            <ul>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]"><FaCircle className="mr-[10px] text-[#000]" /> Color 1</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]"><FaCircle className="mr-[10px] text-[#FF8686]" /> Color 2</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]"><FaCircle className="mr-[10px] text-[#7ED321]" /> Color 3</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]"><FaCircle className="mr-[10px] text-[#B6B6B6]" /> Color 4</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]"><FaCircle className="mr-[10px] text-[#15CBA5]" /> Color 5</li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[15px] lg:text-[20px] text-[#262626] my-[30px] flex items-center justify-between">Shop by Brand <BiSolidUpArrow /></h3>
                            <ul>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">Brand 1</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">Brand 2</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">Brand 3</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">Brand 4</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">Brand 5</li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-dm font-bold text-[15px] lg:text-[20px] text-[#262626] my-[30px] flex items-center justify-between">Shop by Price <BiSolidDownArrow /></h3>
                            <ul>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">$0.00 - $9.99</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">$10.00 - $19.99</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">$20.00 - $29.99</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">$30.00 - $39.99</li>
                                <li className="flex items-center border-b-[2px] border-[#F0F0F0] py-[10px]">$40.00 - $69.99</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[80%]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="p-[10px] border-[1px] border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff] mr-[20px]">
                                    <IoGridSharp />
                                </div>
                                <div className="p-[10px] border-[1px] border-[#F0F0F0] hover:bg-[#262626] hover:text-[#fff]">
                                    <FaListUl />
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center">
                                    <IoMdArrowDropup />
                                    <IoMdArrowDropdown />
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Products
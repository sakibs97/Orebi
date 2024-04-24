import Container from "./Container"
import Flex from "./Flex"
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { useRef } from "react";
import color from "../assets/color.png"

const Menu = () => {
    let [cateshow, setCateShow] = useState(false)
    let [cartshow, setCartShow] = useState(false)
    let cateMenu = useRef()
    let cartMenu = useRef()
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateMenu.current.contains(e.target) == true) {
                setCateShow(true)
            } else {
                setCateShow(false)
            }
        })
    }, [cateshow])
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cartMenu.current.contains(e.target) == true) {
                setCartShow(true)
            } else {
                setCartShow(false)
            }
        })
    }, [cartshow])

    return (
        <Container>
            <Flex className='items-center'>
                <div className="w-[30%] relative" ref={cateMenu}>
                    <div className=" flex items-center gap-x-3">
                        <FaBarsStaggered />
                        <h3 className="font-dm text-[#262626] text-[16px] font-normal">Shop by Category</h3>
                    </div>
                    {cateshow &&
                        <div className="absolute top-7 left-0 bg-[#262626] w-72">
                            <ul className="py-3">
                                <li className="py-2 font-dm text-[16px] text-[#fff] opacity-70 pl-3 hover:opacity-100 hover:pl-6 duration-300">Accesories</li>
                                <li className="py-2 font-dm text-[16px] text-[#fff] opacity-70 pl-3 hover:opacity-100 hover:pl-6 duration-300">Furniture</li>
                                <li className="py-2 font-dm text-[16px] text-[#fff] opacity-70 pl-3 hover:opacity-100 hover:pl-6 duration-300">Electronics</li>
                                <li className="py-2 font-dm text-[16px] text-[#fff] opacity-70 pl-3 hover:opacity-100 hover:pl-6 duration-300">Clothes</li>
                                <li className="py-2 font-dm text-[16px] text-[#fff] opacity-70 pl-3 hover:opacity-100 hover:pl-6 duration-300">Bags</li>
                                <li className="py-2 font-dm text-[16px] text-[#fff] opacity-70 pl-3 hover:opacity-100 hover:pl-6 duration-300">Home appliances</li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="w-2/5">
                    <div className="relative">
                        <input type="search" className='border-2 border-[#2222] p-2 w-full' placeholder="Search Products" />
                        <div className="absolute top-[50%] translate-y-[-50%] right-[10px]">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="w-[30%] relative">
                    <div className="flex justify-end gap-x-3">
                        <div className="flex">
                            <FaUser />
                            <MdArrowDropDown />
                        </div>
                        <div className="" ref={cartMenu} >
                            <FaShoppingCart />
                            {cartshow &&
                                <div className="absolute top-7 right-0">
                                    <div className="flex items-center bg-[#F5F5F3] p-4">
                                        <img src={color} alt="" />
                                        <div className="pl-[10px]">
                                            <p className="py-3">Black Smart Watch</p>
                                            <h6>$44.00</h6>
                                        </div>
                                    </div>
                                    <h6 className="py-3">Subtotal: $44.00</h6>
                                    <button className="border-2 border-[#2B2B2B] py-4 px-10 hover:bg-[#2B2B2B] hover:text-[#FFF]" >View Cart</button>
                                    <button className="border-2 border-[#2B2B2B] py-4 px-10 hover:bg-[#2B2B2B] hover:text-[#FFF]"> Checkout</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Flex>
        </Container>
    )
}

export default Menu
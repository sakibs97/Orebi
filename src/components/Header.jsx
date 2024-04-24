import { useState } from "react";
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Container from "./Container";
import Flex from "./Flex";


const Header = () => {
    let [show, setShow] = useState(false)
    let handelshow = () => {
        setShow(!show)
    }
    return (
        <>
            <Container>
                <Flex className="items-center justify-between py-7 px-2 lg:px-0">
                    <div className="lg:w-[15%]">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="lg:w-[85%]">
                        <ul className={`lg:flex justify-center absolute lg:static -z-10 
                        ${show == true ? 'top-[70px] left-0 bg-[rgb(245,245,243,50%)] w-full text-center ease-in duration-700' :
                                ' top-0 left-[-300px]'}`}>
                            <li className='font-dm text-[#767676] text-[16px] font-normal lg:px-5 py-2 lg:py-0 hover:text-[#262626] hover:font-bold'>Home</li>
                            <li className='font-dm text-[#767676] text-[16px] font-normal lg:px-5 py-2 lg:py-0 hover:text-[#262626] hover:font-bold'>Shop</li>
                            <li className='font-dm text-[#767676] text-[16px] font-normal lg:px-5 py-2 lg:py-0 hover:text-[#262626] hover:font-bold'>About</li>
                            <li className='font-dm text-[#767676] text-[16px] font-normal lg:px-5 py-2 lg:py-0 hover:text-[#262626] hover:font-bold'>Contacts</li>
                            <li className='font-dm text-[#767676] text-[16px] font-normal lg:px-5 py-2 lg:py-0 hover:text-[#262626] hover:font-bold'>Journal</li>
                        </ul>
                    </div>
                    <div className="lg:hidden " onClick={handelshow}>
                        {show ? <RxCross2 /> : <FaBars />}
                    </div>
                </Flex>
                <div >
                </div>
            </Container>
        </>
    )
}

export default Header
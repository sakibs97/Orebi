import Container from "./Container"
import logo from "../assets/Logo.png"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <section className='mx-[10px] lg:mx-0'>
            <Container>
                <div className="lg:flex lg:justify-between">
                    <div className="lg:w-[65%] lg:flex lg:justify-between">
                        <div className="lg:w-[50%] flex justify-between">
                            <div className="">
                                <h3 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">MENU</h3>
                                <ul>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out">Home</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Shop</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">About</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Contact</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Journal</li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">SHOP</h3>
                                <ul>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 1</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 2</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 3</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 4</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Category 5</li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">HELP</h3>
                                <ul>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Privacy Policy</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Terms & Conditions</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Special E-shop</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Shipping</li>
                                    <li className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">Secure Payments</li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <h4 className="font-dm font-bold text-[16px] text-[#262626]">(052) 611-5711</h4>
                            <h4 className="font-dm font-bold text-[16px] text-[#262626] pb-[10px]">company@domain.com</h4>
                            <a href="#" className="font-dm font-normal text-[14px] text-[#6D6D6D] hover:text-[#262626] duration-300 ease-in-out py-[3px]">575 Crescent Ave. Quakertown, PA 18951</a>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="flex justify-between my-[30px]">
                    <div className="flex gap-x-2">
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaInstagram />
                    </div>
                    <div className="">
                        <p className="font-dm font-normal text-[14px] text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer
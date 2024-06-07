import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "../components/Container"
import { Link } from "react-router-dom"
import { FaStar, FaCircle, FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";


const ProductDetails = () => {
    let [singleProduct, setSingleProduct] = useState([])
    let productId = useParams()

    let dataId = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProduct(response.data)
        })
    }

    useEffect(() => {
        dataId()
    }, [])

    console.log(singleProduct);


    return (
        <Container>
            <div className="my-[30px]">
                <h3 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">Products</h3>
                <span className="font-dm font-normal text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
                    Home</Link> &gt; <Link to="/products" className="hover:text-[#262626]">Products</Link> &gt; Details</span>
            </div>
            <div className="flex flex-wrap justify-between">
                {singleProduct?.images?.map((item) => (
                    <>
                        <div className="w-[49%] my-4">
                            <img className="w-full" src={item} alt="" />
                        </div>
                    </>
                ))}


            </div>
            <div className="w-[50%]">
                <div className="">
                    <h3 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">Product</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">1 Review</p>
                    </div>
                    <div className="flex items-center border-b-[1px] border-b-[#D8D8D8] pb-5">
                        <h4 className="font-dm font-bold text-[30px] lg:text-[16px] text-[#767676] line-through">$88.00</h4>
                        <h4 className="font-dm font-bold text-[30px] lg:text-[20px] text-[#262626]">$44.00</h4>
                    </div>
                </div>
                <div className="border-b-[1px] border-b-[#D8D8D8] pb-5 mt-5">
                    <div className="flex items-center justify-between w-[280px]">
                        <h4 className="font-dm font-bold text-[16px] text-[#262626] pr-6">COLOR:</h4>
                        <FaCircle className="mx-1 text-[#979797]" />
                        <FaCircle className=" text-[#FF8686]" />
                        <FaCircle className="mr-1 text-[#7ED321]" />
                        <FaCircle className=" text-[#B6B6B6]" />
                        <FaCircle className="ml-1 text-[#15CBA5]" />
                    </div>
                    <div className="flex items-center justify-between w-[280px] my-5">
                        <h4>SIZE :</h4>
                        <div className="flex items-center justify-around border-[2px] border-[#F0F0F0] w-[140px] h-[35px]">
                            <p>S</p>
                            <span><MdOutlineArrowDropDown /></span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-[280px]">
                        <h4>QUANTITY:</h4>
                        <div className="flex items-center justify-around border-[2px] border-[#F0F0F0] w-[140px] h-[35px]">
                            <FaPlus />
                            <p>1</p>
                            <FaMinus />
                        </div>
                    </div>
                </div>
                <div className="flex items-center border-b-[1px] border-b-[#D8D8D8] pb-5 mt-5">
                    <h4 className="font-dm font-bold text-[16px] text-[#262626] mr-8">STATUS:</h4>
                    <p>In stock</p>
                </div>
                <div className="py-5 border-b-[1px] border-b-[#D8D8D8]">
                    <button className="py-[15px] px-[40px] border-[1px] border-[#262626] hover:bg-[#262626] font-dm font-bold text-[14px] ease-in-out duration-300 hover:text-[#fff] mr-5">Add to Wish List</button>
                    <button className="py-[15px] px-[40px] border-[1px] border-[#262626] hover:bg-[#262626] font-dm font-bold text-[14px] ease-in-out duration-300 hover:text-[#fff]">Add to Cart</button>
                </div>
                <div className="">
                    <div className="flex items-center justify-between py-5 border-b-[1px] border-b-[#D8D8D8]">
                        <h4>FEATURES  & DETAILS</h4>
                        <FaPlus />
                    </div>
                    <div className="flex items-center justify-between py-5 border-b-[1px] border-b-[#D8D8D8]">
                        <h4>SHIPPING & RETURNS</h4>
                        <FaPlus />
                    </div>
                </div>
                <div className="py-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </Container>
    )
}

export default ProductDetails
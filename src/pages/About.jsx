import Container from "../components/Container"
import { Link } from "react-router-dom"
import brands from "../assets/about/brands.png"
import brands2 from "../assets/about/brands2.png"

const About = () => {
  return (
    <Container>
<div className="my-[30px]">
                <h3 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">About</h3>
                <span className="font-dm font-normal text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
                    Home</Link> &gt; About</span>
            </div>
            <div className="flex justify-between items-center mb-[30px]">
                <div className="w-[49%] relative">
                    <img src={brands} alt="brands" />
                    <div className="absolute left-[50%] bottom-[50px] translate-x-[-50%]">
                        <button className="font-dm font-bold text-[15px] border-[2px] border-[#262626] py-[25px] px-[80px] text-[#FFF] bg-[#262626] hover:shadow-xl ease-in-out duration-300">Our Stores</button>
                    </div>
                </div>
                <div className="w-[49%] relative">
                    <img src={brands2} alt="brands2" />
                    <div className="absolute left-[50%] bottom-[50px] translate-x-[-50%]">
                        <button className="font-dm font-bold text-[15px] border-[2px] border-[#262626] py-[25px] px-[80px] text-[#FFF] bg-[#262626] hover:shadow-xl ease-in-out duration-300">Our Stores</button>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="font-dm font-normal text-[35px] text-[#262626]">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
            </div>
            <div className="flex justify-between my-[30px]">
                <div className="w-[32%]">
                    <h5 className="font-dm font-bold text-[25px] text-[#262626]">Our Vision</h5>
                    <p className="font-dm font-normal text-[15px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="w-[32%]">
                    <h5 className="font-dm font-bold text-[25px] text-[#262626]">Our Story</h5>
                    <p className="font-dm font-normal text-[15px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                </div>
                <div className="w-[32%]">
                    <h5 className="font-dm font-bold text-[25px] text-[#262626]">Our Brands</h5>
                    <p className="font-dm font-normal text-[15px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
            </div>

    </Container>
  )
}

export default About
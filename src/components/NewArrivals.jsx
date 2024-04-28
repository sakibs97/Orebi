
import crew1 from "../assets/NewPro/Crew1.png"
import crew2 from "../assets/NewPro/Crew2.png"
import crew3 from "../assets/NewPro/Crew3.png"
import crew4 from "../assets/NewPro/Crew4.png"
import Container from "./Container"
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import NewCollectreusable from "./reusable/NewCollectreusable"
import NamePricereusable from "./reusable/NamePricereusable"
import Slider from "react-slick";



const NewArrivals = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (

        <section className="pb-[50px]">
            <Container>
                <div className="pb-[30px]">
                    <h2 className="font-dm font-bold text-[40px] text-[#262626]">New Arrivals</h2>
                </div>
                <Slider {...settings}>
                    <div className="relative pr-[40px]">
                        <img src={crew1} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='10%' />
                        <div className="absolute bottom-0 right-[30px] w-[90%]">
                            <div className="border-[1px] border-[#F5F5F5] bg-[#F5F5F5] w-full h-[150px] relative">
                                <div className="absolute bottom-[90px] right-[30px]">
                                    <p className="flex items-center">Add to Wish List <FaHeart className="ml-[10px]" /></p>
                                </div>
                                <div className="absolute bottom-[55px] right-[30px]">
                                    <p className="flex items-center">Compare <TfiReload className="ml-[10px]" /></p>
                                </div>
                                <div className="absolute bottom-[25px] right-[30px]">
                                    <a href="#" className="flex items-center">Add to Cart <FaCartPlus className="ml-[10px]" /></a>
                                </div>
                            </div>
                        </div>
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative pr-[40px]">
                        <img src={crew2} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative pr-[40px]">
                        <img src={crew3} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative pr-[40px]">
                        <img src={crew4} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default NewArrivals
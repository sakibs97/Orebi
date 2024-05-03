
import crew1 from "../assets/NewPro/Crew1.png"
import crew2 from "../assets/NewPro/Crew2.png"
import crew3 from "../assets/NewPro/Crew3.png"
import crew4 from "../assets/NewPro/Crew4.png"
import Container from "./Container"
import NewCollectreusable from "./reusable/NewCollectreusable"
import NamePricereusable from "./reusable/NamePricereusable"
import Slider from "react-slick";
// import Activereusable from "./reusable/Activereusable"



const NewArrivals = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (

        <section className="pb-[30px] lg:pb-[50px] px-[10px] lg:px-0">
            <Container>
                <div className="pb-[30px]">
                    <h2 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">New Arrivals</h2>
                </div>
                <Slider {...settings}>
                    <div className="relative pr-[20px] lg:pr-[40px] group/item">
                        <img src={crew1} alt="Crew1" className=" hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='10%' />
                        {/* <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' /> */}
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative pr-[20px] lg:pr-[40px]">
                        <img src={crew2} alt="Crew2" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative pr-[20px] lg:pr-[40px]">
                        <img src={crew3} alt="Crew3" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative pr-[20px] lg:pr-[40px]">
                        <img src={crew4} alt="Crew4" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default NewArrivals
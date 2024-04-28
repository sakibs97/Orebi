import Container from "./Container"
import NewCollectreusable from "./reusable/NewCollectreusable"
import best1 from "../assets/Bestsell/best1.png"
import best2 from "../assets/Bestsell/best2.png"
import best3 from "../assets/Bestsell/best3.png"
import best4 from "../assets/Bestsell/best4.png"
import ads2 from "../assets/Bestsell/ads2.png"
import Flex from "./Flex"
import NamePricereusable from "./reusable/NamePricereusable"
import AdsOnereusable from "./reusable/AdsOnereusable"

const OurBestsellers = () => {
    return (
        <section className="pb-[50px]">
            <Container>
                <div className="pb-[30px]">
                    <h2 className="font-dm font-bold text-[40px] text-[#262626]">Our Bestsellers</h2>
                </div>
                <Flex className='gap-x-[30px]'>
                    <div className="relative">
                        <img src={best1} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative">
                        <img src={best2} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative">
                        <img src={best3} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative">
                        <img src={best4} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                </Flex>
                <div className="flex items-center bg-[#F3F3F3] mt-[50px]">
                    <img src={ads2} alt="ads2" />
                    <div className="">
                        <AdsOnereusable heads='Phone of the year' adspone='Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..' adsoffer='' adstwo='' shopbtn='Shop Now' />
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default OurBestsellers
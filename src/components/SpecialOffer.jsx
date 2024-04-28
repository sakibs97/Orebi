import Flex from "./Flex"
import NamePricereusable from "./reusable/NamePricereusable"
import Container from "./Container"
import NewCollectreusable from "./reusable/NewCollectreusable"
import cap from '../assets/Spoffer/cap.png'
import headphone from '../assets/Spoffer/headphone.png'
import sunglass from '../assets/Spoffer/sunglass.png'
import table from '../assets/Spoffer/table.png'

const SpecialOffer = () => {
    return (
        <section className="pb-[50px]">
            <Container>
                <div className="pb-[30px]">
                    <h2 className="font-dm font-bold text-[40px] text-[#262626]">Our Bestsellers</h2>
                </div>
                <Flex className='gap-x-[30px]'>
                    <div className="relative">
                        <img src={cap} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative">
                        <img src={headphone} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative">
                        <img src={sunglass} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                    <div className="relative">
                        <img src={table} alt="" className="hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                        <NewCollectreusable newcoll='New' />
                        <NamePricereusable proname='Basic Crew  Neck Tee' pric='$44.00' black='Black' />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default SpecialOffer
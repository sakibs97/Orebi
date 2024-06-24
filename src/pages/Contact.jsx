import Container from "../components/Container"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <Container>
        <div className="my-[30px]">
                <h3 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">Contacts</h3>
                <span className="font-dm font-normal text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
                    Home</Link> &gt; Contacts</span>
            </div>
            <div className="mb-[30px] w-[50%]">
                        <h4 className="font-dm font-bold text-[25px] text-[#262626] mb-[30px]">Fill up a Form</h4>
                    <div className="mb-[20px]">
                        <h5 className="font-dm font-bold text-[16px] text-[#262626]">Name</h5>
                        <input type="text" className="w-full outline-none py-[10px] border-b-[1px] border-[#F0F0F0]" placeholder="Your name here" />
                    </div>
                    <div className="mb-[20px]">
                        <h5 className="font-dm font-bold text-[16px] text-[#262626]">Email</h5>
                        <input type="email" className="w-full outline-none py-[10px] border-b-[1px] border-[#F0F0F0]" placeholder="Your email here" />
                    </div>
                    <div className="mb-[20px]">
                        <h5 className="font-dm font-bold text-[16px] text-[#262626]">Message</h5>
                        <div className="">
                        <textarea name="Review" className="w-full outline-none py-[10px] border-b-[1px] border-[#F0F0F0]" id="" placeholder="Your message here"></textarea>
                        </div>
                    </div>
                    <button className="font-dm font-bold text-[15px] border-[2px] border-[#262626] py-[15px] px-[80px] text-[#FFF] bg-[#262626] hover:shadow-xl ease-in-out duration-300">Post</button>
            </div>
                <div className="my-[30px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29199.169254540942!2d90.3842619!3d23.8222914!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1719250101699!5m2!1sen!2sbd" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[400px]"></iframe>
                </div>
    </Container>
  )
}

export default Contact
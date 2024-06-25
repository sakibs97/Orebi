import Container from "../components/Container"
import { Link } from "react-router-dom"

const MyAccount = () => {
    return (
        <Container>
            <div className="my-[30px]">
                <h3 className="font-dm font-bold text-[40px] text-[#262626]">My Account</h3>
                <span className="font-dm font-normal text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
                    Home</Link> &gt; My Account</span>
            </div>
            <div className="mb-[30px] flex justify-between">
                <div className="w-[15%]">
                    <h6 id="dashboard" className="font-dm font-normal hover:font-bold text-[16px] text-[#767676] hover:text-[#262626] ease-in-out duration-500 border-b-[1px] border-[#F0F0F0] py-[10px]">Dashboard</h6>
                    <h6 id="Others" className="font-dm font-normal hover:font-bold text-[16px] text-[#767676] hover:text-[#262626] ease-in-out duration-500 border-b-[1px] border-[#F0F0F0] py-[10px]">Others</h6>
                    <h6 className="font-dm font-normal hover:font-bold text-[16px] text-[#767676] hover:text-[#262626] ease-in-out duration-500 border-b-[1px] border-[#F0F0F0] py-[10px]">Donwloads</h6>
                    <h6 className="font-dm font-normal hover:font-bold text-[16px] text-[#767676] hover:text-[#262626] ease-in-out duration-500 border-b-[1px] border-[#F0F0F0] py-[10px]">Addresses</h6>
                    <h6 className="font-dm font-normal hover:font-bold text-[16px] text-[#767676] hover:text-[#262626] ease-in-out duration-500 border-b-[1px] border-[#F0F0F0] py-[10px]">Account details</h6>
                    <h6 className="font-dm font-normal hover:font-bold text-[16px] text-[#767676] hover:text-[#262626] ease-in-out duration-500 border-b-[1px] border-[#F0F0F0] py-[10px]">Logout</h6>
                </div>
                <div className="w-[83%]">
                    <div htmlFor="dashboard" className="">
                        <p>Hello <b>admin</b> (not <b>admin</b>? <b>Log out</b>)</p>
                        <p>From your account dashboard you can view your <b>recent orders</b>, manage your <b>shipping and billing addresses</b>, and <b>edit your password and account details.</b></p>
                    </div>
                    <div htmlFor="Others" className="w-[83%]">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, accusamus!</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MyAccount
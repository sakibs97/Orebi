import Container from "../components/Container"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <Container>
            <div className="my-[30px]">
                <h3 className="font-dm font-bold text-[40px] text-[#262626]">Login</h3>
                <span className="font-dm font-normal text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
                    Home</Link> &gt; Login</span>
            </div>
            <div className="w-[50%]">
                <p className="font-dm font-normal text-[15px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the.</p>
                <h4 className="font-dm font-bold text-[35px] text-[#262626] my-[30px]">Returning Customer</h4>
                <div className="flex justify-between items-center">
                    <div className="">
                        <h5 className="font-dm font-bold text-[16px] text-[#262626]">Email address</h5>
                        <input type="text" placeholder="company@domain.com" className="py-[10px] outline-none" />
                    </div>
                    <div className="">
                        <h5 className="font-dm font-bold text-[16px] text-[#262626]">Password</h5>
                        <input type="Password" placeholder="********" className="py-[10px] outline-none" />
                    </div>
                </div>
                <button className="my-[30px] font-dm font-bold text-[15px] text-[#262626] border-[1px] border-[#262626] py-[15px] px-[80px] hover:text-[#FFF] hover:bg-[#262626] hover:shadow-xl ease-in-out duration-300">Login</button>

                <div className="">
                <h4 className="font-dm font-bold text-[35px] text-[#262626] my-[30px]">New Customer</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the.</p>
                <button className="my-[30px] font-dm font-bold text-[15px] text-[#262626] border-[1px] border-[#262626] py-[15px] px-[80px] hover:text-[#FFF] hover:bg-[#262626] hover:shadow-xl ease-in-out duration-300">Continue</button>
                </div>
            </div>
        </Container>
    )
}

export default Login
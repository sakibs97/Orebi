import Container from "../components/Container"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";

const Login = () => {
    let navigate = useNavigate("")
    let [email, setemail] = useState("")
    let [password, setPassword] = useState("")

    let handelLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate('/myaccount')
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            });
    }


    return (
        <Container>
            <div className="my-[30px]">
                <h3 className="font-dm font-bold text-[40px] text-[#262626]">Login</h3>
                <span className="font-dm font-normal text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
                    Home</Link> &gt; Login</span>
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] pb-[30px]">
                <div className="w-[50%]">
                    <p className="font-dm font-normal text-[15px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the.</p>
                </div>
            </div>
            <div className="border-b-[1px] border-[#F0F0F0]">
                <div className="w-[50%]">
                    <h4 className="font-dm font-bold text-[35px] text-[#262626] my-[30px]">Returning Customer</h4>
                    <div className="flex justify-between items-center">
                        <div className="border-b-[1px] border-[#F0F0F0] w-[45%]">
                            <h5 className="font-dm font-bold text-[16px] text-[#262626]">Email address</h5>
                            <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="company@domain.com" className="py-[10px] outline-none w-[100%]" />
                        </div>
                        <div className="border-b-[1px] border-[#F0F0F0] w-[45%]">
                            <h5 className="font-dm font-bold text-[16px] text-[#262626]">Password</h5>
                            <input onChange={(e) => setPassword(e.target.value)} type="Password" placeholder="********" className="py-[10px] outline-none w-full" />
                        </div>
                    </div>
                    <button onClick={handelLogin} className="my-[30px] font-dm font-bold text-[15px] text-[#262626] border-[1px] border-[#262626] py-[15px] px-[80px] hover:text-[#FFF] hover:bg-[#262626] hover:shadow-xl ease-in-out duration-500">Login</button>
                </div>
            </div>
            <div className="w-[50%]">
                <h4 className="font-dm font-bold text-[35px] text-[#262626] my-[30px]">New Customer</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the.</p>
                <button className="my-[30px] font-dm font-bold text-[15px] text-[#262626] border-[1px] border-[#262626] py-[15px] px-[80px] hover:text-[#FFF] hover:bg-[#262626] hover:shadow-xl ease-in-out duration-500"><Link to="/singup">
                    Continue</Link></button>
            </div>
        </Container>
    )
}

export default Login
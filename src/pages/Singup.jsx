import Container from "../components/Container"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";

const Singup = () => {
  let navigate = useNavigate("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")

  let handelSingup = () => {
    createUserWithEmailAndPassword(auth, email, password, firstName, lastName)
      .then((userCredential) => {
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;

      });
  }

  return (
    <Container className="px-[10px] lg:px-0">
      <div className="my-[10px] lg:my-[30px]">
        <h3 className="font-dm font-bold text-[25px] lg:text-[40px] text-[#262626]">Sign up</h3>
        <span className="font-dm font-normal text-[12px] lg:text-[15px] text-[#767676]"><Link to="/" className="hover:text-[#262626]">
          Home</Link> &gt; Sign up</span>
      </div>
      <div className="border-b-[1px] border-[#F0F0F0] pb-[10px] lg:pb-[30px]">
        <div className="w-full lg:w-[50%]">
          <p className="font-dm font-normal text-[12px] lg:text-[15px] text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the.</p>
        </div>
      </div>
      <div className="lg:border-b-[1px] border-[#F0F0F0] lg:pb-[30px] lg:mb-[30px]">
        <div className="w-full lg:w-[50%]">
          <h4 className="font-dm font-bold text-[20px] lg:text-[35px] text-[#262626] my-[15px] lg:my-[30px]">Your Personal Details</h4>
          <div className="flex justify-between flex-wrap items-center">
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">First Name</h5>
              <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Last Name</h5>
              <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Email address</h5>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="company@domain.com" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Telephone</h5>
              <input onChange={(e) => setPassword(e.target.value)} type="tel" placeholder="Your phone number" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:border-b-[1px] border-[#F0F0F0] lg:pb-[30px] lg:mb-[30px]">
        <div className="w-full lg:w-[50%]">
          <h4 className="font-dm font-bold text-[17px] lg:text-[35px] text-[#262626] my-[15px] lg:my-[30px]">New Customer</h4>
          <div className="flex justify-between flex-wrap items-center">
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Address 1</h5>
              <input type="text" placeholder="4279 Zboncak Port Suite 6212" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Address 2</h5>
              <input type="text" placeholder="_ _" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">City</h5>
              <input type="text" placeholder="Your city" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Post Code</h5>
              <input type="number" placeholder="05228" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Division</h5>
              <form className="max-w-sm mx-auto">
                <select id="countries" className="bg-[#fff] font-dm font-normal text-[#262626] text-[14px] rounded-lg block w-full py-[10px]">
                  <option className="font-dm font-normal text-[#262626] text-[14px]" selected>Please select</option>
                  <option value="BD-A"><p className="font-dm font-normal text-[#262626] text-[14px]">Barisal</p></option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]" value="BD-B">Chittagong</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]" value="BD-C">Dhaka</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]" value="BD-D">Khulna</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]" value="BD-H">Mymensingh</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]" value="BD-E">Rajshahi</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]" value="BD-F">Rangpur</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]" value="BD-G">Sylhet</option>
                </select>
              </form>
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">District</h5>
              <form className="max-w-sm mx-auto text-[red]">
                <select id="countries" className="bg-[#fff] text-gray-900 text-sm rounded-lg block w-full py-[10px]">
                  <option className="font-dm font-normal text-[#262626] text-[14px]" selected>Please select</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Dhaka</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Faridpur</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Gazipur</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Gopalganj</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Jamalpur</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Kishoreganj</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Madaripur</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Manikganj</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Munshiganj</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Mymensingh</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Narayanganj</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Narsingdi</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Netrokona</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Rajbari</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Shariatpur</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Sherpur</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Tangail</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Bogra</option>
                  <option className="font-dm font-normal text-[#262626] text-[14px]">Joypurhat</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:border-b-[1px] border-[#F0F0F0] pb-[30px] lg:mb-[30px]">
        <div className="w-full lg:w-[50%]">
          <h4 className="font-dm font-bold text-[17px] lg:text-[35px] text-[#262626] my-[15px] lg:my-[30px]">Your Password</h4>
          <div onChange={(e) => setPassword(e.target.value)} className="flex justify-between flex-wrap items-center">
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Password</h5>
              <input type="password" placeholder="Password" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
            <div className="border-b-[1px] border-[#F0F0F0] w-full lg:w-[45%] my-[5px] lg:my-[10px]">
              <h5 className="font-dm font-bold text-[14px] lg:text-[16px] text-[#262626]">Repeat Password</h5>
              <input type="password" placeholder="Repeat Password" className="py-[5px] outline-none w-full placeholder:font-dm placeholder:font-normal placeholder:text-[12px] placeholder:text-[#767676] font-dm font-normal text-[14px] lg:text-[16px] text-[#262626]" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center">
          <input type="checkbox" />
          <p className="font-dm font-normal text-[14px] text-[#767676] pl-[10px]">I have read and agree to the Privacy Policy</p>
        </div>
        <div className="flex items-center justify-between w-[70%] lg:w-[20%] py-[20px]">
          <p className="font-dm font-normal text-[14px] text-[#767676]">Subscribe Newsletter</p>
          <div className="">
            <input id="default-checkbox" type="checkbox" />
            <label htmlFor="default-checkbox" className="font-dm font-normal text-[14px] text-[#767676] pl-[10px]">Yes</label>
          </div>
          <div className="">
            <input type="checkbox" />
            <label htmlFor="default-checkbox" className="font-dm font-normal text-[14px] text-[#767676] pl-[10px]">No</label>
          </div>
        </div>
      </div>
      <button onClick={handelSingup} className="mb-[30px] font-dm font-bold text-[15px] text-[#262626] border-[1px] border-[#262626] py-[15px] w-full lg:w-[300px] hover:text-[#FFF] hover:bg-[#262626] hover:shadow-xl ease-in-out duration-500">Login</button>

    </Container>
  )
}

export default Singup
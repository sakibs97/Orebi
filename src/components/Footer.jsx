import Container from "./Container"
import Flex from "./Flex"
import logo from "../assets/Logo.png"


const Footer = () => {
    return (
        <Container>
            <Flex className=''>
                <div className="flex">
                    <div className="">
                        <h3>MENU</h3>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Journal</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3>SHOP</h3>
                        <ul>
                            <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Category 3</li>
                            <li>Category 4</li>
                            <li>Category 5</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3>HELP</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Special E-shop</li>
                            <li>Shipping</li>
                            <li>Secure Payments</li>
                        </ul>
                    </div>
                </div>
                <div className="flex">
                    <div className="">
                        <h4>(052) 611-5711</h4>
                        <h4>company@domain.com</h4>
                        <a href="#">575 Crescent Ave. Quakertown, PA 18951</a>
                    </div>
                    <div className="">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </Flex>
        </Container>
    )
}

export default Footer
import axios from 'axios';
import { useState } from 'react';
import Container from "./Container"
import NewCollectreusable from "./reusable/NewCollectreusable"
import Activereusable from "./reusable/Activereusable"

const OurBestApi = () => {
    let [products, setProducts] = useState([])

    let getData = () => {
        axios.get("https://dummyjson.com/products").then((response) => {
            setProducts(response.data.products);
        })
    }
    useState(() => {
        getData()
    }, [])

    console.log(products);
    return (
        <section className="pb-[30px] lg:pb-[50px]">
            <Container>
                <div className="pb-[30px] px-[10px] lg:px-0">
                    <h2 className="font-dm font-bold text-[30px] lg:text-[40px] text-[#262626]">Our Bestsellers</h2>
                </div>
                <div className="flex justify-between flex-wrap px-[10px] lg:px-0">
                    {products.map((item) => (
                        <>
                            <div className="lg:w-[24%] w-[48%] mb-[10px] lg:mb-0">
                                <div className="relative overflow-hidden group">
                                    <img src={item.thumbnail} alt="best1" className="w-full lg:h-[250px] h-[150px] hover:shadow-lg shadow-[#D8D8D8]-500/50" />
                                    <NewCollectreusable newcoll='10%' />
                                    <Activereusable WishList='Add to Wish List' Compare='Compare' cart='Add to Cart ' />
                                </div>
                                <div className="">
                                    <div className="flex justify-between items-center pt-[10px] py-2">
                                        <div className="">
                                            <h3 className="font-dm font-bold text-[14px] lg:text-[20px] text-[#262626]">{item.title}</h3>
                                        </div>
                                        <div className="">
                                            <h3 className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">${item.price}</h3>
                                        </div>
                                    </div>
                                    <div className="mb-[15px]">
                                        <p className="font-dm font-normal text-[12px] lg:text-[16px] text-[#767676]">{item.brand}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default OurBestApi
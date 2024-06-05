import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProductDetails = () => {
    let [singleProduct, setSingleProduct] = useState([])
    let productId = useParams()

    let dataId = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProduct(response.data.products)
        })
    }

    useEffect(() => {
        dataId()
    }, [])


    return (
        <div>
            helo
        </div>
    )
}

export default ProductDetails
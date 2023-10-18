"use client"
import { useEffect, useState } from "react"
export default function ProductList () {
    const [product, setProducts] = useState([])
    useEffect(async ()=> {
        let response = await fetch ("https://dummyjson.com/products");
         response = await response.json();
         console.log(response)
        setProducts(response.products)
    },[]);
    return(
        <>
            <h1 className="text-center text-4xl text-teal-500 font-bold">Product List</h1>

            {
                product.map((item) => {
                    <h4>{item.price}</h4>
                })
            }
        </>
    )
}
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import SlideProduct from '../../component/slideProducts/SlideProduct'
import Loading from './Loading'
import ProductImages from './productImages'
import ProductInformation from './productInformation'
import PageTransition from '../../component/PageTransition'


function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const [zweiProduct, setZweiProduct] = useState([])
    const [zweiLoading, setZweiLoading] = useState(true)


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
                setLoading(false)
            } catch (error) {
                console.log(error);

            }

        }
        fetchProduct()
    }, [id])
    useEffect(() => {
        if (!product) return
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setZweiProduct(data.products)
            })
            .catch((error) => console.error(error))
            .finally(() => setZweiLoading(false))
    }, [product?.category])


    if (!product) return <p>product Not Found</p>
    return (
        <PageTransition key={id}>
            <div>
                {loading ? (
                    <Loading />
                ) : (
                    <div className='item_details'>
                        <div className="container">
                            <ProductImages product={product} />
                            <ProductInformation product={product} />
                        </div>
                    </div>
                )}


                <div>
                    {zweiLoading ? (
                        <p>...loading</p>
                    ) : (
                        <SlideProduct key={product.category} data={zweiProduct} title={product.category.replace("-", " ")} />
                    )}

                </div>
            </div>
        </PageTransition>
    )
}

export default ProductDetails
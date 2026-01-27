import React, { useEffect, useState } from 'react'
import HeroSlider from '../../component/HeroSlider'
import './Home.css'
import SlideProduct from '../../component/slideProducts/SlideProduct'
import Loading from './Loading'
import PageTransition from '../../component/PageTransition'


const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
]

function Home() {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return { [category]: data.products }
          })
        )
        const ProductsData = Object.assign({}, ...results);
        setProducts(ProductsData)
      } catch (error) {
        console.error("Error Fetching", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <PageTransition>
      <div>
        {/* HeroSlider دائما ظاهر */}
        <HeroSlider />

        {/* قسم المنتجات */}
        <div>
          {loading ? (
            <Loading />  // يظهر فقط أثناء تحميل المنتجات
          ) : (
            categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))
          )}
        </div>
      </div>
    </PageTransition>
  )
}

export default Home

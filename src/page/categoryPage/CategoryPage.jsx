import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../component/slideProducts/Product'
import './categoryPage.css'
import Loading from '../home/Loading'
import PageTransition from '../../component/PageTransition'

function CategoryPage() {
  const { category } = useParams()
  const [categoryProduct, setCategoryProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProduct(data.products)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [category])
  console.log(categoryProduct)

  return (
    <PageTransition key={category}>
      <div className='category_product'>
      {loading ? <Loading key={category}/>
        :
        <div className="container">
          <div className="top_slide">
            <h2>{category} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, cupiditate?</p>
          </div>
          <div className='products'>
            {categoryProduct.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>}


    </div>
    </PageTransition>
  )
}

export default CategoryPage
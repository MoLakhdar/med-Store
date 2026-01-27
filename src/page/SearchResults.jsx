import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loading from './Home/Loading';
import Product from '../component/slideProducts/Product';
import PageTransition from '../component/PageTransition';

function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query");
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true);
  console.log(results)

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data = await res.json();
        setResults(data.products || [])

      } catch (error) {
        console.error("Search Error :", error);

      } finally {
        setLoading(false)
      }
    }
    if (query) fetchResult();
  }, [query])
  return (
    <PageTransition key={query}>
      <div className='category_product'>
        {loading ? (
          <Loading key={query} />
        ) : results.length>0 ? (
          
          <div className="container">
            <div className="top_slide">
              <h2>Results for :{query} </h2>

            </div>
            <div className='products'>
              {results.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        
        ) : <div className='container'><p>No Results Found.</p></div> }


      </div>
    </PageTransition>
  );
}

export default SearchResults
import { Routes, Route } from "react-router-dom"
import BtmHeader from "./component/header/BtmHeader"
import TopHeader from "./component/header/TopHeader"
import Home from "./page/Home/Home"
import ProductDetails from "./page/ProductDetails/ProductDetails"
import Cart from "./page/cart/Cart"
import { Toaster } from "react-hot-toast"
import ScrollToTop from "./component/ScrollToTop"
import { AnimatePresence } from "framer-motion"
import CategoryPage from "./page/categoryPage/CategoryPage"
import SearchResults from "./page/SearchResults"
import Favorites from "./page/favorites/Favorites"
import About from "./page/about/About"
import Contact from "./page/contact/Contact"

function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right" toastOptions={{
          style: {
            background: '#e9e9e9',
            borderRadius: '5px',
            padding: '14px'
          }
        }} />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>

      </AnimatePresence>




    </>
  )
}

export default App

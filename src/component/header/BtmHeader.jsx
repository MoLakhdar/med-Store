import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { PiSignIn } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const NavLinks =[
  {title:"Home",link:"/"},
  {title:"About",link:"/about"},
  {title:"Contact",link:"/contact"},
]
export default function BtmHeader() {
  const [categoryOpen, setCategoryOpen]=useState(false)
  const location= useLocation()
  const[categories,setCategories]= useState([])

  useEffect(()=>{
    setCategoryOpen(false)
  },[location])

  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((data) => setCategories(data))
  },[])
  console.log(categories)


  return (
    <div className='btm_header'> 
    <div className="container">
      <nav className="nav">


        <div className="category_nav">
          <div className="category_btn" onClick={()=>setCategoryOpen(!categoryOpen)}>
            <IoIosMenu />
            <p>Browse Category</p>
            <IoMdArrowDropdown />
          </div>
          <div className={`category_nav_list ${categoryOpen ?"active" :"" } `}>
            {categories.map((category)=>(
              <Link to={`category/${category.slug}`}>{category.name}</Link>
            ))}

          </div>
        </div>
        <div className="nav_links">
          <ul>
          {NavLinks.map((item)=>(
            <li key={item.link} className={location.pathname===item.link? "active" :""}><Link to={item.link}>{item.title} </Link></li>
          ))}
          </ul>
          


        </div>
        




      </nav>
      <div className="sign_regs">
          <Link to="/"><PiSignIn /></Link>
          <Link to="/"><FaUserPlus /></Link>
        </div>
    </div>

    </div>
  )
}

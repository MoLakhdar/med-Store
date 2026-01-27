import "./About.css";

const About = () => {
  const categories = [
    "Smartphones", "Mobile Accessories", "Laptops", "Tablets",
    "Sunglasses", "Sports Accessories", "Electronics",
    "Fashion & Clothing", "Home Appliances", "Gaming & Consoles"
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our E-commerce store! We strive to offer the best products to our customers with top quality and competitive prices.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make online shopping easy and enjoyable for everyone. We aim to provide a wide range of products to meet all your needs.
      </p>

      <h2>Product Categories</h2>
      <div className="product-categories">
        {categories.map((cat, index) => (
          <div key={index}>{cat}</div>
        ))}
      </div>

      <h2>Why Choose Us?</h2>
      <p>
        - High-quality products<br/>
        - Competitive prices<br/>
        - Excellent customer service<br/>
        - Fast and secure delivery
      </p>

      <h2>Our Team</h2>
      <p>
        Our team consists of experts in e-commerce and customer support, committed to providing the best experience for every customer.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions, please visit our <a href="/contact">Contact</a> page to get in touch.
      </p>
    </div>
  );
}

export default About;

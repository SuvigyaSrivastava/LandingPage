import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const categories = [
    "Fruits and Vegetables",
    "Bakery",
    "Meat and Seafood",
    "Beverage",
    "Biscuit and Snacks",
  ];

  const products = [
    {
      name: "Italian-Style Chicken Meatballs",
      price: "$8.45",
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      name: "Seafoods Stuffed Alaskan Salmon",
      price: "$8.45",
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      name: "Choice Angus Beef Stew Meat",
      price: "$8.45",
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      name: "Crispy Classic Buffalo Wings",
      price: "$8.45",
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      name: "Grass-fed 85/15 Ground Beef",
      price: "$8.45",
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
    {
      name: "Italian-Style Chicken Meatballs",
      price: "$8.45",
      description: "Lorem ipsum dolor sit amet quam in lacus risus.",
    },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Buy Fresh And Organic
            Grocery Food
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam
          </p>
          <div style={buttonTextContainerStyles}>
            <button className="secondary-button" style={{ ...buttonStyles, backgroundColor: 'darkgreen' }}>
              Shop Now <FiArrowRight />
            </button>
            <span style={infoTextStyles}>35k+ Users | 18k+ Products</span>
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <div className="shop-by-category-container">
        <h2 className="category-heading">Shop by Category</h2>
        <div className="category-buttons-container" style={categoryButtonsContainerStyles}>
          {categories.map((category, index) => (
            <button key={index} className="category-button" style={{ ...categoryButtonStyles, backgroundColor: 'white' }}>
              {category}
            </button>
          ))}
        </div>
        <div className="products-list">
          {products.map((product, index) => (
            <div key={index} className="product-item" style={productItemStyles}>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-price-shop">
                <span className="product-price" style={productPriceStyles}>{product.price}</span>
                <button className="shop-now-button" style={{ ...shopNowButtonStyles, backgroundColor: 'darkgreen' }}>SHOP NOW →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const buttonTextContainerStyles = {
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
};

const buttonStyles = {
  marginRight: "1rem",
};

const infoTextStyles = {
  fontSize: "1rem",
  color: "black",
};

const categoryButtonsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  margin: "1rem 0",
};

const categoryButtonStyles = {
  margin: "0 0.5rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#f0f0f0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const productItemStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  borderBottom: "1px solid #ddd",
};

const productPriceStyles = {
  marginRight: "1rem",
  fontWeight: "bold",
};

const shopNowButtonStyles = {
  padding: "0.5rem 1rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Home;

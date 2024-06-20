import React, { useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const [categories] = useState([
    "Fruits and Vegetables",
    "Bakery",
    "Meat and Seafood",
    "Beverage",
    "Biscuit and Snacks",
  ]);

  const [products] = useState({
    "Fruits and Vegetables": [
      {
        name: "Apple",
        price: "$1.99",
        description: "Fresh and delicious apple.",
      },
      {
        name: "Broccoli",
        price: "$2.49",
        description: "Organic broccoli for a healthy diet.",
      },
      {
        name: "Orange",
        price: "$1.79",
        description: "Sweet and juicy orange.",
      },
    ],
    Bakery: [
      {
        name: "Croissant",
        price: "$1.50",
        description: "Buttery and flaky croissant.",
      },
      {
        name: "Baguette",
        price: "$2.00",
        description: "Crusty French baguette.",
      },
      {
        name: "Chocolate Cake",
        price: "$4.99",
        description: "Rich and decadent chocolate cake.",
      },
    ],
    "Meat and Seafood": [
      {
        name: "Salmon Fillet",
        price: "$10.99",
        description: "Fresh salmon fillet.",
      },
      {
        name: "Ribeye Steak",
        price: "$15.99",
        description: "Juicy ribeye steak.",
      },
    ],
    Beverage: [
      {
        name: "Orange Juice",
        price: "$3.99",
        description: "Freshly squeezed orange juice.",
      },
      {
        name: "Green Tea",
        price: "$2.99",
        description: "Healthy green tea.",
      },
    ],
    "Biscuit and Snacks": [
      {
        name: "Chocolate Chip Cookies",
        price: "$4.50",
        description: "Classic chocolate chip cookies.",
      },
      {
        name: "Potato Chips",
        price: "$1.99",
        description: "Crunchy potato chips.",
      },
    ],
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAllItems = () => {
    setSelectedCategory(null); // Set selectedCategory to null to display all items
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
    backgroundColor: "darkgreen",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Buy Fresh And Organic Grocery Food</h1>
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
            <button
              key={index}
              className="category-button"
              style={{
                ...categoryButtonStyles,
                backgroundColor: selectedCategory === category ? 'darkgreen' : '#f0f0f0',
                color: selectedCategory === category ? 'white' : 'black',
              }}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
          <button
            className="category-button"
            style={{
              ...categoryButtonStyles,
              backgroundColor: selectedCategory === null ? 'darkgreen' : '#f0f0f0',
              color: selectedCategory === null ? 'white' : 'black',
            }}
            onClick={handleShowAllItems}
          >
            All Items
          </button>
        </div>
        <div className="products-list">
          {selectedCategory
            ? products[selectedCategory].map((product, index) => (
                <div key={index} className="product-item" style={productItemStyles}>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                  </div>
                  <div className="product-price-shop">
                    <span className="product-price" style={productPriceStyles}>{product.price}</span>
                    <button className="shop-now-button" style={shopNowButtonStyles}>SHOP NOW →</button>
                  </div>
                </div>
              ))
            : categories.flatMap(category => products[category].map((product, index) => (
                <div key={index} className="product-item" style={productItemStyles}>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                  </div>
                  <div className="product-price-shop">
                    <span className="product-price" style={productPriceStyles}>{product.price}</span>
                    <button className="shop-now-button" style={shopNowButtonStyles}>SHOP NOW →</button>
                  </div>
                </div>
              )))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;

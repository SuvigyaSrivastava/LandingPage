import React, { useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const initialProducts = [
    {
      name: "Organic Gala Apples",
      price: "$2.99 / lb",
      description: "Crisp and sweet, perfect for snacking or baking.",
      category: "Fruits and Vegetables",
    },
    {
      name: "Fresh Romaine Lettuce",
      price: "$1.49 each",
      description: "Crisp and refreshing, ideal for salads and sandwiches.",
      category: "Fruits and Vegetables",
    },
    {
      name: "Artisan Sourdough Bread",
      price: "$4.99 / loaf",
      description: "Handcrafted with a tangy flavor and chewy crust.",
      category: "Bakery",
    },
    {
      name: "Chocolate Croissants",
      price: "$2.49 each",
      description: "Buttery, flaky pastry with a rich chocolate filling.",
      category: "Bakery",
    },
    {
      name: "Wild-Caught Alaskan Salmon Fillet",
      price: "$12.99 / lb",
      description: "Sustainably sourced, rich in omega-3 fatty acids.",
      category: "Meat and Seafood",
    },
    {
      name: "Grass-Fed Angus Beef Ribeye Steak",
      price: "$17.99 / lb",
      description: "Juicy and flavorful, perfect for grilling or pan-searing.",
      category: "Meat and Seafood",
    },
    {
      name: "Cold Brew Coffee",
      price: "$3.99 / bottle",
      description: "Smooth and bold, with a hint of chocolate notes.",
      category: "Beverage",
    },
    {
      name: "Organic Green Tea",
      price: "$2.99 / box (20 tea bags)",
      description: "Refreshing and aromatic, packed with antioxidants.",
      category: "Beverage",
    },
    {
      name: "Gluten-Free Multigrain Crackers",
      price: "$4.49 / box",
      description: "Crispy and nutritious, perfect for cheese platters.",
      category: "Biscuit and Snacks",
    },
    {
      name: "Sea Salt Popcorn",
      price: "$1.99 / bag",
      description: "Lightly salted, satisfying snack for movie nights.",
      category: "Biscuit and Snacks",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Fruits and Vegetables",
    "Bakery",
    "Meat and Seafood",
    "Beverage",
    "Biscuit and Snacks",
  ];

  const filterProducts = (category) => {
    // Filter products based on category
    const filteredProducts = initialProducts.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
    setSelectedCategory(category); // Set selected category
  };

  const resetProducts = () => {
    // Reset products to initial list
    setProducts(initialProducts);
    setSelectedCategory(null); // Reset selected category
  };

  // Define your styles here
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

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        {/* Your banner and other content */}
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
                backgroundColor: 'white',
                border: category === selectedCategory ? '2px solid darkgreen' : 'none',
              }}
              onClick={() => filterProducts(category)}
            >
              {category}
            </button>
          ))}
          <button
            className="category-button"
            style={{ ...categoryButtonStyles, backgroundColor: 'white' }}
            onClick={resetProducts}
          >
            Reset
          </button>
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

export default Home;

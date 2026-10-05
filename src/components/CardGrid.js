import React, { useState } from "react";
import Card from "../Card";
import styles from "./CardGrid.module.css";

const CardGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Web Development",
      price: 1500000,
      description: "Professional website development with modern technologies",
      image: "https://via.placeholder.com/300x200?text=Web+Dev",
      category: "development",
    },
    {
      id: 2,
      name: "Mobile App",
      price: 2500000,
      description: "Cross-platform mobile application development",
      image: "https://via.placeholder.com/300x200?text=Mobile+App",
      category: "development",
    },
    {
      id: 3,
      name: "UI/UX Design",
      price: 1200000,
      description: "User interface and experience design services",
      image: "https://via.placeholder.com/300x200?text=UI+UX",
      category: "design",
    },
    {
      id: 4,
      name: "Brand Identity",
      price: 800000,
      description: "Complete brand identity design package",
      image: "https://via.placeholder.com/300x200?text=Branding",
      category: "design",
    },
    {
      id: 5,
      name: "Digital Marketing",
      price: 2000000,
      description: "Comprehensive digital marketing strategy",
      image: "https://via.placeholder.com/300x200?text=Marketing",
      category: "marketing",
    },
    {
      id: 6,
      name: "SEO Optimization",
      price: 1500000,
      description: "Search engine optimization services",
      image: "https://via.placeholder.com/300x200?text=SEO",
      category: "marketing",
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    alert(`Added to cart: ${product.name}`);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Services</h2>

      {/* Filter Buttons */}
      <div className={styles.filterSection}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.filterButton} ${
              selectedCategory === category.id ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;

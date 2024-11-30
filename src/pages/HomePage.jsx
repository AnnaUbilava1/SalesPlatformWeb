import React, { useState, useEffect } from "react";
import PhotoGallery from "../components/PhotoGallery";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import productsData from "../components/data";
import FilterBar from "../components/FilterBar";
import "../App.css";

function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [onSale, setOnSale] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSortByNameAsc = () => {
    setSortBy("nameAsc");
  };

  const handleSortByNameDesc = () => {
    setSortBy("nameDesc");
  };

  const handleSortByPriceAsc = () => {
    setSortBy("priceAsc");
  };

  const handleSortByPriceDesc = () => {
    setSortBy("priceDesc");
  };

  const handleSelectBrand = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands((prevSelectedBrands) =>
      checked
        ? [...prevSelectedBrands, value]
        : prevSelectedBrands.filter((brand) => brand !== value)
    );
  };

  const handleSelectColor = (event) => {
    const { value, checked } = event.target;
    setSelectedColors((prevSelectedColors) =>
      checked
        ? [...prevSelectedColors, value]
        : prevSelectedColors.filter((color) => color !== value)
    );
  };

  const handleOnSaleChange = (event) => {
    setOnSale(event.target.checked);
  };

  const filterProducts = () => {
    let filteredData = [...productsData];

    if (searchTerm) {
      filteredData = filteredData.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.specs.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm)
      );
    }

    if (selectedBrands.length > 0) {
      filteredData = filteredData.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedColors.length > 0) {
      filteredData = filteredData.filter((product) =>
        selectedColors.includes(product.color)
      );
    }

    if (onSale) {
      filteredData = filteredData.filter((product) => product.onSale);
    }

    if (sortBy) {
      filteredData.sort((a, b) => {
        if (sortBy === "nameAsc") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "nameDesc") {
          return b.name.localeCompare(a.name);
        } else if (sortBy === "priceAsc") {
          return a.price - b.price;
        } else if (sortBy === "priceDesc") {
          return b.price - a.price;
        }
        return 0;
      });
    }

    setFilteredProducts(filteredData);
  };

  useEffect(() => {
    filterProducts();
  }, [searchTerm, sortBy, selectedBrands, selectedColors, onSale]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <div>
      <PhotoGallery />
      <div className="container">
        <div className="left-side">
          <FilterBar
            products={productsData}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            handleSearch={handleSearch}
            handleSortByNameAsc={handleSortByNameAsc}
            handleSortByNameDesc={handleSortByNameDesc}
            handleSortByPriceAsc={handleSortByPriceAsc}
            handleSortByPriceDesc={handleSortByPriceDesc}
            selectedBrands={selectedBrands}
            handleSelectBrand={handleSelectBrand}
            selectedColors={selectedColors}
            handleSelectColor={handleSelectColor}
            onSale={onSale}
            handleOnSaleChange={handleOnSaleChange}
          />

          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>

        <div className="productList">
          <ProductList products={filteredProducts} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

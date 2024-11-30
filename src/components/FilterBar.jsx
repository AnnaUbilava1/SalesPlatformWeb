import React from "react";
import "../App.css";

const FilterBar = ({
  products,
  searchTerm,
  sortBy,
  setSortBy,
  handleSearch,
  selectedBrands,
  handleSelectBrand,
  selectedColors,
  handleSelectColor,
  onSale,
  handleOnSaleChange,
  handleSortByNameAsc,
  handleSortByNameDesc,
  handleSortByPriceAsc,
  handleSortByPriceDesc,
}) => {
  const brands = [...new Set(products.map((product) => product.brand))];
  const colors = [...new Set(products.map((product) => product.color))];

  const handleSearchChange = (event) => {
    handleSearch(event);
  };

  return (
    <div className="filter-bar">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div>
        <h4>Brand</h4>
        {brands.map((brand) => (
          <div key={brand}>
            <label>
              <input
                type="checkbox"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={handleSelectBrand}
              />
              {brand}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h4>Color</h4>
        {colors.map((color) => (
          <div key={color}>
            <label>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={handleSelectColor}
              />
              {color}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h4>Sale</h4>
        <label>
          <input
            type="checkbox"
            checked={onSale}
            onChange={handleOnSaleChange}
          />
          On Sale
        </label>
      </div>

      <select
        className="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="nameAsc" onClick={handleSortByNameAsc}>
          Name Ascending
        </option>
        <option value="nameDesc" onClick={handleSortByNameDesc}>
          Name Descending
        </option>
        <option value="priceAsc" onClick={handleSortByPriceAsc}>
          Price Ascending
        </option>
        <option value="priceDesc" onClick={handleSortByPriceDesc}>
          Price Descending
        </option>
      </select>
    </div>
  );
};

export default FilterBar;

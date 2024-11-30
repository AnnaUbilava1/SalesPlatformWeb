import React, { useState } from "react";
import "../App.css";
import GalleryDetails from "../pages/GalleryDetails";
import next from "../photos/next.png";
import previous from "../photos/back.png";
import img1 from "../photos/Gallery_photo1_iPhone-15-Pro.webp";
import img2 from "../photos/Gallery_photo2_Samsung-Galaxy-S24.webp";
import img3 from "../photos/Gallery_photo3_Nothing-phone-2.jpg";

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro Max",
      src: img1,
      price: 5649,
      onSale: true,
      specs: "1TB - Black Titanium",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      src: img2,
      price: 4999,
      onSale: true,
      specs: " S928B (12GB/1TB) LTE/5 Dual Sim - Black",
    },
    {
      id: 3,
      name: "Nothing Phone 2",
      src: img3,
      price: 1899,
      onSale: false,
      specs: "5G (12GB/256GB) - White",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const openDetails = () => {
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };
  const { name, price, visible, onSale, src, specs } = photos;

  return (
    <div className="photo-gallery">
      <button className="leftArrow" onClick={handlePrevious}>
        <img className="arrows" src={previous} alt="previous" />
      </button>
      {photos.length > 0 && (
        <div className="photo-item">
          <img
            src={photos[currentIndex].src}
            alt={`Product ${photos[currentIndex].id}`}
            onClick={openDetails}
          />
          <div className="photo-info">
            <h2>{photos[currentIndex].name}</h2>
            <p>Price: ₾{photos[currentIndex].price}</p>
            {photos[currentIndex].onSale && <h2 className="sale">On Sale!</h2>}

            {showDetails && (
              <GalleryDetails
                product={photos[currentIndex]}
                onClose={closeDetails}
              />
            )}
          </div>
        </div>
      )}

      <button className="rightArrow" onClick={handleNext}>
        <img className="arrows" src={next} alt="next"></img>
      </button>
    </div>
  );
};

export default PhotoGallery;

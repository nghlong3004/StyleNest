import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [imageIndex, setImageIndex] = useState(0);

  if (!product) return <div className="not-found">Không tìm thấy sản phẩm.</div>;

  const images = [product.img, product.img2];

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="product-detail-container">
      <div className="product-main">
        <div className="product-image">
          <button className="arrow left" onClick={prevImage}>&#8592;</button>
          <img src={images[imageIndex]} alt={`${product.name} - ${imageIndex + 1}`} />
          <button className="arrow right" onClick={nextImage}>&#8594;</button>
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
      <div className="product-extra">
        <h2 className="product-description-title">MÔ TẢ</h2>
        <div className="product-section">
          <h3>Chi tiết sản phẩm</h3>
          <p>{product.details}</p>
        </div>
        
        <div className="product-secondary-image">
          <img src={product.img2} alt={`${product.name} - phụ`} />
        </div>

        <div className="product-section">
          <h3>Lợi ích</h3>
          <p>{product.benefit}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

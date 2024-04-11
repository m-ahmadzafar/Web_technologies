import React from 'react';

function ProductCarousel() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', description: 'Description for Product 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', description: 'Description for Product 5', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="product-carousel">
      <h2>Product Carousel</h2>
      <div className="carousel">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;

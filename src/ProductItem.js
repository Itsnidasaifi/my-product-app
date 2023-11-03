// ProductItem.js
import React from 'react';
import styled from 'styled-components';

const ProductItemContainer = styled.div`
  // Style your product item here, including hover effects and animations.
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 50%;
    height: auto;
    border-radius: 8px;
    
  }

  div.price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 8px;
    color: #007bff;
    background-color: dark blue;
    
  }

  div.description {
    margin-top: 8px;
    font-weight:bold;
  }
`;

const ProductItem = ({ product }) => {
  return (
    <ProductItemContainer>
      <img src={product.image} alt={product.description} />
      <div>{product.price}</div>
      <div>{product.category}</div>
      <div>{product.description}</div>
    </ProductItemContainer>
  );
};

export default ProductItem;

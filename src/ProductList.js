// ProductList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import SortBy from './SortBy';
import Pagination from './Pagination';

const products = [
  {
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    description: "Desc: Your perfect pack for everyday use and walks in the forest",
    price: "Price:200 "
  },
  {
    id: 2,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    description: "Desc: Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with a round neck made for durability",
    price:"Price:400 "
  },
  {
    id: 3,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    description: "Desc: The color could be slightly different between on the screen and in practice.",
    price: "Price:300 "
  },
  {
    id: 4,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    description: "Desc: Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    price: "Price:350"
  },
  {
    id: 5,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    description: "Desc: Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    price: "Price:800"
  }
];

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductList = () => {
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  // Implement sorting logic based on the sortBy state.
  const sortProducts = (productsToSort, sortBy) => {
    if (sortBy === 'lowToHigh') {
      return productsToSort.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'highToLow') {
      return productsToSort.sort((a, b) => b.price - a.price);
    }
    // For 'default' sorting, don't perform any sorting.
    return productsToSort;
  };


   // Implement your sorting logic here.
  const sortedProducts = sortProducts([...products], sortBy);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <ProductListContainer>
      <SortBy setSortBy={setSortBy} />
      {currentProducts.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={sortedProducts.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </ProductListContainer>
  );
};

export default ProductList;

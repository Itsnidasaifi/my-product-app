// SortBy.js
import React from 'react';
import styled from 'styled-components';

const SortByContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SortBy = ({ setSortBy }) => {
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <SortByContainer>
      <label>Sort by:</label>
      <select onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </SortByContainer>
  );
};

export default SortBy;

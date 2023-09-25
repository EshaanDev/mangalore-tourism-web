import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import './comp-styles/CustomArrows.css';

const PrevArrow = (props) => (
  <button className="custom-prev-arrow" onClick={props.onClick}>
  <FaArrowCircleLeft/>
</button>
);

const NextArrow = (props) => (
  <button className="custom-next-arrow" onClick={props.onClick}>
   <FaArrowCircleRight/>
  </button>
);

export { NextArrow, PrevArrow };


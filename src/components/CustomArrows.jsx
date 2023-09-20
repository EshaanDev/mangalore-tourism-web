import React from 'react';

const PrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev">
    Previous
  </button>
);

const NextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    Next
  </button>
);

export { NextArrow, PrevArrow };


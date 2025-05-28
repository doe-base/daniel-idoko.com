import React from 'react';
import Slider from 'react-slick';
import './ProjectImageSlider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const ProjectImageSlider = ({ images, darkMode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={`slider-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slider-image-container">
            <img src={src} alt={`Screenshot ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectImageSlider;

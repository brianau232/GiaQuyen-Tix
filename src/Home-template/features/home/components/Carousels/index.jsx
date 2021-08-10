import { IMG_NEWS } from "Contants";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.scss";

const CarouselContainer = () => {
  const photos = [
    { img: IMG_NEWS.tix1 },
    { img: IMG_NEWS.tix2 },
    { img: IMG_NEWS.tix3 },
    { img: IMG_NEWS.tix4 },
    { img: IMG_NEWS.tix5 },
    { img: IMG_NEWS.tix6 },
  ];

  const renderCarousel = photos.map((photo, index) => {
    return (
      <Carousel.Item
        interval={4000}
        pause="true"
        className="carousel__item"
        key={index}
      >
        <img
          className="carousel__item--img"
          height="500px"
          width="100%"
          src={photo.img}
          alt="First slide"
        />
      </Carousel.Item>
    );
  });
  return <Carousel>{renderCarousel}</Carousel>;
};

export default CarouselContainer;

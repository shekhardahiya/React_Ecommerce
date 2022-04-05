import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousal.component.css";

export default function CustomCarousel(props) {
  let allCarousel = props.carouselData.map((carousel) => {
    return (
      <Carousel.Item>
        <img
          className="w-100 "
          src={"./" + carousel.bannerImageUrl}
          alt="First slide"
          key={carousel.id}
        />
      </Carousel.Item>
    );
  });

  return (
    <div className="row shadow">
      <div className="col-md-10 offset-1">
        <Carousel variant="dark" className="">
          {allCarousel}
        </Carousel>
      </div>
    </div>
  );
}

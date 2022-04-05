import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomCarousel from "../Carousel/CustomCarousel.component";
import Category from "../Category/category.component";

export default function Home() {
  let [carousel, setCarousel] = useState([]);
  let [categories, setCategory] = useState([]);

  useEffect(() => {
    let carouselData = axios.get("http://localhost:5000/banners");
    carouselData.then((response) => {
      setCarousel(response.data);
    });
    let categorydata = axios.get("http://localhost:5000/categories");
    categorydata.then((response) => {
      console.log(response.data);
      setCategory(response.data);
    });
  }, []);

  return (
    <div className="container">
      <CustomCarousel carouselData={carousel} />
      <Category categories={categories} />
    </div>
  );
}

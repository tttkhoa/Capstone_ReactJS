import React from "react";
import { Carousel } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarousel } from "./duck/action";

export default function CarouselReactBootstrap() {
  const data = useSelector((state) => state.carouselReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);

  const renderCarousel = () => {
    return data?.map((item) => {
      return (
        <Carousel.Item key={item.maBanner} interval={1000}>
          <img className="d-block img-carousel" src={item.hinhAnh} alt="img" />
        </Carousel.Item>
      );
    });
  };

  return <Carousel fade>{renderCarousel()}</Carousel>;
}

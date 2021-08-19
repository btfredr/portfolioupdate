import { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <h1 className="heading">Previous Projects</h1>
      <section className="carousel" id="projects">
        <FaArrowAltCircleLeft
          className="carousel__leftArrow"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="carousel__rightArrow"
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              <div className="carousel__imgContainer">
                {index === current && (
                  <div>
                    <a href={slide.link} target="_blank">
                      <img
                        src={slide.image}
                        alt="Random"
                        className="carousel__image"
                      />
                    </a>
                    <h1 className="carousel__title">{slide.title}</h1>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Carousel;

import React, { useState } from "react";

import propTypes from "prop-types";
import Slick from "react-slick";
import {
  Overlay,
  Global,
  Header,
  CloseBtn,
  ImgWrapper,
  SlickWrapper,
} from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <div>
            {currentSlide + 1} /{images.length}
          </div>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: propTypes.arrayOf(propTypes.object).isRequired,
  onClose: propTypes.func.isRequired,
};

export default ImagesZoom;

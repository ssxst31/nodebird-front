import React, { useCallback, useState } from "react";

import propTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        ></img>
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          width="50%"
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role="presentation"
          width="50%"
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "56%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진
        </div>
      </div>
    </>
  );
};

PostImages.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
};

export default PostImages;

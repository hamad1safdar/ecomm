import { Carousel } from "antd";
import { FC } from "react";

import "./styles.css";

const CustomCarousel: FC<{ images: Array<string> }> = ({ images }) => {
  return (
    <Carousel>
      {images.map((img, index) => (
        <div>
          <img className="slide" alt={"slide" + index} src={img} key={img} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;

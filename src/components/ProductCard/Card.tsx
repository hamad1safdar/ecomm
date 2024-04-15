import { FC } from "react";
import { Card } from "antd";

import "./styles.css";

const ProductCard: FC<{
  productId: number;
  imgUrl: string;
  title: string;
  description: string;
  price: string;
  onClick: (productId: number) => void;
}> = ({ productId, imgUrl, title, description, price, onClick }) => {
  const handleClick = () => {
    //anything to manage in Product Card Scope

    onClick?.(productId);
  };
  return (
    <Card
      hoverable
      className="product-card"
      cover={<img className="product-img" alt={title} src={imgUrl} />}
      onClick={handleClick}
    >
      <Card.Meta title={title} description={description} />
      <div className="product-price">${price}</div>
    </Card>
  );
};

export default ProductCard;

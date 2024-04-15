import { useState } from "react";
import { Pagination } from "antd";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";
import Grid, { Item } from "../../components/ProductContainer";

import { getAll } from "../../services/product";
import { QUERY_KEYS } from "../../CONSTANTS";

import "./styles.css";

const Catalogue = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data, isPending, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS.GET_ALL, page, perPage],
    queryFn: () => getAll({ page, perPage }),
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  const handleLimitChange = (_current: number, pageSize: number) => {
    setPerPage(pageSize);
  };

  const handleCardClick = (productId: number) => {
    alert(productId);
  };

  return (
    <div className="catalogue-page">
      <Carousel
        images={[
          "https://dummyimage.com/2400x800/000/fff&text=1",
          "https://dummyimage.com/2400x800/000/fff&text=2",
          "https://dummyimage.com/2400x800/000/fff&text=3",
          "https://dummyimage.com/2400x800/000/fff&text=4",
        ]}
      />

      {isPending ? (
        <>Loading...</>
      ) : isError ? (
        <>Error: {error.message}</>
      ) : (
        <>
          <Grid>
            {data.data.map((product: any) => (
              <Item key={product.id}>
                <ProductCard
                  productId={product.id}
                  imgUrl={product.imageUrl}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  onClick={handleCardClick}
                />
              </Item>
            ))}
          </Grid>
          <div className="pagination-container">
            <Pagination
              style={{ margin: "0 auto" }}
              onChange={handlePageChange}
              total={data.items}
              current={page}
              showSizeChanger
              onShowSizeChange={handleLimitChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Catalogue;

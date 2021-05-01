import React from "react";
import { useParams } from "react-router-dom";

const Shop = (_) => {
  const { id } = useParams();

  return <p>This is the shop page for {id}</p>;
};
export default Shop;

import React from "react";
import { useParams } from "react-router-dom";

const Learn = (_) => {
  const { id } = useParams();
  return <p>This is the learn page for {id}</p>;
};
export default Learn;

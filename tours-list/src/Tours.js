import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTourSection }) => {
  return <Tour tours={tours} removeTourSection={removeTourSection} />;
};
export default Tours;

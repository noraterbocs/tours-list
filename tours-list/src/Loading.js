import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="loading">
      <h1>
        <AiOutlineLoading3Quarters />
        loading...
      </h1>
    </div>
  );
};

export default Loading;

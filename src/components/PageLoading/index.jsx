import React from "react";
import { GridLoader } from "react-spinners";
import "./PageLoading.scss";

function PageLoading() {
  return (
    <div className="pageLoading">
      <GridLoader
        className="iconLoading"
        size={20}
        color="#fb4226"
        loading="true"
      />
    </div>
  );
}

export default PageLoading;

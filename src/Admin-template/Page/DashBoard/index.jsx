import React from "react";
import "./DashBoard.scss";
import Header from "../../Component/Header";
import Control from "../../Component/Control";

function DashBoard() {
  return (
    <div className="admin element__fadeIn">
      <Header />
      <Control />
    </div>
  );
}

export default DashBoard;

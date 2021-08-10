import React, { useState } from "react";
import Tintuc from "./TinTuc";
import Review from "./Review";
import KhuyenMai from "./KhuyenMai";
import "./News.scss";
function News() {
  const [isActive, setIsActive] = useState("tintuc");
  const toggle = (value) => {
    setIsActive(value);
  };

  return (
    <div className="news__container element__fadeIn">
      <div className="news__header">
        <button
          className={isActive === "tintuc" ? "active" : "header__btn"}
          onClick={() => toggle("tintuc")}
        >
          Điện Ảnh 24h
        </button>
        <button
          className={isActive === "review" ? "active" : "header__btn"}
          onClick={() => toggle("review")}
        >
          Review
        </button>
        <button
          className={isActive === "khuyenMai" ? "active" : "header__btn"}
          onClick={() => toggle("khuyenMai")}
        >
          Khuyến mãi
        </button>
      </div>
      <div className="mews__body">
        {isActive === "tintuc" && <Tintuc />}
        {isActive === "review" && <Review />}
        {isActive === "khuyenMai" && <KhuyenMai />}
      </div>
    </div>
  );
}

export default News;

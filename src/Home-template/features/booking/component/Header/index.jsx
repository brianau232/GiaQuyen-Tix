import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.scss";

function Header(props) {
  const { changePage, continueBooking, handleContinueBooking } = props;
  const user = JSON.parse(localStorage.getItem("loginUser"));
  return (
    <div className="bookingPageHeader">
      <div className="booking__listChair--header">
        {continueBooking === true && changePage === "chonGhe" ? (
          <div
            className="header__backIcon"
            onClick={() => handleContinueBooking(false)}
          >
            <svg
              id="color"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12z" />
              <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12z" />
              <path
                d="m10.73 18.791-6.5-6.25c-.147-.142-.23-.337-.23-.541s.083-.399.23-.541l6.5-6.25c.475-.458 1.27-.119 1.27.541v3.25h5.75c.689 0 1.25.561 1.25 1.25v3.5c0 .689-.561 1.25-1.25 1.25h-5.75v3.25c0 .664-.798.995-1.27.541z"
                fill="#fff"
              />
              <path
                d="m19 12h-15c0 .204.083.399.23.541l6.5 6.25c.15.145.334.21.514.21.385-.001.756-.299.756-.751v-3.25h5.75c.689 0 1.25-.561 1.25-1.25z"
                fill="#dedede"
              />
            </svg>
          </div>
        ) : null}
        <div className="header__left">
          <p
            className={
              changePage === "chonGhe"
                ? "header__left--isActive"
                : "header__left--choose"
            }
          >
            <span>01</span>chọn ghế
          </p>
          <p
            className={
              changePage === "payment"
                ? "header__left--isActive"
                : "header__left--choose"
            }
          >
            <span>02</span>Thanh toán
          </p>
          <p
            className={
              changePage === "result"
                ? "header__left--isActive"
                : "header__left--choose"
            }
          >
            <span>03</span>kết quả đặt vé
          </p>
        </div>
        <div className="header__right">
          <div className="right__avatar">
            <Avatar>{user.hoTen.slice(0, 1).toUpperCase()}</Avatar>
          </div>
          <span>{user.taiKhoan}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

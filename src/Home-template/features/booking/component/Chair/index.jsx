import { selectedChair } from "app/movieSlice";
import { images } from "Contants";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BookingPayment from "../BookingPayment";
import CountDown from "../CountDown";
import "./Chair.scss";

function Chair(props) {
  const { listChair, continueBooking, handleContinueBooking, filmInfo } = props;
  const dispatch = useDispatch();
  const chairListSelected = useSelector(
    (state) => state.movies.chairListSelected
  );

  const logoImg = {
    logoBHD: images.logobhd,
    logoCGV: images.logoCgv,
    logoCNS: images.logocinestar,
    logoGLX: images.logogalaxycine,
    logoLot: images.logolotte,
    logoMeg: images.logomega,
  };

  const logoString = filmInfo
    ? filmInfo.tenCumRap.slice(0, 3).toUpperCase()
    : null;

  const renderLogo = () => {
    switch (logoString) {
      case "BHD":
        return logoImg.logoBHD;
      case "CGV":
        return logoImg.logoCGV;
      case "CNS":
        return logoImg.logoCNS;
      case "GLX":
        return logoImg.logoGLX;
      case "LOT":
        return logoImg.logoLot;
      case "MEG":
        return logoImg.logoMeg;
      default:
        break;
    }
  };

  const renderListChair = () => {
    return listChair?.map((chair, index) => {
      let cssChairChose = "";
      let cssChairVip = "";
      let disabled = false;
      if (chair.daDat) {
        cssChairChose = "soutOut";
      }

      if (chair.loaiGhe === "Vip") {
        cssChairVip = "vip";
      }

      let cssChairSelected = "";
      const indexChairselected = chairListSelected.findIndex(
        (chairSelected) => chairSelected.stt === chair.stt
      );

      if (indexChairselected !== -1) {
        cssChairSelected = "selected";
      }
      return (
        <div className="item__chair" key={index}>
          <div
            onClick={() => dispatch(selectedChair(chair))}
            className={`item__chair--seat ${cssChairChose} ${cssChairSelected} ${cssChairVip}`}
            disabled={disabled}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="couch"
              role="img"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
              ></path>
            </svg>
            <p className={`${cssChairChose} ${cssChairSelected}`}>
              {chair.tenGhe}
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="body__main">
      <div className="body__container">
        {continueBooking ? (
          <BookingPayment />
        ) : (
          <div className="body__content">
            <div className="body__content--header">
              <div className="header__left">
                <img src={renderLogo()} alt="logo" />
                <div className="heaer__left--theater">
                  <p className="theater__name">
                    {filmInfo ? filmInfo.tenCumRap : null}
                  </p>
                  <p className="theater__number">
                    <span>
                      {filmInfo
                        ? `118 phút - ${filmInfo.gioChieu} - ${filmInfo.tenRap}`
                        : null}
                    </span>
                  </p>
                </div>
              </div>
              <div className="header__right">
                <span>Thời gian giữ ghế</span>
                <div className="right__timeout">
                  <CountDown />
                </div>
              </div>
            </div>
            <div className="body__content--main">
              <div className="body__screen">Màn hình</div>
              <div className="body__listChair">
                <div className="body__listChair--container">
                  <div className="body__listChair--item">
                    {renderListChair()}
                  </div>
                </div>
              </div>
              <div className="body__footer">
                <div className="body__footer--normal">
                  <div className="normal__chair">
                    <svg
                      width="20px"
                      height="20px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="couch"
                      className="svg-inline--fa fa-couch fa-w-20"
                      role="img"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                      />
                    </svg>
                    <p className="chair" />
                  </div>
                  <p className="body__footer--text">Thường</p>
                </div>
                <div className="body__footer--vip">
                  <div className="vip__chair">
                    <svg
                      width="20px"
                      height="20px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="couch"
                      className="svg-inline--fa fa-couch fa-w-20"
                      role="img"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                      />
                    </svg>
                    <p />
                  </div>
                  <p className="body__footer--text">VIP</p>
                </div>
                <div className="body__footer--selected">
                  <div className="selected__chair">
                    <svg
                      width="20px"
                      height="20px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="couch"
                      className="svg-inline--fa fa-couch fa-w-20"
                      role="img"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                      />
                    </svg>
                    <p />
                  </div>
                  <p className="body__footer--text">Ghế đang chọn</p>
                </div>
                <div className="body__footer--solddOut">
                  <div className="soldOut__chair">
                    <svg
                      width="20px"
                      height="20px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="couch"
                      className="svg-inline--fa fa-couch fa-w-20"
                      role="img"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                      />
                    </svg>
                    <p />
                  </div>
                  <p className="body__footer--text">Ghế đã chọn</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {continueBooking ? null : (
        <div className="body__continue">
          <div className="body__continue--bookingChair">
            <p>
              Ghế:{" "}
              <span>
                {" "}
                {chairListSelected.map((chairSelected, index) => {
                  if (index === 0) {
                    return (
                      <span key={index}>{" " + chairSelected.tenGhe}</span>
                    );
                  } else {
                    return (
                      <span key={index}>{", " + chairSelected.tenGhe}</span>
                    );
                  }
                })}
              </span>
            </p>
          </div>
          <div className="body__continue--button">
            {chairListSelected.length !== 0 ? (
              <button onClick={() => handleContinueBooking(true)}>
                Tiếp tục
              </button>
            ) : (
              <button className="btnDisabled" disabled>
                Tiếp tục
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chair;

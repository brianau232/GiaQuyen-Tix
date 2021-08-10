import React, { useState } from "react";
import "./Control.scss";
import { Avatar, Button } from "@material-ui/core";
import AddUser from "./../AddUser";
import AddMovie from "./../AddMovie";
import UserManagement from "./../UserManagement";
import MovieManagement from "./../MovieManagement/index";

function Control(props) {
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const [page, setPage] = useState("userManage");
  const [showMenu, setShowMenu] = useState(false);

  const handelChangePage = (id) => {
    setPage(id);
  };

  const handleShowIcon = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="control__container">
      <div
        className={showMenu ? "control__row showMenu" : "control__row hideMenu"}
      >
        <div className="control__show--icon" onClick={handleShowIcon}>
          <svg id="color" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
            <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12z" />
            <path d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12z" />
            <path
              d="m12 18.25v-3.25h-5.75c-.689 0-1.25-.561-1.25-1.25v-3.5c0-.689.561-1.25 1.25-1.25h5.75v-3.25c0-.66.795-.999 1.27-.541l6.5 6.25c.147.142.23.337.23.541s-.083.399-.23.541l-6.5 6.25c-.475.456-1.27.12-1.27-.541z"
              fill="#fff"
            />
            <path
              d="m5 12h15c0 .204-.083.399-.23.541l-6.5 6.25c-.15.144-.334.209-.514.209-.385 0-.756-.298-.756-.75v-3.25h-5.75c-.689 0-1.25-.561-1.25-1.25z"
              fill="#dedede"
            />
          </svg>
        </div>
        <div className="control__info--content">
          <div className="control__info--avatar">
            <Avatar>{user.hoTen.slice(0, 1).toUpperCase()}</Avatar>
            <p>{user.taiKhoan}</p>
            <span>Quản trị viên</span>
          </div>
        </div>
        <div className="control__info--title">
          <div className="control__title--icon">
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 26.39 26.39"
            >
              <path
                d="M3.588,24.297c0,0-0.024,0.59,0.553,0.59c0.718,0,6.652-0.008,6.652-0.008l0.01-5.451c0,0-0.094-0.898,0.777-0.898h2.761
              c1.031,0,0.968,0.898,0.968,0.898l-0.012,5.434c0,0,5.628,0,6.512,0c0.732,0,0.699-0.734,0.699-0.734V14.076L13.33,5.913
              l-9.742,8.164C3.588,14.077,3.588,24.297,3.588,24.297z"
              />
              <path d="M0,13.317c0,0,0.826,1.524,2.631,0l10.781-9.121l10.107,9.064c2.088,1.506,2.871,0,2.871,0L13.412,1.504L0,13.317z" />
              <polygon points="23.273,4.175 20.674,4.175 20.685,7.328 23.273,9.525" />
            </svg>
          </div>
          <p>Thông tin dữ liệu</p>
        </div>
        <Button
          className={
            page === "userManage" ? "control__active" : "control__info--item"
          }
          onClick={() => handelChangePage("userManage")}
        >
          <div className="control__item--icon">
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 442 442"
            >
              <path
                d="M105.4,221c0,9.391-7.609,17-17,17h-34c-9.391,0-17-7.609-17-17l0,0c0-9.391,7.609-17,17-17h34
              C97.792,204,105.4,211.609,105.4,221L105.4,221z M105.4,112.2c0-9.391-7.609-17-17-17h-34c-9.391,0-17,7.609-17,17l0,0
              c0,9.391,7.609,17,17,17h34C97.792,129.2,105.4,121.591,105.4,112.2L105.4,112.2z M105.4,329.801c0-9.393-7.609-17-17-17h-34
              c-9.391,0-17,7.607-17,17l0,0c0,9.391,7.609,17,17,17h34C97.792,346.801,105.4,339.191,105.4,329.801L105.4,329.801z M404.6,54.4
              v333.2c0,30.043-24.357,54.4-54.398,54.4h-238c-30.042,0-54.4-24.357-54.4-54.4V360.4h30.6c16.871,0,30.6-13.73,30.6-30.6
              c0-16.871-13.729-30.602-30.6-30.602H57.8v-47.6h30.6c16.871,0,30.6-13.729,30.6-30.6s-13.729-30.6-30.6-30.6H57.8v-47.6h30.6
              c16.871,0,30.6-13.729,30.6-30.6c0-16.871-13.729-30.6-30.6-30.6H57.8V54.4c0-30.042,24.358-54.4,54.4-54.4h238
              C380.242,0,404.6,24.357,404.6,54.4z M188.945,161.255c0,28.968,23.487,52.455,52.455,52.455c28.969,0,52.455-23.487,52.455-52.455
              c0-28.968-23.486-52.456-52.455-52.456C212.433,108.8,188.945,132.287,188.945,161.255z M323,289.482
              c0-32.184-26.098-58.283-58.283-58.283H218.09c-32.191,0-58.29,26.1-58.29,58.283v23.318H323V289.482z"
              />
            </svg>
          </div>
          <p>Quản lý User</p>
        </Button>
        <Button
          className={
            page === "movieManage" ? "control__active" : "control__info--item"
          }
          onClick={() => handelChangePage("movieManage")}
        >
          <div className="control__item--icon">
            <svg x="0px" y="0px" viewBox="0 0 511.816 511.816">
              <path d="M20.949,298.483v160c0,29.419,23.936,53.333,53.333,53.333h384c29.419,0,53.333-23.915,53.333-53.333v-160H20.949z" />

              <polygon points="252.757,48.776 172.927,67.72 239.807,166.131 326.271,146.462 " />

              <polygon points="150.741,72.99 64.703,93.384 130.879,190.878 217.471,171.187 " />

              <path
                d="M511.274,93.086l-18.155-68.864c-4.181-16.747-21.333-27.285-38.251-23.424l-71.68,17.024l68.011,100.267l52.117-11.861
			c2.837-0.64,5.269-2.411,6.763-4.885S511.999,95.902,511.274,93.086z"
              />

              <polygon points="360.981,23.091 275.413,43.4 349.055,141.299 428.863,123.144 " />

              <polygon points="128.447,191.838 94.314,277.15 178.005,277.15 212.138,191.838" />

              <polygon points="235.114,191.838 200.981,277.15 284.671,277.15 318.805,191.838" />

              <path d="M500.949,191.838h-52.501l-34.133,85.333h97.301v-74.667C511.615,196.595,506.858,191.838,500.949,191.838z" />

              <polygon points="341.781,191.838 307.647,277.15 391.317,277.15 425.471,191.838" />

              <path
                d="M42.517,98.675l-17.387,4.117c-8.469,1.92-15.637,7.061-20.181,14.443c-4.544,7.403-5.888,16.107-3.776,24.533
			l19.776,78.165v57.216h50.389l32.021-80.021l5.205-1.173L42.517,98.675z"
              />
            </svg>
          </div>
          <p>Quản lý Movie</p>
        </Button>
        <Button
          className={
            page === "addUser" ? "control__active" : "control__info--item"
          }
          onClick={() => handelChangePage("addUser")}
        >
          <div className="control__item--icon">
            <svg
              enableBackground="new 0 0 503.091 503.091"
              viewBox="0 0 503.091 503.091"
            >
              <path
                id="XMLID_1271_"
                d="m290.113 225.926c11.483 10.797 21.484 23.147 29.949 37.029 21.4-13.409 46.679-21.175 73.742-21.175 11.463 0 22.602 1.402 33.267 4.025-17.147-22.444-37.802-39.061-63.923-51.365-19.586 17.869-45.009 29.44-73.035 31.486z"
              />
              <path
                id="XMLID_1273_"
                d="m254.517 381.066c0-38.878 16.018-74.08 41.793-99.372-14.52-25.166-34.336-44.125-60.078-57.466-21.211 14.602-46.886 23.164-74.527 23.164-27.561 0-53.168-8.512-74.343-23.037-53.632 29.005-87.362 89.369-87.362 159.071v106.928h307.547c-32.28-25.532-53.03-65.031-53.03-109.288z"
              />
              <path
                id="XMLID_1274_"
                d="m293.465 115.632c0 28.223-8.923 54.399-24.091 75.862l.765 4.106c3.647.436 7.332.655 11.024.655 50.596 0 91.759-41.163 91.759-91.759 0-50.597-41.163-91.76-91.759-91.76-10.666 0-21.11 1.83-30.963 5.359 26.562 24.123 43.265 58.916 43.265 97.537z"
              />
              <ellipse
                id="XMLID_1275_"
                cx="161.706"
                cy="115.632"
                rx="101.76"
                ry="101.759"
                transform="matrix(.973 -.23 .23 .973 -22.241 40.246)"
              />
              <path
                id="XMLID_1278_"
                d="m503.091 381.066c0-60.261-49.026-109.287-109.287-109.287s-109.287 49.026-109.287 109.287 49.026 109.287 109.287 109.287c60.261.001 109.287-49.025 109.287-109.287zm-172.942 15v-30h48.654v-48.654h30v48.654h48.654v30h-48.654v48.655h-30v-48.655z"
              />
            </svg>
          </div>
          <p>Thêm tài khoản</p>
        </Button>
        <Button
          className={
            page === "addMovie" ? "control__active" : "control__info--item"
          }
          onClick={() => handelChangePage("addMovie")}
        >
          <div className="control__item--icon">
            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 174.239 174.239">
              <polygon
                points="14.935,26.219 131.662,26.219 131.662,75.18 146.596,75.18 146.596,11.284 0,11.284 0,139.075 73.298,139.075 
		73.298,124.141 14.935,124.141 	"
              />
              <polygon
                points="174.239,120.378 146.596,120.378 146.596,92.735 131.662,92.735 131.662,120.378 104.019,120.378 104.019,135.313 
		131.662,135.313 131.662,162.956 146.596,162.956 146.596,135.313 174.239,135.313 	"
              />
              <rect x="35.679" y="48.903" width="63.536" height="14.935" />
              <rect x="35.679" y="78.996" width="48.485" height="14.935" />
            </svg>
          </div>
          <p>Thêm phim</p>
        </Button>
      </div>

      {page === "addUser" && <AddUser />}
      {page === "addMovie" && <AddMovie />}
      {page === "userManage" && <UserManagement />}
      {page === "movieManage" && <MovieManagement />}
    </div>
  );
}

export default Control;

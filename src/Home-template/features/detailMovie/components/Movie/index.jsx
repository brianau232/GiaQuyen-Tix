import React, { useState, useRef, useEffect } from "react";
import ShowTime from "../LichChieu";
import ThongTin from "../ThongTin";
import DanhGia from "./../DanhGia/index";
import "./Movie.scss";
import { useSelector } from "react-redux";
import ModalVideo from "react-modal-video";
import playVideo from "assets/images/play-video.png";
import { IMG_NEWS } from "Contants";

function Movie() {
  const movie = useSelector((state) => state.movies.movieDetail);
  const [isOpen, setOpen] = useState(false);
  const [unmount, setUnmout] = useState(true);

  const [isActive, setIsActive] = useState("lichChieu");

  const handleActive = (value) => {
    setIsActive(value);
  };

  const showTime = useRef(null);
  const srollToShowTime = () =>
    window.scrollTo({
      top: showTime.current.offsetTop - 80,
      behavior: "smooth",
    });

  useEffect(() => {
    setUnmout(false);
    return () => {
      setUnmout(true);
    };
  }, []);

  return (
    <div className="detailMovie">
      <div className="detailMovie__infoContainer">
        <div className="detailMovie__blur">
          <div className="detailMovie__infoRow">
            <div className="detailMovie__info">
              <div className="detailMovie__info--left ">
                <img src={movie?.hinhAnh} alt="moviePhoto" />
                {!unmount ? (
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={movie?.trailer.substr(-11, 11)}
                    onClose={() => setOpen(false)}
                  />
                ) : null}
                <div className="playVideo">
                  <button onClick={() => setOpen(true)}>
                    <img
                      className="playVideo__image"
                      src={playVideo}
                      alt="playVideo"
                    />
                  </button>
                </div>
              </div>
              <div className="detailMovie__info--middle ">
                <div className="middleContainer">
                  <div className="middleContent">
                    <p className="date">{movie?.ngayKhoiChieu.substr(0, 10)}</p>
                    <div className="movieName">
                      <span className="age">C18</span>
                      <span className="name">{movie?.tenPhim}</span>
                    </div>
                    <p className="time">-10 IMDb -2D/Digital</p>
                  </div>
                  <button onClick={srollToShowTime} className="btn">
                    Mua vé
                  </button>
                </div>
              </div>

              <div className="detailMovie__info--right ">
                <div className="rightContainer">
                  <div className="core">
                    <div className="icon black">
                      <svg
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="-25 -30 590 582"
                        width="140"
                      >
                        <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z" />
                      </svg>
                    </div>
                    <div className="icon green">
                      <svg
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="-25 -30 590 582"
                        width="140"
                      >
                        <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z" />
                      </svg>
                    </div>
                    <p className="circularNumber">8.0</p>
                  </div>
                  <div className="star">
                    <img src={IMG_NEWS.star} alt="" />
                    <img src={IMG_NEWS.star} alt="" />
                    <img src={IMG_NEWS.star} alt="" />
                    <img src={IMG_NEWS.star} alt="" />
                  </div>
                  <p className="content">196 người đánh giá</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailMovie__text showTime" id="showTime">
        <div
          className={
            isActive === "lichChieu" ? "active" : "detailMovie__text--content"
          }
        >
          <p className="textItem" onClick={() => handleActive("lichChieu")}>
            Lịch chiếu
          </p>
        </div>
        <div
          className={
            isActive === "thongTin" ? "active" : "detailMovie__text--content"
          }
        >
          <p className="textItem" onClick={() => handleActive("thongTin")}>
            Thông tin
          </p>
        </div>
        <div
          className={
            isActive === "danhGia" ? "active" : "detailMovie__text--content"
          }
        >
          <p className="textItem" onClick={() => handleActive("danhGia")}>
            Đánh giá
          </p>
        </div>
      </div>
      <div className="detailMovie__LichChieu" ref={showTime}>
        {isActive === "lichChieu" && <ShowTime />}
      </div>
      <div className="detaiMovie__ThongTin">
        {isActive === "thongTin" && <ThongTin />}
      </div>
      <div className="detaiMovie__DanhGia">
        {isActive === "danhGia" && <DanhGia />}
      </div>
    </div>
  );
}
export default Movie;

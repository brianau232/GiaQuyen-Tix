import React, { useEffect, useState } from "react";
import { IMG_NEWS, images } from "../../../../../Contants";
import movieApi from "../../../../../services/movieApi";
import "./ShowTime.scss";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import format from "date-format";
import PageLoading from "components/PageLoading";
function ShowTime() {
  const [movieLogo, setMovieLogo] = useState([]);
  const [movieShowTime, setMovieShowTime] = useState([]);
  const [logoList, setLogoList] = useState(0);
  const [movieList, setMovieList] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const rapChieuimg = {
    bhd: images.logobhd,
    cgv: images.logoCgv,
    galaxy: images.logogalaxycine,
    mega: images.logomega,
    lotte: images.logolotte,
    cinestar: images.logocinestar,
  };

  const fetchMovieLoGoList = async () => {
    const response = await movieApi.fetchMovieLogo();
    setMovieLogo(response.data);
  };

  const fetchMovieShowTime = async () => {
    const response = await movieApi.fetchMovieShowTime();
    setMovieShowTime(response.data);
  };

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      fetchMovieLoGoList();
    }

    return () => {
      unmount = true;
    };
  }, []);

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      fetchMovieShowTime();
      setIsLoading(false);
    }

    return () => {
      unmount = true;
    };
  }, []);

  const handleLogoList = (id) => {
    setLogoList(id);
  };

  const renderLoGoList = () => {
    return movieLogo?.map((item, index) => {
      return (
        <button
          onClick={() => handleLogoList(index)}
          className={
            index === logoList
              ? "showTime__listLogo--button active"
              : "showTime__listLogo--button"
          }
          key={index}
        >
          <img src={item.logo} alt={item.maHeThongRap} />
        </button>
      );
    });
  };

  const handleMovieList = (id) => {
    setMovieList(id);
  };

  const renderCinemaList = () => {
    const cumRap = movieShowTime[logoList];
    const listCumRap = cumRap?.lstCumRap;
    return listCumRap?.map((item, index) => {
      return (
        <button
          className={
            movieList === index
              ? "showTime__listCinema active"
              : "showTime__listCinema"
          }
          key={index}
          onClick={() => handleMovieList(index)}
        >
          {item?.maCumRap.slice(0, 3) === "bhd" && (
            <img src={rapChieuimg.bhd} alt="bhd" />
          )}
          {item?.maCumRap.slice(0, 3) === "cns" && (
            <img src={rapChieuimg.cinestar} alt="cns" />
          )}
          {item?.maCumRap.slice(0, 3) === "cgv" && (
            <img src={rapChieuimg.cgv} alt="cgv" />
          )}
          {item?.maCumRap.slice(0, 3) === "glx" && (
            <img src={rapChieuimg.galaxy} alt="glx" />
          )}
          {item?.maCumRap.slice(0, 3) === "lot" && (
            <img src={rapChieuimg.lotte} alt="lot" />
          )}
          {item?.maCumRap.slice(0, 3) === "meg" && (
            <img src={rapChieuimg.mega} alt="meg" />
          )}
          <div className="showTime__listCinema--info">
            <p className="fristText">
              <span>{item?.tenCumRap}</span>
            </p>
            <p className="secondText">{item?.diaChi}</p>
            <p className="linkText">[Chi tiet]</p>
          </div>
        </button>
      );
    });
  };

  const renderMovieList = () => {
    const cumRap = movieShowTime[logoList];
    const listCumRap = cumRap?.lstCumRap;

    if (listCumRap) {
      const listMovie = listCumRap[movieList];
      return listMovie?.danhSachPhim.map((item, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="listMovie__container">
                <div className="listMovie__item">
                  <img src={item?.hinhAnh} alt={item?.tenPhim} />
                  <div className="listMovie__content">
                    <div className="movieName">
                      <p className="btn">C</p>
                      <span className="name">{item.tenPhim}</span>
                    </div>
                    <span className="time"> - TIX 8.0 - IMDb 0</span>
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="listMovie__showTime">
                <p>2D Digitial</p>
                <div className="showTimeList">
                  <div className="showTime">
                    {item?.lstLichChieuTheoPhim.map((list, index) => {
                      return (
                        <div className="showTime__item" key={index}>
                          <img src={IMG_NEWS.calendar} alt="" />

                          <Link to={`/home/booking/${list.maLichChieu}`}>
                            {format(
                              "yyyy-MM-dd hh:mm",
                              new Date(list.ngayChieuGioChieu)
                            )}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="showTime">
          <div className="showTime__header"></div>
          <div className="showTime__body">
            <div className="showTime__listLogo">{renderLoGoList()}</div>
            <div className="showTime__listCinemaContainer">
              {renderCinemaList()}
            </div>
            <div className="showTime__listMovie">{renderMovieList()}</div>
          </div>
          <div className="showTime__footer"></div>
        </div>
      )}
    </>
  );
}

export default ShowTime;

import React, { useState } from "react";
import format from "date-format";
import "./LichChieu.scss";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import swal from "sweetalert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { theater, IMG_NEWS } from "Contants";

function LichChieu() {
  const movieTime = useSelector((state) => state.movies.movieDetail);
  const [value, setValue] = useState(0);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("loginUser"));

  const handleClick = (id) => {
    setValue(id);
  };

  const handleClickChangePage = (value) => {
    if (user) {
      history.push(`/home/booking/${value}`);
    } else {
      return swal({
        title: "Opps...",
        text: "Bạn cần đăng nhập để thục hiện tác vụ này.",
        icon: "error",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          history.push("/home/log-in");
        } else {
          return;
        }
      });
    }
  };

  const rapChieuimg = {
    bhd: theater.bhd,
    cgv: theater.cgv,
    galaxy: theater.galaxy,
    mega: theater.mega,
    lotte: theater.lotte,
    cinestar: theater.cinestar,
  };

  const renderList = (id) => {
    const heThongRapChieu = movieTime?.heThongRapChieu[value];

    return heThongRapChieu?.cumRapChieu.map((item, index) => {
      return (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="listMovie__container">
              <div className="listMovie__item">
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
                <div className="listMovie__content">
                  <div className="movieName">
                    <span className="name">{item.tenCumRap}</span>
                  </div>
                  <span className="time"> - TIX 8.0 - IMDb 0</span>
                </div>
              </div>
              <div className="listMoive__dropDownIcon"></div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="listMovie__schedule">
              <p>2D Digitial</p>
              <div className="scheduleList">
                <div className="schedule">
                  {item?.lichChieuPhim.map((list, index) => {
                    return (
                      <div className="schedule__item" key={index}>
                        <img src={IMG_NEWS.calendar} alt="" />
                        <button
                          className="schedule__item--btn"
                          onClick={() =>
                            handleClickChangePage(list.maLichChieu)
                          }
                        >
                          {format(
                            "yyyy-MM-dd hh:mm",
                            new Date(list.ngayChieuGioChieu)
                          )}
                        </button>
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
  };

  const renderLogoList = () => {
    return movieTime?.heThongRapChieu.map((item, index) => {
      return (
        <button
          className={
            value === index
              ? "schedule__listLogo--button active"
              : "schedule__listLogo--button"
          }
          key={index}
          onClick={() => handleClick(index)}
        >
          <img src={item.logo} alt={item.maHeThongRap} />
          <p>
            {item.tenHeThongRap === "cgv"
              ? item.tenHeThongRap.toUpperCase()
              : item.tenHeThongRap}
          </p>
        </button>
      );
    });
  };
  return (
    <div className="schedule__container">
      <div className="schedule__body">
        <div className="schedule__listLogo">{renderLogoList()}</div>
        <div className="schedule__listMovie element__fadeIn">
          {renderList()}
        </div>
      </div>
    </div>
  );
}

export default LichChieu;

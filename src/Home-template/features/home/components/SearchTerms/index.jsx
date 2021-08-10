import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./SearchTerm.scss";
import movieApi from "./../../../../../services/movieApi";
import format from "date-format";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function SearchTerm() {
  const movie = useSelector((state) => state.movies.movieList);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const history = useHistory();

  const [movieSelected, setMovieSelected] = useState(null);
  const [movieTime, setMovieTime] = useState(null);
  const [value, setValue] = useState(null);

  const tenCumRap = movieSelected?.lichChieu.map((item, index) => {
    return item.thongTinRap.tenCumRap;
  });

  const cumRap = tenCumRap?.filter((item, index) => {
    return tenCumRap?.indexOf(item) === index;
  });

  const handleChangeMovie = async (e) => {
    const response = await movieApi.fetchMovieInfo(e.target.value);
    setMovieSelected(response.data);
  };

  const handleChangeCinema = (e) => {
    const time = movieSelected?.lichChieu.filter((item, index) => {
      return item.thongTinRap.tenCumRap === e.target.value;
    });
    setMovieTime(time);
  };

  const handleChangeTime = (e) => {
    setValue(e.target.value);
  };

  const handleClickBuyTicket = () => {
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

  return (
    <div className="searchTerm">
      <div className="searchTerm__container">
        <select
          className="searchTerm__movie form-control"
          onChange={handleChangeMovie}
        >
          <option value="0">Phim</option>
          {movie?.map((item, index) => {
            return (
              <option key={index} value={item.maPhim}>
                {item.tenPhim}
              </option>
            );
          })}
        </select>

        <select
          className="searchTerm__room form-control"
          onChange={handleChangeCinema}
        >
          <option value="0">Rạp</option>
          {cumRap?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          className="searchTerm__room form-control"
          onChange={handleChangeTime}
        >
          <option value="0">Thời gian</option>
          {movieTime?.map((item, index) => {
            return (
              <option key={index} value={item.maLichChieu}>
                {format("yyyy-MM-dd hh:mm", new Date(item.ngayChieuGioChieu))}
              </option>
            );
          })}
        </select>
        <div className="searchTerm__button">
          <button
            className={value ? "enable" : "disabled"}
            onClick={handleClickBuyTicket}
          >
            mua vé ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchTerm;

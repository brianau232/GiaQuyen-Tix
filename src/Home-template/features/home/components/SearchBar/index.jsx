import React, { useState } from "react";
import "./Search.scss";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { images } from "./../../../../../Contants";
function SearchBar() {
  const [name, setName] = useState("");
  const movie = useSelector((state) => state.movies.movieList);

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  const filterListMovie = movie?.filter((item) => {
    return item.tenPhim.toLowerCase().includes(name.toLowerCase());
  });

  const renserSearchMovie = () => {
    if (name) {
      return (
        <div className="searchContent">
          <ul className="searchContent__item">
            {filterListMovie?.map((item, index) => {
              return (
                <div className="searchContent__item--container" key={index}>
                  <Link
                    to={`/home/detail/${item.maPhim}`}
                    className="searchContent__item--row"
                  >
                    <div className="searchContent__item--img">
                      <img src={item.hinhAnh} alt={item.name} />
                    </div>
                    <div className="searchContent__item--text">
                      <p>{item.tenPhim}</p>
                      <span>118 phút - 10 IMDB - 2D/Digital</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  const renderErrorImg = () => {
    if (name) {
      return (
        <div className="searchContent__error">
          <div className="searchContent__error--container">
            <img
              src={images.error}
              alt="error"
              className="searchContent__error--img"
            />
            <p className="searchContent__error--content">Không tìm thấy phim</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="search">
      <div className="searchBar">
        <div className="searchBar__icon">
          <SearchIcon />
        </div>
        <InputBase
          className="searchBar__item"
          placeholder="search..."
          onChange={handleOnChange}
          value={name}
        />
      </div>
      {filterListMovie?.length > 0 ? renserSearchMovie() : renderErrorImg()}
    </div>
  );
}

export default SearchBar;

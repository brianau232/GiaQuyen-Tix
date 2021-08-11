import React, { useEffect } from "react";
import { IMG_NEWS } from "../../../../../Contants";
import { useDispatch } from "react-redux";
import { fetchMovieLists } from "../../../../../app/movieSlice";
import Slider from "react-slick";
import "./MovieList.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageLoading from "../../../../../components/PageLoading";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movieList);
  const isloading = useSelector((state) => state.movies.loading);
  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      dispatch(fetchMovieLists());
    }

    return () => {
      unmounted = true;
    };
  }, [dispatch]);

  const renderMovieList = () => {
    return movies?.map((item, index) => {
      return (
        <Link
          to={`/home/detail/${item.maPhim}`}
          className="movieList"
          key={index}
        >
          <Card className="movieItem">
            <Card.Header className="movieItem__link">
              <Card.Img
                className="movieItem__link--img"
                variant="top"
                src={item.hinhAnh ? item.hinhAnh : IMG_NEWS.spiderMan}
                width="200"
                height="300"
              />
              <div className="playVideo"></div>
            </Card.Header>
            <Card.Body>
              <div className="movieItem__body">
                <p>C18</p>
                <Card.Title>{item.tenPhim}</Card.Title>
              </div>
              <button className="movieItem__muaVe">
                <span>MUA VÉ</span>
              </button>
            </Card.Body>
          </Card>
        </Link>
      );
    });
  };

  const renderMovieMobile = () => {
    const movie = movies?.slice(0, 10);
    return movie?.map((item, index) => {
      return (
        <div className="movieListMobile__item">
          <Link to={`/home/detail/${item.maPhim}`}>
            <Card>
              <CardActionArea>
                <CardMedia image={item.hinhAnh} title="Contemplative Reptile" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.tenPhim}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {`${item.moTa.substr(0, 40)}...`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      );
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {isloading ? (
        <PageLoading />
      ) : (
        <>
          <p className="movieTitle">movie selection</p>
          <Slider {...settings}>{renderMovieList()}</Slider>
          <div className="movieListMobile">{renderMovieMobile()}</div>
        </>
      )}
    </>
  );
}

export default MovieList;

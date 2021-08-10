import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchDetailMovie, removeDetailMovie } from "../../../app/movieSlice";
import { useDispatch } from "react-redux";
import Movie from "./components/Movie";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageLoading from "../../../components/PageLoading/index";
import { useParams } from "react-router-dom";
import ScrollToTopButton from "../../../components/ScrollToTopButton";

function MovieDetail() {
  const dispatch = useDispatch();
  const { movieId } = useParams();

  const loading = useSelector((state) => state.movies.loading);
  useEffect(() => {
    if (movieId && movieId !== "") dispatch(fetchDetailMovie(movieId));
    return () => {
      dispatch(removeDetailMovie());
    };
  }, [dispatch, movieId]);

  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <>
          <ScrollToTopButton />
          <Header />
          <Movie />
          <Footer />
        </>
      )}
    </>
  );
}

export default MovieDetail;

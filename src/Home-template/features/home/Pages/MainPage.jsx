import React, { useRef } from "react";
import Carousel from "../components/Carousels";
import Header from "../../../../components/Header";
import Mobile from "../components/Mobile";
import Footer from "../../../../components/Footer";
import MovieList from "../components/MovieList";
import ShowTime from "../components/ShowTime";
import News from "../components/News";
import SearchTerm from "../components/SearchTerms";
import SearchBar from "../components/SearchBar";
import ScrollToTopButton from "../../../../components/ScrollToTopButton";

function MainPage() {
  const lichChieu = useRef(null);
  const cumRap = useRef(null);
  const tinTuc = useRef(null);
  const ungDung = useRef(null);

  const srollToLichChieu = () => {
    window.scrollTo({
      top: lichChieu.current.offsetTop - 60,
      behavior: "smooth",
    });
  };
  const srollToCumRap = () =>
    window.scrollTo({
      top: cumRap.current.offsetTop,
      behavior: "smooth",
    });
  const srollToTinTuc = () =>
    window.scrollTo({
      top: tinTuc.current.offsetTop - 60,
      behavior: "smooth",
    });
  const srollToUngDung = () =>
    window.scrollTo({
      top: ungDung.current.offsetTop - 60,
      behavior: "smooth",
    });

  return (
    <div>
      <ScrollToTopButton />
      <Header
        srollToLichChieu={srollToLichChieu}
        srollToCumRap={srollToCumRap}
        srollToTinTuc={srollToTinTuc}
        srollToUngDung={srollToUngDung}
        lichChieu={lichChieu}
      />
      <Carousel />
      <SearchTerm />
      <SearchBar />
      <div ref={lichChieu}>
        <MovieList />
      </div>
      <div ref={cumRap}>
        <ShowTime />
      </div>
      <div ref={tinTuc}>
        <News />
      </div>
      <div ref={ungDung}>
        <Mobile />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;

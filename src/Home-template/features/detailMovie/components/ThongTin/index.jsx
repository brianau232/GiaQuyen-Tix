import React from "react";
import "./ThongTin.scss";
import { useSelector } from "react-redux";
function ThongTin() {
  const movie = useSelector((state) => state.movies.movieDetail);
  return (
    <div className="infoContainer element__fadeIn">
      <div className="infoRow">
        <div className="info">
          <div className="info__left">
            <ul>
              <li>
                <p>Ngày công chiếu</p>
                <p>{movie?.ngayKhoiChieu.slice(0, 10)}</p>
              </li>
              <li>
                <p>Đạo diễn</p>
                <p>Đạo Diễn 1</p>
              </li>
              <li>
                <p>Diễn viên</p>
                <p>Diễn Viên A, Diễn viên B, Diễn Viên C</p>
              </li>
              <li>
                <p>Thể loại</p>
                <p>Hành Động, Phiêu Lưu, Hấp Dẫn</p>
              </li>
              <li>
                <p>Định dạng</p>
                <p>2D/Digital</p>
              </li>
              <li>
                <p>Quốc Gia SX</p>
                <p>Việt Nam</p>
              </li>
            </ul>
          </div>
          <div className="info__right">
            <p className="info__right--title">Nội dung</p>
            <p className="info__right--content">{movie?.moTa}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThongTin;

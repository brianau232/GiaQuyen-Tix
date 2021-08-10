import React from "react";
import "./BookingProfile.scss";
import format from "date-format";

function BookingProfile(props) {
  const { userData } = props;

  const renderMovieInfo = () => {
    return userData?.thongTinDatVe.map((item, index) => {
      const danhSachGhe = item?.danhSachGhe;
      const danhSachRap = danhSachGhe.map((item) => {
        return item.tenHeThongRap;
      });

      const danhSachPhongVe = danhSachGhe.map((item) => item.tenCumRap);
      return (
        <tr key={index}>
          <td>
            {danhSachRap.filter((list, index) => {
              return danhSachRap.indexOf(list) === index;
            })}
          </td>
          <td>
            {danhSachPhongVe.filter((list, index) => {
              return danhSachPhongVe.indexOf(list) === index;
            })}
          </td>
          <td>{item.tenPhim}</td>
          <td>
            {item?.danhSachGhe.map((list, index) => {
              if (index === 0) {
                return list.tenGhe;
              } else {
                return `, ${list.tenGhe}`;
              }
            })}
          </td>
          <td>{item.giaVe}</td>
          <td>{format("yyyy-MM-dd hh-mm", new Date(item.ngayDat))}</td>
          <td>{item.thoiLuongPhim} phút</td>
        </tr>
      );
    });
  };
  return (
    <div className="bookingProfile element__fadeIn">
      <div className="bookingProfile--container">
        <div className="bookingProfile--title">
          <p>Thông tin đặt vé</p>
        </div>
        <div className="bookingProfile--row">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Rạp</th>
                <th>Phòng</th>
                <th>Tên phim</th>
                <th>Số ghế</th>
                <th>Giá vé</th>
                <th>Ngày đặt</th>
                <th>Thời lượng</th>
              </tr>
            </thead>
            <tbody>{renderMovieInfo()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookingProfile;

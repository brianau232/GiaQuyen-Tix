import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Booking.scss";
import Result from "./component/result";
import Payment from "./component/Payment";
import swal from "sweetalert";
import Chair from "./component/Chair/index";
import BookingPayment from "./component/BookingPayment/index";
import Header from "./component/Header";
import PageLoading from "components/PageLoading";
import movieApi from "services/movieApi";

function Booking() {
  const [listChair, setListChair] = useState();
  const [filmInfo, setFilmInfo] = useState();
  const [voucherValue, setVoucherValue] = useState("");
  const [isVoucher, setIsVoucher] = useState(false);
  const [voucherAlert, setVoucherAlert] = useState(false);
  const [continueBooking, setContinueBooking] = useState(false);
  const { showTimeId } = useParams();
  const [changePage, setChangePage] = useState("chonGhe");
  const [isLoading, setIsLoading] = useState(true);

  const danhSachVe = useSelector((state) => state.movies.chairListSelected);
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const taiKhoanNguoiDung = user.taiKhoan;

  const token = user.accessToken;

  const postChairList = async () => {
    await movieApi.postBookingChair(
      showTimeId,
      danhSachVe,
      taiKhoanNguoiDung,
      token
    );
  };

  const handleContinueBooking = (value) => {
    setContinueBooking(value);
  };

  const handleClickVoucher = (value) => {
    if (
      voucherValue.toUpperCase() === "CELIA" ||
      voucherValue.toUpperCase() === "BRIAN"
    ) {
      setIsVoucher(value);
    } else {
      setVoucherAlert(value);
    }
  };

  const handleTouch = (value) => {
    setVoucherAlert(value);
  };

  const handleChange = (e) => {
    setVoucherValue(e);
  };

  const handleBookingChair = (value) => {
    swal({
      title: "Chú ý!",
      text: "Xác nhận đặt vé, bạn có muốn tiếp tục không?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setChangePage(value);
      }
    });
  };
  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      const fetchListChair = async () => {
        const response = await movieApi.fetchMovieChairList(showTimeId);
        const listChairAPI = response.data;
        setIsLoading(false);

        setFilmInfo(listChairAPI.thongTinPhim);
        setListChair(listChairAPI.danhSachGhe);
      };
      fetchListChair();
    }

    return () => {
      unmount = true;
    };
  }, [showTimeId]);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="booking">
          <div className="booking__listChair">
            <Header
              changePage={changePage}
              continueBooking={continueBooking}
              handleContinueBooking={handleContinueBooking}
            />
            <div className="booking__listChair--body">
              <div className="body__blank" />
              {changePage === "chonGhe" && (
                <Chair
                  filmInfo={filmInfo}
                  listChair={listChair}
                  continueBooking={continueBooking}
                  handleContinueBooking={handleContinueBooking}
                />
              )}
              {changePage === "payment" && (
                <Payment
                  changePage={changePage}
                  setChangePage={setChangePage}
                  postChairList={postChairList}
                />
              )}
              {changePage === "result" && (
                <Result filmInfo={filmInfo} isVoucher={isVoucher} />
              )}
            </div>
          </div>
          <div>
            <BookingPayment
              voucherAlert={voucherAlert}
              handleChange={handleChange}
              handleClickVoucher={handleClickVoucher}
              isVoucher={isVoucher}
              handleTouch={handleTouch}
              filmInfo={filmInfo}
              handleBookingChair={handleBookingChair}
              changePage={changePage}
              continueBooking={continueBooking}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Booking;

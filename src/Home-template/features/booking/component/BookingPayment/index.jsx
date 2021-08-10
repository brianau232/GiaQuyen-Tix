import {
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { Input } from "reactstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./BookingPayment.scss";
import { Alert } from "reactstrap";
import { payment } from "Contants";

function BookingPayment(props) {
  const {
    handleBookingChair,
    changePage,
    continueBooking,
    filmInfo,
    isVoucher,
    handleClickVoucher,
    handleChange,
    voucherAlert,
    handleTouch,
  } = props;

  const [value, setValue] = useState("atm");

  const chairListSelected = useSelector(
    (state) => state.movies.chairListSelected
  );

  const handleChangeChild = (e) => {
    handleChange(e.target.value);
  };

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  let total = chairListSelected.reduce((total, chairSelected, index) => {
    return (total += chairSelected.giaVe);
  }, 0);

  let discount = (total * 80) / 100;

  return (
    <div className={continueBooking ? "done" : "null"}>
      <div
        className={
          changePage === "payment" || changePage === "result"
            ? "booking__payment--disabled"
            : "booking__payment"
        }
      >
        <div className="booking__payment--info">
          <div className="info__total">
            <p>
              {isVoucher
                ? discount.toLocaleString("da-DK")
                : total.toLocaleString("da-DK")}
              đ
            </p>
          </div>
          <div className="info__cinema">
            <div className="info__cinema--movie">
              <span>C18</span>
              <p>{filmInfo ? filmInfo.tenPhim : null}</p>
            </div>
            <p className="info__cinema--theater">
              {filmInfo ? filmInfo.tenCumRap : null}
            </p>
            <p className="info__cinema--date">
              {filmInfo
                ? `${filmInfo.ngayChieu} - ${filmInfo.gioChieu} - ${filmInfo.tenRap}`
                : null}
            </p>
          </div>
          <div className="info__Chair">
            <span className="info__chair--number">
              Ghế:
              {chairListSelected.map((chairSelected, index) => {
                if (index === 0) {
                  return <span key={index}>{" " + chairSelected.tenGhe}</span>;
                } else {
                  return <span key={index}>{", " + chairSelected.tenGhe}</span>;
                }
              })}
            </span>
            <span className="info__chair--total">
              {isVoucher
                ? discount.toLocaleString("da-DK")
                : total.toLocaleString("da-DK")}
              đ
            </span>
          </div>
          <div className="info__promotion">
            <Input
              placeholder="Nhập mã giảm giá"
              type="text"
              autoComplete="current-voucher"
              onChange={handleChangeChild}
              onMouseDown={() => handleTouch(false)}
              disabled={isVoucher || chairListSelected.length === 0}
            />
            {voucherAlert ? (
              <Alert color="danger">
                Mã giảm giá không đúng! Vui lòng nhập lại.
              </Alert>
            ) : null}
            {isVoucher ? (
              <div className="checkVoucher">
                <svg
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 352.62 352.62"
                >
                  <path
                    d="M337.222,22.952c-15.912-8.568-33.66,7.956-44.064,17.748c-23.867,23.256-44.063,50.184-66.708,74.664
		c-25.092,26.928-48.348,53.856-74.052,80.173c-14.688,14.688-30.6,30.6-40.392,48.96c-22.032-21.421-41.004-44.677-65.484-63.648
		c-17.748-13.464-47.124-23.256-46.512,9.18c1.224,42.229,38.556,87.517,66.096,116.28c11.628,12.24,26.928,25.092,44.676,25.704
		c21.42,1.224,43.452-24.48,56.304-38.556c22.645-24.48,41.005-52.021,61.812-77.112c26.928-33.048,54.468-65.485,80.784-99.145
		C326.206,96.392,378.226,44.983,337.222,22.952z M26.937,187.581c-0.612,0-1.224,0-2.448,0.611
		c-2.448-0.611-4.284-1.224-6.732-2.448l0,0C19.593,184.52,22.653,185.132,26.937,187.581z"
                  />
                </svg>
              </div>
            ) : (
              <Button
                variant="contained"
                className="info__promotion--btn"
                onClick={() => handleClickVoucher(true)}
                disabled={chairListSelected.length === 0}
              >
                Áp dụng
              </Button>
            )}
          </div>
          <div className="info__paymentStyle">
            <p>Hình thức thanh toán</p>
            <div className="info__paymentStyle--list">
              {chairListSelected.length !== 0 ? (
                <FormControl>
                  <RadioGroup
                    aria-label="payment"
                    onChange={handleChangeValue}
                    value={value}
                  >
                    <FormControlLabel
                      value="atm"
                      control={<Radio />}
                      label={
                        <div className="list__atm">
                          <img src={payment.atm} alt="ATM" />
                          <span>ATM nội địa</span>
                        </div>
                      }
                    />
                    <FormControlLabel
                      value="masterCard"
                      control={<Radio />}
                      label={
                        <div className="list__mastarCard">
                          <img src={payment.masterCard} alt="Master Card" />
                          <span>Visa, Master, JCB</span>
                        </div>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              ) : (
                <p style={{ color: "red", fontSize: "0.8rem" }}>
                  Vui lòng chọn ghế để hiển thị hình thức thanh toán phù hợp
                </p>
              )}
            </div>
          </div>
          <div className="info__warning">
            <svg height="15px" viewBox="0 0 512 512" width="15px">
              <path
                d="m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0-.378906.011719-.769531.011719-1.160156.011719-68.371094 0-132.660156-26.621094-181.011719-74.980469-48.359375-48.347656-74.988281-112.640625-74.988281-181.019531s26.628906-132.660156 74.988281-181.019531c48.351563-48.351563 112.640625-74.980469 181.011719-74.980469.390625 0 .769531 0 1.160156.0117188.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0"
                fill="#ff771a"
              />
              <path
                d="m512 256c0 68.109375-26.441406 132.210938-74.449219 180.5-47.980469 48.25-111.851562 75.058594-179.871093 75.488281-.167969 0-.351563.011719-.519532 0v-511.9765622c.179688 0 .359375 0 .539063.0078124 68.011719.4414068 131.878906 27.2421878 179.851562 75.4921878 48.007813 48.289062 74.449219 112.386719 74.449219 180.488281zm0 0"
                fill="#ff4a05"
              />
              <path d="m257.265625 107.804688c.417969-.007813-.363281 0 0 0zm0 0" />
              <path
                d="m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375c-10.988281-.320313-22.332031-4.757813-30.058594-12.488282-8.050781-8.058593-12.492187-18.769531-12.492187-30.171874v-114.4375c0-23.261719 19.3125-41.992188 42.550781-42.660157h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0"
                fill="#fff"
              />
              <path d="m257.265625 307.5625c-.363281 0 .363281.007812 0 0zm0 0" />
              <path
                d="m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563c-22.210937-.050781-40.269531-18.140625-40.269531-40.378906 0-22.230469 18.058594-40.320313 40.269531-40.371094h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0"
                fill="#fff"
              />
              <g fill="#ddebf0">
                <path d="m297.640625 361.640625c0 22.269531-18.109375 40.378906-40.378906 40.378906h-.101563v-80.75h.101563c22.269531 0 40.378906 18.109375 40.378906 40.371094zm0 0" />
                <path d="m299.921875 150.460938v114.4375c0 23.523437-19.132813 42.660156-42.652344 42.660156h-.109375v-199.757813h.109375c23.519531 0 42.652344 19.140625 42.652344 42.660157zm0 0" />
              </g>
            </svg>
            <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
            <br />
            <span>
              Mã vé sẽ được gửi qua tin nhắn
              <span className="info__warning--text"> ZMS </span>(tin nhắn Zalo)
              và
              <span className="info__warning--text"> Email </span> đã nhập.
            </span>
          </div>
        </div>
        <div className="booking__payment--book">
          {chairListSelected.length !== 0 ? (
            <Button
              variant="contained"
              className="booking"
              onClick={() => handleBookingChair("payment")}
            >
              Đặt Vé
            </Button>
          ) : (
            <Button variant="contained" className="disabled" disabled>
              Đặt Vé
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingPayment;

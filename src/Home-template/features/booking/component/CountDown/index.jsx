import React, { useState, useEffect } from "react";
import swal from "sweetalert";

function CountDown() {
  let [time, setTime] = useState(300);
  const formatSecond = (s) => {
    let min = Math.floor(s / 60);
    let sec = s % 60;
    if (sec < 10) {
      return `${min}:0${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  };

  const warning = () => {
    swal({
      title: "Opps...",
      text: "Đã hết thời gian giữ ghế. Vui lòng thực hiện việc đặt ghế trong thời hạn 5 phút.",
      icon: "warning",
      button: "Đặt vé",
    }).then(() => {
      window.location.reload(false);
    });
  };

  useEffect(() => {
    const timeOut = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timeOut);
    };
  }, []);
  return <div>{time > 0 ? formatSecond(time) : warning()}</div>;
}

export default CountDown;

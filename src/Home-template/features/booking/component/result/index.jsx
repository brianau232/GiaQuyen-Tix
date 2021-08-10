import { Button } from "@material-ui/core";
import React from "react";
import "./Result.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Result(props) {
  const { filmInfo, isVoucher } = props;
  const userInfo = JSON.parse(localStorage.getItem("loginUser"));
  const chairInfo = useSelector((state) => state.movies.chairListSelected);

  const renderChairSelected = () => {
    return chairInfo.map((chair, index) => {
      return <span className="chair" key={index}>{`${chair.tenGhe}`}</span>;
    });
  };

  let total = chairInfo.reduce((total, chair, index) => {
    return (total += chair.giaVe);
  }, 0);

  let discount = total * 0.8;

  const handleReloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="result__container">
      <div className="result">
        <div className="result__header">
          <p>Đặt vé thành công</p>
        </div>
        <div className="result__body">
          <ul>
            <li className="result__body--content">
              <div className="content__icon">
                <svg
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 186 186"
                >
                  <path
                    d="M186,24.333C186,10.894,175.106,0,161.667,0H24.333C10.894,0,0,10.894,0,24.333v137.333C0,175.106,10.894,186,24.333,186
	                    h137.333C175.106,186,186,175.106,186,161.667V24.333z M92.5,43.142c13.111,0,23.74,10.629,23.74,23.74
	                    c0,13.112-10.629,23.74-23.74,23.74s-23.74-10.629-23.74-23.74C68.76,53.771,79.389,43.142,92.5,43.142z M130.949,153H55.717
	                    c-7.173,0-12.988-5.888-12.988-13.061c0-20.497,12.636-38.106,30.539-45.345c5.457,3.795,12.083,6.025,19.233,6.025
	                    c7.412,0,14.261-2.396,19.827-6.448c18.469,6.962,31.61,24.863,31.61,45.768C143.938,147.112,138.123,153,130.949,153z"
                  />
                </svg>
              </div>
              <div className="content__text">
                <p>
                  Tài khoản: <span>{userInfo.taiKhoan}</span>
                </p>
                <p>
                  Email: <span>{userInfo.email}</span>
                </p>
                <p>
                  Phone: <span>{userInfo.soDT}</span>
                </p>
              </div>
            </li>
            <li className="result__body--content">
              <div className="content__icon">
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 280.027 280.027"
                >
                  <path
                    d="M245.023,0v17.502c0,4.83-3.912,8.751-8.751,8.751h-8.751c-4.839,0-8.751-3.92-8.751-8.751V0H61.255
		v17.502c0,4.83-3.912,8.751-8.751,8.751h-8.751c-4.83,0-8.751-3.92-8.751-8.751V0H17.501v280.027h17.502v-17.502
		c0-4.83,3.92-8.751,8.751-8.751h8.751c4.839,0,8.751,3.92,8.751,8.751v17.502h157.515v-17.502c0-4.83,3.912-8.751,8.751-8.751
		h8.751c4.839,0,8.751,3.92,8.751,8.751v17.502h17.502V0H245.023z M61.255,227.522c0,4.839-3.912,8.751-8.751,8.751h-8.751
		c-4.83,0-8.751-3.912-8.751-8.751V210.02c0-4.839,3.92-8.751,8.751-8.751h8.751c4.839,0,8.751,3.912,8.751,8.751V227.522z
		 M61.255,175.017c0,4.839-3.912,8.751-8.751,8.751h-8.751c-4.83,0-8.751-3.912-8.751-8.751v-17.502c0-4.83,3.92-8.751,8.751-8.751
		h8.751c4.839,0,8.751,3.92,8.751,8.751V175.017z M61.255,122.512c0,4.839-3.912,8.751-8.751,8.751h-8.751
		c-4.83,0-8.751-3.912-8.751-8.751V105.01c0-4.83,3.92-8.751,8.751-8.751h8.751c4.839,0,8.751,3.92,8.751,8.751V122.512z
		 M61.255,70.007c0,4.839-3.912,8.751-8.751,8.751h-8.751c-4.83,0-8.751-3.912-8.751-8.751V52.505c0-4.83,3.92-8.751,8.751-8.751
		h8.751c4.839,0,8.751,3.92,8.751,8.751V70.007z M245.023,227.522c0,4.839-3.912,8.751-8.751,8.751h-8.751
		c-4.839,0-8.751-3.912-8.751-8.751V210.02c0-4.839,3.912-8.751,8.751-8.751h8.751c4.839,0,8.751,3.912,8.751,8.751V227.522z
		 M245.023,175.017c0,4.839-3.912,8.751-8.751,8.751h-8.751c-4.839,0-8.751-3.912-8.751-8.751v-17.502
		c0-4.83,3.912-8.751,8.751-8.751h8.751c4.839,0,8.751,3.92,8.751,8.751V175.017z M245.023,122.512c0,4.839-3.912,8.751-8.751,8.751
		h-8.751c-4.839,0-8.751-3.912-8.751-8.751V105.01c0-4.83,3.912-8.751,8.751-8.751h8.751c4.839,0,8.751,3.92,8.751,8.751V122.512z
		 M245.023,70.007c0,4.839-3.912,8.751-8.751,8.751h-8.751c-4.839,0-8.751-3.912-8.751-8.751V52.505c0-4.83,3.912-8.751,8.751-8.751
		h8.751c4.839,0,8.751,3.92,8.751,8.751V70.007z"
                  />
                  <path
                    d="M192.518,70.016H87.508c-4.83,0-8.751,3.92-8.751,8.751v122.512c0,4.848,3.92,8.751,8.751,8.751
		h105.01c4.839,0,8.751-3.903,8.751-8.751V78.758C201.269,73.936,197.357,70.016,192.518,70.016z M78.757,0v43.754
		c0,4.839,3.92,8.751,8.751,8.751h105.01c4.839,0,8.751-3.912,8.751-8.751V0H78.757z M192.518,227.522H87.508
		c-4.83,0-8.751,3.92-8.751,8.751v43.754h122.512v-43.754C201.269,231.451,197.357,227.522,192.518,227.522z"
                  />
                </svg>
              </div>
              <div className="content__text">
                <p>
                  Tên phim: <span>{filmInfo.tenPhim}</span>
                </p>
              </div>
            </li>
            <li className="result__body--content">
              <div className="content__icon">
                <svg
                  height="512pt"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512pt"
                >
                  <path d="M 511.808594 256.035156 C 511.808594 114.734375 397.257812 0.183594 255.953125 0.183594 C 114.652344 0.183594 0.101562 114.734375 0.101562 256.035156 C 0.101562 397.34375 114.652344 511.890625 255.953125 511.890625 L 511.808594 511.890625 L 511.808594 469.246094 L 397.207031 469.246094 C 468.742188 421.890625 511.777344 341.828125 511.808594 256.035156 Z M 42.746094 256.035156 C 42.746094 138.285156 138.203125 42.828125 255.953125 42.828125 C 373.707031 42.828125 469.167969 138.285156 469.167969 256.035156 C 469.167969 373.789062 373.707031 469.246094 255.953125 469.246094 C 138.257812 469.117188 42.878906 373.734375 42.746094 256.035156 Z M 42.746094 256.035156 " />
                  <path d="M 277.277344 256.035156 C 277.277344 267.8125 267.726562 277.355469 255.953125 277.355469 C 244.179688 277.355469 234.632812 267.8125 234.632812 256.035156 C 234.632812 244.261719 244.179688 234.71875 255.953125 234.71875 C 267.726562 234.71875 277.277344 244.261719 277.277344 256.035156 Z M 277.277344 256.035156 " />
                  <path d="M 255.953125 192.074219 C 291.28125 192.074219 319.917969 163.4375 319.917969 128.109375 C 319.917969 92.785156 291.28125 64.148438 255.953125 64.148438 C 220.628906 64.148438 191.992188 92.785156 191.992188 128.109375 C 192.03125 163.421875 220.644531 192.035156 255.953125 192.074219 Z M 255.953125 106.789062 C 267.726562 106.789062 277.277344 116.335938 277.277344 128.109375 C 277.277344 139.886719 267.726562 149.429688 255.953125 149.429688 C 244.179688 149.429688 234.632812 139.886719 234.632812 128.109375 C 234.644531 116.339844 244.183594 106.800781 255.953125 106.789062 Z M 255.953125 106.789062 " />
                  <path d="M 195.121094 236.269531 C 203.671875 209.929688 194.289062 181.082031 171.886719 164.800781 C 149.480469 148.523438 119.144531 148.519531 96.738281 164.792969 C 74.324219 181.0625 64.9375 209.910156 73.480469 236.25 C 82.019531 262.597656 106.546875 280.449219 134.242188 280.472656 C 161.964844 280.472656 186.535156 262.632812 195.121094 236.269531 Z M 127.695312 236.78125 C 116.496094 233.144531 110.371094 221.117188 114.007812 209.914062 C 117.648438 198.71875 129.671875 192.589844 140.871094 196.226562 C 152.070312 199.867188 158.203125 211.890625 154.5625 223.089844 C 150.914062 234.28125 138.894531 240.402344 127.699219 236.78125 Z M 127.695312 236.78125 " />
                  <path d="M 218.359375 307.785156 C 193.667969 289.851562 159.75 291.855469 137.347656 312.574219 C 114.941406 333.289062 110.292969 366.949219 126.234375 392.964844 C 142.183594 418.980469 174.285156 430.113281 202.914062 419.542969 C 231.542969 408.980469 248.71875 379.664062 243.945312 349.527344 C 241.332031 332.753906 232.121094 317.722656 218.359375 307.785156 Z M 198.011719 372.058594 C 192.035156 380.289062 181.070312 383.148438 171.835938 378.886719 C 162.597656 374.628906 157.65625 364.441406 160.03125 354.546875 C 162.410156 344.65625 171.441406 337.820312 181.605469 338.222656 C 191.769531 338.621094 200.230469 346.148438 201.824219 356.195312 C 202.703125 361.78125 201.332031 367.488281 198.011719 372.0625 Z M 198.011719 372.058594 " />
                  <path d="M 382.894531 321.9375 C 362.132812 293.386719 322.15625 287.066406 293.601562 307.820312 C 265.042969 328.574219 258.710938 368.546875 279.457031 397.109375 C 300.203125 425.671875 340.175781 432.019531 368.746094 411.28125 C 382.5625 401.378906 391.835938 386.355469 394.496094 369.566406 C 397.152344 352.777344 392.976562 335.625 382.894531 321.9375 Z M 343.679688 376.769531 C 334.15625 383.691406 320.820312 381.578125 313.898438 372.050781 C 306.976562 362.523438 309.085938 349.191406 318.617188 342.269531 C 328.144531 335.347656 341.476562 337.457031 348.398438 346.988281 C 355.308594 356.519531 353.195312 369.84375 343.679688 376.769531 Z M 343.679688 376.769531 " />
                  <path d="M 434.613281 245.542969 C 446.355469 222.492188 443.058594 194.640625 426.257812 174.964844 C 409.457031 155.292969 382.460938 147.679688 357.855469 155.671875 C 330.320312 164.621094 312.230469 190.941406 313.746094 219.855469 C 315.257812 248.765625 336 273.054688 364.320312 279.070312 C 392.636719 285.089844 421.46875 271.339844 434.613281 245.542969 Z M 396.617188 226.1875 C 391.195312 236.59375 378.441406 240.746094 367.9375 235.519531 C 360.257812 231.601562 355.691406 223.441406 356.363281 214.847656 C 357.039062 206.25 362.828125 198.90625 371.027344 196.242188 C 379.230469 193.578125 388.230469 196.113281 393.828125 202.671875 C 399.429688 209.230469 400.53125 218.515625 396.613281 226.199219 Z M 396.617188 226.1875 " />
                </svg>
              </div>
              <div className="content__text">
                <p>
                  Rạp: <span>{filmInfo.tenCumRap}</span>
                </p>
                <p>
                  Thời gian:{" "}
                  <span>{`${filmInfo.ngayChieu} - ${filmInfo.gioChieu}`}</span>
                </p>
              </div>
            </li>
            <li className="result__body--content">
              <div className="content__icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="couch"
                  role="img"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                  ></path>
                </svg>
              </div>
              <div className="content__text">
                <p>Ghế đã đặt: {renderChairSelected()}</p>
              </div>
            </li>
            <li className="result__body--content">
              <div className="content__icon">
                <svg
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  width="31.999px"
                  height="31.999px"
                  viewBox="0 0 31.999 31.999"
                >
                  <path
                    d="M31.999,21.768c0-1.705-1.388-3.093-3.092-3.093c-0.074,0-0.146,0.013-0.218,0.017c0.306-0.724,0.474-1.53,0.474-2.415
				c0-2.065-2.64-6.802-4.363-8.368c-0.944,0.203-1.948,0.313-2.989,0.313c-1.074,0-2.104-0.117-3.074-0.332
				c-1.702,1.375-4.683,6.258-4.683,8.388c0,0.359,0.033,0.701,0.092,1.027c-0.514-0.035-1.037-0.055-1.57-0.055
				c-1.379,0-2.707,0.149-3.963,0.424c-0.037-0.457-0.063-0.736-0.063-0.736h-8.19c0,0-0.359,3-0.359,6.697s0.359,6.695,0.359,6.695
				h8.189c0,0,0.072-0.783,0.15-1.894c1.219-0.205,2.467,0.117,3.908,1.013c1.828,1.192,4.08,1.901,6.518,1.901
				c2.472,0,4.595-0.729,6.36-1.955l0.002,0.002c0.021-0.015,0.041-0.03,0.068-0.054c0.5-0.352,0.973-0.741,1.414-1.168
				c0.346-0.354,0.815-0.807,1.518-1.495c2.361-2.32,2.652-2.779,2.652-2.779s-0.005,0-0.009,0
				C31.667,23.348,31.999,22.598,31.999,21.768z M19.831,13.72c0.076-0.184,0.185-0.348,0.319-0.49
				c0.14-0.145,0.302-0.264,0.488-0.357c0.188-0.096,0.391-0.158,0.612-0.191v-0.537h1.138v0.619
				c0.168,0.047,0.319,0.113,0.455,0.193v-0.242h1.139v1.705h-1.146c-0.092-0.102-0.183-0.193-0.269-0.271
				c-0.088-0.078-0.18-0.145-0.276-0.195c-0.099-0.05-0.203-0.09-0.319-0.117c-0.117-0.027-0.252-0.041-0.41-0.041
				c-0.228,0-0.401,0.055-0.524,0.162c-0.121,0.109-0.183,0.225-0.183,0.35c0,0.352,0.379,0.584,1.14,0.699
				c0.471,0.07,0.846,0.186,1.125,0.344c0.276,0.16,0.489,0.333,0.637,0.521c0.146,0.186,0.24,0.371,0.281,0.553
				c0.041,0.183,0.062,0.328,0.062,0.441c0,0.217-0.043,0.42-0.131,0.604c-0.087,0.188-0.205,0.354-0.357,0.492
				c-0.149,0.141-0.332,0.254-0.538,0.342c-0.209,0.086-0.437,0.137-0.681,0.154v0.512h-1.138v-0.666
				c-0.062-0.027-0.116-0.053-0.176-0.078c-0.058-0.021-0.11-0.049-0.166-0.076v0.25h-1.138v-1.705h1.138
				c0.099,0.109,0.192,0.201,0.289,0.281c0.094,0.078,0.19,0.145,0.293,0.193c0.101,0.053,0.211,0.09,0.332,0.115
				c0.123,0.022,0.262,0.034,0.42,0.034c0.205,0,0.375-0.041,0.512-0.125c0.136-0.084,0.203-0.192,0.203-0.329
				c0-0.113-0.037-0.212-0.106-0.298c-0.069-0.083-0.16-0.153-0.271-0.215c-0.11-0.059-0.231-0.106-0.364-0.141
				c-0.134-0.035-0.265-0.064-0.396-0.086c-0.461-0.07-0.828-0.181-1.104-0.326c-0.275-0.146-0.488-0.305-0.638-0.479
				c-0.147-0.174-0.248-0.352-0.293-0.533c-0.047-0.18-0.069-0.342-0.069-0.482C19.716,14.101,19.755,13.905,19.831,13.72z
				 M30.12,22.979c-0.414,0.41-2.164,2.215-2.64,2.681c-1.228,1.205-1.801,1.77-2.069,2.082l-0.007-0.005
				c-0.188,0.169-0.385,0.32-0.586,0.468c-1.584,1.071-3.557,1.713-5.694,1.713c-2.158,0-4.146-0.65-5.736-1.738h-0.01
				c-1.377-0.838-2.99-1.354-4.586-1.197c0.064-1.102,0.115-2.309,0.115-3.346c0-1.443-0.1-3.211-0.191-4.57
				c1.213-0.273,2.51-0.426,3.857-0.426c4.117,0,7.76,1.361,9.991,3.494c0.263,0.293,0.429,0.678,0.429,1.102
				c0,0.914-0.744,1.658-1.658,1.658c-0.032,0-0.065-0.01-0.103-0.012l-0.004,0.018c-0.853-0.029-2.188-0.387-4.442-1.25
				l-0.512,1.344c2.383,0.906,3.953,1.316,5.066,1.344v-0.01c1.395-0.002,2.572-0.934,2.955-2.201v0.002
				c0.482-0.801,2.287-2.469,3.312-3.381v0.002c0.012-0.014,0.021-0.021,0.029-0.029c0.189-0.168,0.354-0.312,0.471-0.413
				c0.217-0.138,0.441-0.195,0.799-0.195c0.912,0,1.656,0.744,1.656,1.658C30.564,22.227,30.361,22.657,30.12,22.979z"
                  />
                  <path
                    d="M19.128,6.874c0,0,1.39,0.33,2.752,0.33c1.361,0,2.257-0.193,2.257-0.193c0.791-0.389,2.569-4.49,1.526-5.936
				c-1.166-1.613-3.115,1.893-4.015,1.533c-0.896-0.359-2.808-2.229-4.069-1.467C16.483,1.804,18.266,6.233,19.128,6.874z"
                  />
                </svg>
              </div>
              <div className="content__text">
                <p>
                  Tổng tiền:{" "}
                  {isVoucher
                    ? discount.toLocaleString("da-DK")
                    : total.toLocaleString("da-DK")}
                  đ
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="result__footer">
          <Link to="/home" className="link">
            Trang chủ
          </Link>
          <Button onClick={handleReloadPage}>Đặt vé mới</Button>
        </div>
      </div>
    </div>
  );
}

export default Result;

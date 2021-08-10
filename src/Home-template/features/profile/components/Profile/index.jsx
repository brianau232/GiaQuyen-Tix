import React from "react";
import "./Profile.scss";

function Profile(props) {
  const { userData } = props;
  return (
    <div className="body__right element__fadeIn">
      <div className="body__right--container">
        <div className="body__right--title">
          <p>Thông tin tài khoản</p>
        </div>
        <div className="body__right--content">
          <ul>
            <li className="content__item">
              <div className="content__item--icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="id-card"
                  viewBox="0 0 576 512"
                >
                  <path d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"></path>
                </svg>
              </div>
              <div className="content__item--text">
                <h2>
                  Tên khách hàng: <span>{userData?.hoTen}</span>
                </h2>
                <p>
                  Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị
                  trên website. Bạn có thể thay đổi ở phần thay dổi thông tin cá
                  nhân
                </p>
              </div>
            </li>
            <li className="content__item">
              <div className="content__item--icon">
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
              <div className="content__item--text">
                <h2>
                  Tài khoản: <span>{userData?.taiKhoan}</span>
                </h2>
                <p className="tk">Tài khoản (username) để đăng nhập</p>
              </div>
            </li>
            <li className="content__item">
              <div className="content__item--icon">
                <svg
                  id="bold"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                </svg>
              </div>
              <div className="content__item--text">
                <h2>Mật khẩu</h2>
                <p className="text">
                  Mật khẩu để đăng nhập (cần được thiết lập bởi chữ cái hoa,
                  thường, số, ký tự đặt biệt để tăng tính bảo mật)
                </p>
              </div>
            </li>
            <li className="content__item">
              <div className="content__item--icon">
                <svg
                  className="icon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="mobile-alt"
                  viewBox="0 0 320 512"
                >
                  <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                </svg>
              </div>
              <div className="content__item--text">
                <h2>
                  Số điện thoại: <span>{userData?.soDT}</span>
                </h2>
                <p>
                  Số điện thoại dùng để đăng kí tài khoản. Thông tin này có thể
                  được dùng để xác minh bạn là chủ sở hữu tài khoản nhằm thiết
                  lập lại mật khẩu
                </p>
              </div>
            </li>
            <li className="content__item">
              <div className="content__item--icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </div>
              <div className="content__item--text">
                <h2>
                  Email: <span>{userData?.email}</span>
                </h2>
                <p>
                  Email có thể được sử dụng để thay đổi mật khẩu khi không có
                  công cụ bảo mật nào khác được bật. Cũng như nhận các tin tức
                  hoạt động của tài khoản.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;

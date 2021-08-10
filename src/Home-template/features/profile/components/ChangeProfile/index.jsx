import React from "react";
import "./ChangeProfile.scss";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import swal from "sweetalert";
import userApi from "services/userApi";
import { validationSchema } from "services/userApi";

function ChangeProfile(props) {
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  const { userData } = props;

  const initialValues = {
    taiKhoan: userData.taiKhoan,
    email: userData.email,
    soDT: userData.soDT,
    maNhom: userData.maNhom,
    maLoaiNguoiDung: "KhachHang",
    hoTen: userData.hoTen,
    matKhau: userData.matKhau,
  };

  const onSubmit = async (values) => {
    const response = await userApi.changeUserInfo(
      values,
      loginUser.accessToken
    );
    if (response.data) {
      return swal({
        title: "Thay đổi thông tin tài khoản thành công!",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleChange, handleSubmit, handleBlur, isValid, values } = formik;

  return (
    <div>
      <div className="ChangeProfile element__fadeIn">
        <div className="ChangeProfile--container">
          <div className="ChangeProfile--title">
            <p>Thay đổi thông tin cá nhân</p>
          </div>
          <div className="ChangeProfile--row">
            <div className="ChangeProfile--content">
              <form onSubmit={handleSubmit}>
                <ul>
                  <li className="content__item">
                    <input
                      value={values.taiKhoan}
                      id="taiKhoan"
                      name="taiKhoan"
                      type="text"
                      className="form-control"
                      disabled
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="content__item">
                    <input
                      value={values.matKhau}
                      id="matKhau"
                      name="matKhau"
                      type="password"
                      className="form-control"
                      disabled
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="content__item">
                    <input
                      defaultValue={values.hoTen}
                      id="hoTen"
                      name="hoTen"
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="content__item">
                    <input
                      defaultValue={values.soDT}
                      id="soDT"
                      name="soDT"
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="content__item">
                    <input
                      defaultValue={values.email}
                      id="email"
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                </ul>

                <div className="changebtn">
                  <Button
                    type="submit"
                    disabled={
                      !isValid ||
                      (values.hoTen === userData.hoTen &&
                        values.email === userData.email &&
                        values.soDT === userData.soDT) ||
                      values.soDT.length < 10
                    }
                  >
                    Thay đổi
                  </Button>
                </div>
              </form>
            </div>
            <div className="ChangeProfile--warning">
              <div className="warning__text">
                <p>Lưu ý:</p>
                <ul>
                  <li>
                    <p>
                      Chỉ thay đổi những thông tin cơ bản ngoài tên tài khoản và
                      mật khẩu.
                    </p>
                  </li>
                  <li>
                    <p>
                      Số điện thoại và Email phải chính xác để liên hệ khi cần
                      thiết.
                    </p>
                  </li>
                  <li>
                    <p>Email phải đúng định dạng abc@xxx.com.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfile;

import React from "react";
import "./ChangePassword.scss";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import swal from "sweetalert";
import userApi from "services/userApi";

function ChangePassword(props) {
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  const { userData } = props;
  const newUserData = {
    taiKhoan: userData?.taiKhoan,
    email: userData?.email,
    soDT: userData?.soDT,
    maNhom: userData?.maNhom,
    maLoaiNguoiDung: "KhachHang",
    hoTen: userData?.hoTen,
    matKhau: "",
  };

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const onSubmit = async (values) => {
    console.log({
      ...newUserData,
      matKhau: values.confirmPassword,
    });
    const response = await userApi.changeUserInfo(
      {
        ...newUserData,
        matKhau: values.confirmPassword,
      },
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

  const validate = (values) => {
    const errors = {};

    if (values.currentPassword !== userData.matKhau) {
      errors.currentPassword = "- Mật khẩu hiện tại không chính xác.";
    }

    if (
      values.newPassword.length < 8 ||
      values.newPassword === values.currentPassword
    ) {
      errors.newPassword = "- Mật khẩu mới không hợp lệ.";
    }

    if (values.confirmPassword !== values.newPassword) {
      errors.confirmPassword = "- Mật khẩu xác nhận chưa đúng.";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    isValid,
    errors,
    touched,
    values,
  } = formik;

  return (
    <div className="ChangePassword element__fadeIn">
      <div className="ChangePassword--container">
        <div className="ChangePassword--title">
          <p>Thay đổi mật khẩu</p>
        </div>
        <div className="ChangePassword--row">
          <div className="ChangePassword--content">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="content__item">
                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu hiện tại"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </li>
                <li className="content__item">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu mới"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </li>
                <li className="content__item">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Xác nhận mật khẩu mới"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </li>
                <li>
                  {errors.currentPassword ? (
                    <p className="errorMeg">{errors.currentPassword}</p>
                  ) : null}
                  {errors.newPassword && touched.newPassword ? (
                    <p className="errorMeg">{errors.newPassword}</p>
                  ) : null}
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p className="errorMeg">{errors.confirmPassword}</p>
                  ) : null}
                </li>
              </ul>

              <div className="changebtn">
                <Button
                  type="submit"
                  disabled={!isValid || values.newPassword === ""}
                >
                  Thay đổi
                </Button>
              </div>
            </form>
          </div>
          <div className="ChangePassword--warning">
            <div className="warning__text">
              <ul>
                <li>
                  <p>Gợi ý: Sử dụng ít nhất 8 ký tự</p>
                </li>
                <li>
                  <p>
                    Mật khẩu nên chứa chữ cái hoa, thường, số và ký tự đặc biệt
                  </p>
                </li>
                <li>
                  <p>Không nên sử dụng ngày tháng năm sinh làm mật khẩu</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;

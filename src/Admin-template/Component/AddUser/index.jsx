import React from "react";
import "./AddUser.scss";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import adminApi from "../../../services/adminApi";
import swal from "sweetalert";
import * as Yup from "yup";

function AddUser() {
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  const initialValues = {
    taiKhoan: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "",
    hoTen: "",
    matKhau: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    const response = await adminApi.addUser(values, loginUser.accessToken);
    if (!response) {
      return swal({
        title: "Email hoặc Tài Khoản đã tồn tại.",
        icon: "error",
      });
    } else {
      return swal({
        title: "Thêm tài khoản thành công!",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    }
  };

  const validationSchema = Yup.object().shape({
    taiKhoan: Yup.string().required("This field is required."),
    matKhau: Yup.string().required("This field is required."),
    hoTen: Yup.string().required("This field is required."),
    email: Yup.string()
      .required("This field is required.")
      .email("Invalid Email Format"),
    soDt: Yup.string()
      .matches(/^[0-9]+$/)
      .required("This field is required.")
      .min(6),
    maLoaiNguoiDung: Yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleChange, handleSubmit, handleBlur, isValid, values, errors } =
    formik;

  return (
    <div className="addUserBox">
      <div className="addUser element__fadeIn">
        <div className="addUser__container">
          <div className="addUser__title">
            <p>Thay đổi thông tin cá nhân</p>
          </div>
          <div className="addUser__row">
            <div className="addUser__content">
              <form onSubmit={handleSubmit}>
                <ul>
                  <li className="addUser__content--item">
                    <input
                      value={values.taiKhoan}
                      id="taiKhoan"
                      name="taiKhoan"
                      type="text"
                      placeholder="Tài khoản"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="addUser__mes">{errors.taiKhoan}</p>
                  </li>
                  <li className="addUser__content--item">
                    <input
                      value={values.matKhau}
                      id="matKhau"
                      name="matKhau"
                      type="password"
                      placeholder="Mật khẩu"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="addUser__mes">{errors.matKhau}</p>
                  </li>
                  <li className="addUser__content--item">
                    <input
                      value={values.hoTen}
                      id="hoTen"
                      name="hoTen"
                      type="text"
                      className="form-control"
                      placeholder="Họ tên"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="addUser__mes">{errors.hoTen}</p>
                  </li>
                  <li className="addUser__content--item">
                    <input
                      value={values.soDt}
                      id="soDt"
                      name="soDt"
                      type="text"
                      className="form-control"
                      placeholder="Điện thoại"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="addUser__mes">{errors.soDt}</p>
                  </li>
                  <li className="addUser__content--item">
                    <input
                      value={values.email}
                      id="email"
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="addUser__mes">{errors.email}</p>
                  </li>
                  <li className="addUser__content--item">
                    <select
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="maLoaiNguoiDung"
                      id="maLoaiNguoiDung"
                    >
                      <option value="0">Loại người dùng</option>
                      <option value="KhachHang">Khách hàng</option>
                      <option value="QuanTri">Quản trị</option>
                    </select>
                    <p className="addUser__mes">{errors.maLoaiNguoiDung}</p>
                  </li>
                </ul>
                <div className="addUser__changebtn">
                  <Button
                    type="submit"
                    disabled={!isValid || values.hoTen === ""}
                  >
                    Thêm
                  </Button>
                </div>
              </form>
            </div>
            <div className="addUser__warning">
              <div className="addUser__warning--text">
                <p className="warning">Lưu ý:</p>
                <ul>
                  <li>
                    <p>
                      Độ dài mật khẩu ít nhất 8 ký tự, không nên trùng với ngày
                      tháng năm sinh
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

export default AddUser;

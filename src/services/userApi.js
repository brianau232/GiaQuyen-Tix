import axios from "axios";
import * as Yup from "yup";
import { API_URL } from "../Contants";

export const validationSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("This field is required."),
  matKhau: Yup.string().required("This field is required.").min(8),
  hoTen: Yup.string().required("This field is required."),
  email: Yup.string()
    .required("This field is required.")
    .email("Invalid Email Format"),
  soDT: Yup.string()
    .matches(/^[0-9]+$/)
    .required("This field is required.")
    .min(8),
  maNhom: Yup.string().required("This field is required."),
  maLoaiNguoiDung: Yup.string().required("This field is required"),
});

const userApi = {
  signUp(data) {
    return axios({
      method: "POST",
      url: `${API_URL}/QuanLyNguoiDung/DangKy`,
      data,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchUserData(data) {
    return axios({
      method: "POST",
      url: `${API_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      data,
    }).catch((error) => {
      console.log(error);
    });
  },
  signIn(user) {
    return axios({
      method: "POST",
      url: `${API_URL}/QuanLyNguoiDung/DangNhap`,
      data: user,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  changeUserInfo(user, accessToken) {
    return axios({
      method: "PUT",
      url: `${API_URL}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).catch((error) => {
      console.log(error);
    });
  },
};

export default userApi;

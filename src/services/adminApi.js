import axios from "axios";
import { API_URL } from "../Contants";

const adminApi = {
  fetchUserList() {
    return axios({
      method: "GET",
      url: `${API_URL}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchMovieData() {
    return axios({
      method: "GET",
      url: `${API_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  addUser(user, accessToken) {
    return axios({
      method: "POST",
      url: `${API_URL}/QuanLyNguoiDung/ThemNguoiDung`,
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).catch((error) => {
      console.log(error);
    });
  },
};

export default adminApi;

import axios from "axios";
import { API_URL } from "../Contants";
const movieApi = {
  fetchMovieList() {
    return axios({
      method: "GET",
      url: `${API_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchMovieDetail(id) {
    return axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchMovieChairList(id) {
    return axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchMovieLogo() {
    return axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchMovieShowTime() {
    return axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchMovieInfo(id) {
    return axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  fetchMovieTimeInfo() {
    return axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
      data: null,
    }).catch((error) => {
      console.log(error);
    });
  },
  postBookingChair(maLichChieu, danhSachVe, taiKhoanNguoiDung, token) {
    return axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung: `${taiKhoanNguoiDung}`,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((error) => {
      console.log(error);
    });
  },
};

export default movieApi;

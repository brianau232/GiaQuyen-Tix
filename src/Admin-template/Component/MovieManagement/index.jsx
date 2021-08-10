import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import adminApi from "../../../services/adminApi";
import "./MovieManagement.scss";
import PageLoading from "components/PageLoading";

function MovieManagement() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieDataList = async () => {
    const response = await adminApi.fetchMovieData();
    setMovieList(response.data);
  };

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      fetchMovieDataList();
      setIsLoading(false);
    }
    return () => {
      unmount = true;
    };
  }, []);

  const columns = [
    {
      title: "Tên phim",
      field: "tenPhim",
    },
    {
      title: "Bí danh ",
      field: "biDanh",
    },
    {
      title: "Hình ảnh",
      field: "hinhAnh",
      render: (rowData) => <img src={rowData.hinhAnh} alt="hinhAnh"></img>,
    },
    {
      title: "Mô tả",
      field: "moTa",
    },
    {
      title: "Ngày khỏi chiếu",
      field: "ngayKhoiChieu",
    },
    {
      title: "Đánh giá",
      field: "danhGia",
    },
  ];
  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="userManagement element__fadeIn">
          <MaterialTable
            style={{
              width: "95%",
              margin: "0 auto",
              maxHeight: "600px",
              overflow: "auto",
            }}
            title="Quản lý người dùng"
            columns={columns}
            data={movieList}
            options={{
              actionsColumnIndex: -1,
              addRowPosition: "first",
              maxBodyHeight: "355px",
            }}
          />
        </div>
      )}
    </>
  );
}

export default MovieManagement;

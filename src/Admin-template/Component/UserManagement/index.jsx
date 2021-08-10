import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./UserManagement.scss";
import adminApi from "../../../services/adminApi";
import swal from "sweetalert";
import PageLoading from "./../../../components/PageLoading/index";

function UserManagement() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));

  const fetchUserDataList = async () => {
    const response = await adminApi.fetchUserList();
    setUser(response.data);
  };

  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      fetchUserDataList();
      setIsLoading(false);
    }
    return () => {
      unmount = true;
    };
  }, []);

  const columns = [
    {
      title: "Tài khoản",
      field: "taiKhoan",
      validate: (rowData) => {
        if (rowData.taiKhoan === undefined || rowData.taiKhoan === "") {
          return "Required";
        }
        if (rowData.taiKhoan.length < 4) {
          return "Account name should at least 4 chars";
        }
        return true;
      },
      editable: false,
    },
    {
      title: "Mật khẩu ",
      field: "matKhau",
      validate: (rowData) => {
        if (rowData.matKhau === undefined || rowData.matKhau === "") {
          return "Required";
        }
        if (rowData.matKhau.length < 6) {
          return "Password should at least 8 chars";
        }
        return true;
      },
      editable: false,
    },
    {
      title: "Họ tên",
      field: "hoTen",
      validate: (rowData) => {
        if (rowData.hoTen === undefined || rowData.hoTen === "") {
          return "Required";
        }
        if (rowData.hoTen.length < 4) {
          return "Name should at least 4 chars";
        }
        return true;
      },
    },
    {
      title: "Email",
      field: "email",
      validate: (rowData) => {
        if (rowData.email === undefined || rowData.email === "") {
          return "Required";
        }
        if (!rowData.email.includes("@" && ".")) {
          return "Enter valid email address";
        }
        return true;
      },
    },
    {
      title: "Điện thoại",
      field: "soDt",
      validate: (rowData) => {
        if (rowData.soDt === undefined || rowData.soDt === "") {
          return "Required";
        }
        return true;
      },
    },
    {
      title: "Người dùng",
      field: "maLoaiNguoiDung",
      lookup: { KhachHang: "KhachHang", QuanTri: "QuanTri" },

      validate: (rowData) => {
        if (
          rowData.maLoaiNguoiDung === undefined ||
          rowData.maLoaiNguoiDung === ""
        ) {
          return "Required";
        }
        return true;
      },
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
            data={user}
            editable={{
              onRowDelete: async (selectedRow) =>
                new Promise((resolve, reject) => {
                  let axios = require("axios");
                  axios({
                    method: "DELETE",
                    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${selectedRow.taiKhoan}`,
                    data: null,
                    headers: {
                      Authorization: `Bearer ${loginUser.accessToken}`,
                    },
                  })
                    .then((res) => {
                      if (res) {
                        return swal({
                          title: "Xóa tài khoản thành công.",
                          icon: "success",
                        });
                      }
                    })
                    .catch((error) => {
                      if (error) {
                        return swal({
                          title: "Tài khoản này đã đặt vé, không thể xóa.",
                          icon: "error",
                        });
                        // .then(() => {
                        //   window.location.reload();
                        // });
                      }
                    });
                  const index = selectedRow.tableData.id;
                  const newRows = [...user];
                  newRows.splice(index, 1);
                  setUser(newRows);
                  resolve();
                }),
              onRowUpdate: (updateRow, oldRow) =>
                new Promise((resolve, reject) => {
                  updateRow.maNhom = "GP01";
                  let axios = require("axios");
                  axios({
                    method: "PUT",
                    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                    data: updateRow,
                    headers: {
                      Authorization: `Bearer ${loginUser.accessToken}`,
                    },
                  }).then((res) => {
                    if (res) {
                      return swal({
                        title: "Thay đổi thông tin thành công.",
                        icon: "success",
                      });
                      // .then(() => {
                      //   window.location.reload();
                      // });
                    }
                  });
                  const index = oldRow.tableData.id;
                  const updateRows = [...user];
                  updateRows[index] = updateRow;
                  setUser(updateRows);
                  resolve();
                }),
            }}
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

export default UserManagement;

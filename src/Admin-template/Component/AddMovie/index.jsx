import React from "react";
import "./AddMovie.scss";
import { Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddMovie() {
  const initialValues = {
    tenPhim: "",
    biDanh: "",
    hinhAnh: "",
    trailer: "",
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: "",
    danhGia: "10",
  };

  const validationSchema = Yup.object().shape({
    tenPhim: Yup.string().required("This field is required."),
    biDanh: Yup.string().required("This field is required.").min(8),
    hinhAnh: Yup.string().required("This field is required."),
    trailer: Yup.string().required("This field is required."),
    moTa: Yup.string().required("This field is required.").min(8),
    ngayKhoiChieu: Yup.date().required("Required"),
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleChange, handleSubmit, handleBlur, values } = formik;
  return (
    <div className="addMovieBox">
      <div className="addMovie element__fadeIn">
        <div className="addMovie__container">
          <div className="addMovie__title">
            <p>Thêm phim</p>
          </div>
          <div className="addMovie__row">
            <div className="addMovie__content">
              <form onSubmit={handleSubmit}>
                <ul>
                  <li className="addMovie__content--item">
                    <input
                      value={values.tenPhim}
                      id="tenPhim"
                      name="tenPhim"
                      type="text"
                      placeholder="Tên phim"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="addMovie__content--item">
                    <input
                      value={values.biDanh}
                      id="biDanh"
                      name="biDanh"
                      type="text"
                      placeholder="Bí danh"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="addMovie__content--item">
                    <input
                      defaultValue={values.hinhAnh}
                      id="hinhAnh"
                      name="hinhAnh"
                      type="file"
                      className="form-control"
                      placeholder="Hình ảnh"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="addMovie__content--item">
                    <input
                      defaultValue={values.moTa}
                      id="moTa"
                      name="moTa"
                      type="text"
                      className="form-control"
                      placeholder="Mô tả"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="addMovie__content--item">
                    <input
                      defaultValue={values.trailer}
                      id="trailer"
                      name="trailer"
                      type="text"
                      className="form-control"
                      placeholder="Link trailer"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </li>
                  <li className="addMovie__content--item">
                    <form className="addMovie__content--date" noValidate>
                      <input
                        defaultValue={values.ngayKhoiChieu}
                        id="ngayKhoiChieu"
                        name="ngayKhoiChieu"
                        type="text"
                        className="form-control"
                        placeholder="Ngày khởi chiếu"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </form>
                  </li>
                </ul>

                <div className="addMovie__changebtn">
                  <Button type="submit">Thêm Phim</Button>
                </div>
              </form>
            </div>
            <div className="addMovie__warning">
              <div className="addMovie__warning--text">
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

export default AddMovie;

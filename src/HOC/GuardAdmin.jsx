import { Redirect } from "react-router-dom";
function GuardAdmin(props) {
  let user = {};
  if (localStorage.getItem("loginUser")) {
    user = JSON.parse(localStorage.getItem("loginUser"));
  }
  if (user.maLoaiNguoiDung === "QuanTri") {
    return props.children;
  } else {
    return <Redirect to="/home" />;
  }
}

export default GuardAdmin;

import React, { useState } from "react";
import Profile from "../Profile";
import ChangeProfile from "../ChangeProfile";
import ChangePassword from "../ChangePassword";
import "./UserProfile.scss";
function UserProfile(props) {
  const { onSubmit, userData } = props;

  const [mainPageChange, setMainPageChange] = useState("userProfile");

  const handleChangeMainPage = (value) => {
    setMainPageChange(value);
  };

  return (
    <div className="userProfile element__fadeIn">
      <div className="userProfile__body">
        <div className="userProfile__body--container row">
          <div className="body__left col-lg-4">
            <ul>
              <li
                className={
                  mainPageChange === "userProfile"
                    ? "isActive"
                    : "body__left--item"
                }
                onClick={() => handleChangeMainPage("userProfile")}
              >
                <div className="left__icon">
                  <svg
                    id="Capa_1"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <circle cx="256" cy="119.631" r="87" />
                      <circle cx="432" cy="151.63" r="55" />
                      <circle cx="80" cy="151.63" r="55" />
                      <path d="m134.19 256.021c-21.65-17.738-41.257-15.39-66.29-15.39-37.44 0-67.9 30.28-67.9 67.49v109.21c0 16.16 13.19 29.3 29.41 29.3 70.026 0 61.59 1.267 61.59-3.02 0-77.386-9.166-134.137 43.19-187.59z" />
                      <path d="m279.81 241.03c-43.724-3.647-81.729.042-114.51 27.1-54.857 43.94-44.3 103.103-44.3 175.48 0 19.149 15.58 35.02 35.02 35.02 211.082 0 219.483 6.809 232-20.91 4.105-9.374 2.98-6.395 2.98-96.07 0-71.226-61.673-120.62-111.19-120.62z" />
                      <path d="m444.1 240.63c-25.17 0-44.669-2.324-66.29 15.39 51.965 53.056 43.19 105.935 43.19 187.59 0 4.314-7.003 3.02 60.54 3.02 16.8 0 30.46-13.61 30.46-30.34v-108.17c0-37.21-30.46-67.49-67.9-67.49z" />
                    </g>
                  </svg>
                </div>
                <p>Thông tin tài khoản</p>
              </li>
              <li
                className={
                  mainPageChange === "changePassword"
                    ? "isActive"
                    : "body__left--item"
                }
                onClick={() => handleChangeMainPage("changePassword")}
              >
                <div className="left__icon">
                  <svg
                    id="bold"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                  >
                    <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                  </svg>
                </div>
                <p>Thay đổi mật khẩu</p>
              </li>
              <li
                className={
                  mainPageChange === "changeProfile"
                    ? "isActive"
                    : "body__left--item"
                }
                onClick={() => handleChangeMainPage("changeProfile")}
              >
                <div className="left__icon">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M496.659,312.107l-47.061-36.8c0.597-5.675,1.109-12.309,1.109-19.328c0-7.019-0.491-13.653-1.109-19.328l47.104-36.821
			                  c8.747-6.912,11.136-19.179,5.568-29.397L453.331,85.76c-5.227-9.557-16.683-14.464-28.309-10.176l-55.531,22.293
			                  c-10.645-7.68-21.803-14.165-33.344-19.349l-8.448-58.901C326.312,8.448,316.584,0,305.086,0h-98.133
			                  c-11.499,0-21.205,8.448-22.571,19.456l-8.469,59.115c-11.179,5.035-22.165,11.435-33.28,19.349l-55.68-22.357
			                  C76.52,71.531,64.04,76.053,58.856,85.568L9.854,170.347c-5.781,9.771-3.392,22.464,5.547,29.547l47.061,36.8
			                  c-0.747,7.189-1.109,13.44-1.109,19.307s0.363,12.117,1.109,19.328l-47.104,36.821c-8.747,6.933-11.115,19.2-5.547,29.397
			                  l48.939,84.672c5.227,9.536,16.576,14.485,28.309,10.176l55.531-22.293c10.624,7.659,21.781,14.144,33.323,19.349l8.448,58.88
			                  C185.747,503.552,195.454,512,206.974,512h98.133c11.499,0,21.227-8.448,22.592-19.456l8.469-59.093
			                  c11.179-5.056,22.144-11.435,33.28-19.371l55.68,22.357c2.688,1.045,5.483,1.579,8.363,1.579c8.277,0,15.893-4.523,19.733-11.563
			                  l49.152-85.12C507.838,331.349,505.448,319.083,496.659,312.107z M256.019,341.333c-47.061,0-85.333-38.272-85.333-85.333
			                  s38.272-85.333,85.333-85.333s85.333,38.272,85.333,85.333S303.08,341.333,256.019,341.333z"
                    />
                  </svg>
                </div>
                <p>Thay đổi thông tin cá nhân</p>
              </li>
            </ul>
          </div>
          <div className="body__main col-lg-8">
            {mainPageChange === "userProfile" && (
              <Profile onSubmit={handleChangeMainPage} userData={userData} />
            )}
            {mainPageChange === "changePassword" && (
              <ChangePassword userData={userData} />
            )}
            {mainPageChange === "changeProfile" && (
              <ChangeProfile userData={userData} />
            )}
          </div>

          <div className="body__main--md col-lg-8">
            {onSubmit === "userProfile" && (
              <Profile onSubmit={handleChangeMainPage} userData={userData} />
            )}
            {onSubmit === "changePassword" && (
              <ChangePassword userData={userData} />
            )}
            {onSubmit === "changeProfile" && (
              <ChangeProfile userData={userData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

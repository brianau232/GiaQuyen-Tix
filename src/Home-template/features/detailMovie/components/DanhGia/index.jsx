import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./DanhGia.scss";
import { IMG_NEWS } from "Contants";

const commentList = [
  {
    avatar: "UA",
    username: "Username A",
    dateComment: "6 ngày trước",
    rate: 6,
    comment:
      "Comment: Lorem ipsum dolor sit amet consectetur adipisicingelit. Velit, quis?",
  },
  {
    avatar: "UB",
    username: "Username B",
    dateComment: "10 ngày trước",
    rate: 8,
    comment:
      "Comment: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsa culpa ad numquam omnis hic inventore distinctiodolor! Enim, sunt!",
  },
  {
    avatar: "UC",
    username: "Username C",
    dateComment: "12 ngày trước",
    rate: 10,
    comment:
      "Comment: Lorem ipsum dolor sit amet consectetur adipisicingelit. Velit, quis?",
  },
  {
    avatar: "UD",
    username: "Username D",
    dateComment: "14 ngày trước",
    rate: 8,
    comment:
      "Comment: Lorem ipsum dolor sit amet consectetur, adipisicingelit. Alias, iste sit impedit sapiente accusantium sunt quodaperiam. In assumenda repellendus quis quas voluptatum ut, perspiciatis inventore a illo facilis molestias!",
  },
  {
    avatar: "UE",
    username: "Username E",
    dateComment: "15 ngày trước",
    rate: 6,
    comment:
      "Comment: Lorem ipsum dolor sit amet consectetur adipisicingelit. Velit, quis?",
  },
];

const renderCommentList = () => {
  return commentList.map((comment, index) => {
    const renderStar = () => {
      switch (comment.rate) {
        case 6:
          return (
            <>
              <img src={IMG_NEWS.star} alt="star" key={index} />
              <img src={IMG_NEWS.star} alt="star" />
              <img src={IMG_NEWS.star} alt="star" />
            </>
          );
        case 8:
          return (
            <>
              <img src={IMG_NEWS.star} alt="star" key={index} />
              <img src={IMG_NEWS.star} alt="star" />
              <img src={IMG_NEWS.star} alt="star" />
              <img src={IMG_NEWS.star} alt="star" />
            </>
          );
        case 10:
          return (
            <>
              <img src={IMG_NEWS.star} alt="star" key={index} />
              <img src={IMG_NEWS.star} alt="star" />
              <img src={IMG_NEWS.star} alt="star" />
              <img src={IMG_NEWS.star} alt="star" />
              <img src={IMG_NEWS.star} alt="star" />
            </>
          );
        default:
          break;
      }
    };
    return (
      <div className="userA element__fadeIn" key={index}>
        <div className="userName">
          <div className="avatar">
            <Avatar className="avatarImg">{comment.avatar}</Avatar>
          </div>
          <div className="name">
            <div className="currentName">
              <p>{comment.username}</p>
              <svg id="Flat" height="512" viewBox="0 0 512 512" width="512">
                <path
                  d="m400 200v16h-288v-16s-25.67-24.33 0-48c0 0 20.32-17.66 39.99-.01-.2-.64-8.01-25.84 16.01-39.99 24.33-14.33 40 8 40 8s2.75-32 48-32c35 0 40 32 40 32s18.33-20.33 40-8 16 40 16 40 20.33-13 40 0 8 48 8 48z"
                  fill="#ffd33a"
                />
                <path
                  d="m376.236 488h-256s-32-277.52-32-280a32 32 0 1 1 64 0 32 32 0 0 1 63-7.94 31.526 31.526 0 0 1 1 7.94 32 32 0 1 1 64 0 31.965 31.965 0 0 1 8-21.16 31.985 31.985 0 0 1 56 21.16 32 32 0 0 1 64 0c0 2.48-32 280-32 280z"
                  fill="#eb423f"
                />
                <g fill="#ed6f6d">
                  <path d="m176.236 488h-16.02s-15.98-279.85-15.98-280v-21.16a31.811 31.811 0 0 1 8 21.16 31.811 31.811 0 0 1 8-21.15v20.87l15.99 279.82c.01.15.01.31.01.46z" />
                  <path d="m232.236 487.77v.23h-16.01l-7.99-279.77v-21.39a31.965 31.965 0 0 1 8 21.16 31.811 31.811 0 0 1 8-21.16v20.93z" />
                  <path d="m288.236 186.84v21.39l-7.99 279.77h-16.01v-.23l8-280v-20.93a31.811 31.811 0 0 1 8 21.16 31.965 31.965 0 0 1 8-21.16z" />
                  <path d="m352.236 186.84v21.16c0 .15-15.98 280-15.98 280h-16.02c0-.15 0-.31.01-.46l15.99-279.82v-20.87a31.811 31.811 0 0 1 8 21.15 31.811 31.811 0 0 1 8-21.16z" />
                </g>
                <ellipse
                  cx="248.236"
                  cy="312"
                  fill="#ffd33a"
                  rx="104"
                  ry="40"
                />
                <path
                  d="m96 40c-6.184 0-11.745 4.158-16 8-.93-12.4-8.948-24-24-24-15.5 0-24 13-24 24 0 8.35 1.531 19.7 8 24-6.469 4.3-8 7.65-8 16a24 24 0 0 0 48 0c0-2.489.7-5.743 0-8 4.352 4.411 9.314 8 16 8a24 24 0 0 0 0-48z"
                  fill="#ffe76c"
                />
                <path
                  d="m480 48a24 24 0 0 0 -24-24c-8.5 0-16.333 7.833-16 16-3.833-5.833-11.72-8-16-8a24 24 0 0 0 0 48 24 24 0 0 0 48 0c0-4.28-.667-13.333-8-16 10-1.833 16-7.5 16-16z"
                  fill="#ffe76c"
                />
                <path
                  d="m416.236 208c2.211-.842 8-8.5 16-8 11.024.689 16 12.954 16 24s-4.955 16-16 16c-1.488 0-14.605.308-16 0 1.166 9.5.333 23.5-16 24-11.041.338-19.114-6.094-24-16-6.167-12.5 1.5-24.333 8-24 0 0-11.424-14.748 0-24 20.164-16.333 32 8 32 8z"
                  fill="#ffe76c"
                />
                <path
                  d="m308.275 48.971c-11.75-11.25-30.628-9.373-40 0-6.011 6.01-6.011 18.461 0 24-6.836-1.415-11.833 2.666-16 8-8.16 10.445-9.373 22.627 0 32s22.627 9.372 32 0c9.372 9.372 30.627 9.372 40 0s16.333-21.693 8-32c-6.333-7.834-16.929-11.3-24-8 5.775-8.371 6.139-18.122 0-24z"
                  fill="#ffe76c"
                />
              </svg>
            </div>
            <span>{comment.dateComment}</span>
          </div>
          <div className="rate">
            <span>{comment.rate}</span>
            <div className="rateStar">{renderStar()}</div>
          </div>
        </div>
        <div className="comment">
          <p>{comment.comment}</p>
        </div>
        <div className="like">
          <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
            <path
              d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64
                c12.011,0,23.061-4.053,32-10.795V224H53.333z"
            />

            <path
              d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725
                c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333
                c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651
                C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043
                c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"
            />
          </svg>
          <span>0</span>
          <p>Thích</p>
        </div>
      </div>
    );
  });
};

function DanhGia() {
  return (
    <div className="danhGia">
      <div className="danhGia__container">
        <div className="danhGia__content">
          <div className="danhGia__content--input">
            <img src={IMG_NEWS.avatar} alt="" />
            <p>Bạn nghĩ gì về phim này?</p>
            <div className="star">
              <img src={IMG_NEWS.fiveStar} alt="fiveStar" />
            </div>
          </div>

          <div className="danhGia__content--comment">{renderCommentList()}</div>
        </div>
      </div>
    </div>
  );
}

export default DanhGia;

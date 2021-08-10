import React from "react";
import { IMG_NEWS } from "../../../../../../Contants";
import "./Review.scss";
function Review() {
  return (
    <div className="container element__fadeIn">
      <div className="row bigThumbnail">
        <div className="col-12 col-sm-6 bigThumbnail__left">
          <a
            href="https://ghienreview.com/review-phim-black-widow-goa-phu-den-an-toan-va-thieu-an-tuong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.GhoaPhuDen} alt="Ghoa Phu Den" />
            <h4>
              Review phim Black Widow – Góa phụ đen: An toàn và thiếu ấn tượng
            </h4>
            <p>
              Black Widow lấy mốc thời gian sau sự kiện Captain America: Civil
              War (2016) và trước lúc Black Widow – Natasha Romanoff hy sinh
              trong Avengers: Hồi kết (2019).
            </p>
          </a>
        </div>

        <div className="col-12 col-sm-6 bigThumbnail__right">
          <a
            href="https://ghienreview.com/review-va-giai-thich-phim-dem-thu-8-kho-hieu-va-nang-triet-ly-phat-giao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.DemThu8} alt="Đêm thứ 8" />
            <h4>
              Review và giải thích phim Đêm thứ 8: Nặng triết lý Phật giáo
            </h4>
            <p>
              Đêm thứ 8 là câu chuyện kể về một con quỷ từ thời xa xưa muốn tìm
              cách đến trần gian để đại khai sát giới. Phật tách nguồn sức mạnh
              nằm ở hai con mắt 1 đen 1 đỏ của hắn ...
            </p>
          </a>
        </div>
      </div>
      <div className="row smallThumbnail">
        <div className="col-12 col-sm-4 smallThumbnail__left">
          <a
            href="https://ghienreview.com/review-phim-a-quiet-place-ii-ngan-va-chi-hay-o-doan-cuoi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.AQuietPlace} alt="A Quiet Place" />
            <h4>Review phim A Quiet Place II: Ngắn và chỉ hay ở đoạn cuối </h4>
            <p>
              Nối tiếp câu chuyện diễn ra tại nhà của gia đình Abbott, sau cái
              chết của người chồng, 4 mẹ con Evelyn, Regan, Marcus ...
            </p>
          </a>
        </div>
        <div className="col-12 col-sm-4 smallThumbnail__middle">
          <a
            href="https://ghienreview.com/review-phim-chung-ta-cua-sau-nay-cau-chuyen-cua-nhung-nguoi-tre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.ChungTaCuaSauNay} alt="Chúng ta của sau này" />
            <h4>Review phim Chúng ta của sau này: Chuyện của người trẻ</h4>
            <p>
              Kiến Thanh và Tiểu Hiểu là hai người đồng hương không quen biết
              nhưng lại vô tình gặp nhau trên chuyến tàu từ Bắc Kinh ...
            </p>
          </a>
        </div>
        <div className="col-12 col-sm-4 smallThumbnail__right">
          <a
            href="https://ghienreview.com/review-phim-luca-2021-hay-dam-buoc-ra-khoi-vung-an-toan-cua-ban/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.Luca} alt="Luca" />
            <p>Review phim Luca (2021): Hãy dám bước ra khỏi vùng an toàn</p>
          </a>
          <a
            href="https://ghienreview.com/review-phim-dai-chien-nguoi-va-than-y-tuong-hay-va-rat-dang-xem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={IMG_NEWS.DaiChienNguoiVaThan}
              alt="Đại Chiến Người Và Thần"
            />
            <p>Review phim Đại Chiến Người và Thần: Ý tưởng hay</p>
          </a>
          <a
            href="https://ghienreview.com/review-phim-chung-ta-cua-sau-nay-cau-chuyen-cua-nhung-nguoi-tre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.ChungTaCuaSauNay} alt="Chúng Ta Của Sau Này" />
            <p>Review phim Chúng ta của sau này: Chuyện của người trẻ</p>
          </a>
          <a
            href="https://ghienreview.com/review-phim-dien-toi-ky-xao-tot-nhung-kich-ban-chua-xuat-sac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.DenToi} alt="Đen Tối" />
            <p>Review phim Điên tối: Kỹ xảo tốt</p>
          </a>
        </div>
      </div>
      <div className="btnContainer">
        <a
          href="https://zingnews.vn/phim-chieu-rap.html"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Xem Thêm
        </a>
      </div>
    </div>
  );
}

export default Review;

import { IMG_NEWS } from "Contants";
import React from "react";
import "./TinTuc.scss";
function Tintuc() {
  return (
    <div className="container element__fadeIn">
      <div className="row bigThumbnail">
        <div className="col-12 col-sm-6 bigThumbnail__left">
          <a
            href="https://zingnews.vn/noi-lo-cua-chan-tu-dan-khi-quay-john-wick-4-post1236274.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.ChanTuDan} alt="ChanTuDan" />
            <h4>Nỗi lo của Chân Tử Đan khi quay ‘John Wick 4’</h4>
            <p>
              Trên mạng xã hội, ngôi sao phim võ thuật Chân Tử Đan chia sẻ đã
              sẵn sàng quay “John Wick 4” cùng Keanu Reeves.
            </p>
          </a>
        </div>

        <div className="col-12 col-sm-6 bigThumbnail__right">
          <a
            href="https://zingnews.vn/mau-thuan-cua-cha-con-sieu-anh-hung-trong-shang-chi-post1231035.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.ShangChi} alt="ShangChi" />
            <h4>Mâu thuẫn của cha con siêu anh hùng trong 'Shang-Chi'</h4>
            <p>
              Đoạn giới thiệu thứ hai của bom tấn siêu anh hùng “Shang-Chi and
              the Legend of the Ten Rings” đã được công bố với nhiều tình tiết
              mới.
            </p>
          </a>
        </div>
      </div>
      <div className="row smallThumbnail">
        <div className="col-12 col-sm-4 smallThumbnail__left">
          <a
            href="https://zingnews.vn/noi-lo-cua-chan-tu-dan-khi-quay-john-wick-4-post1236274.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.ToyStory} alt="ToyStory" />
            <h4>Loạt bom tấn thu tỷ USD từ con số 0</h4>
            <p>
              "The Conjuring" thường xuyên xuất hiện trong danh sách những tác
              phẩm kinh dị ấn tượng của thập kỷ.
            </p>
          </a>
        </div>
        <div className="col-12 col-sm-4 smallThumbnail__middle">
          <a
            href="https://zingnews.vn/noi-lo-cua-chan-tu-dan-khi-quay-john-wick-4-post1236274.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.fafletty} alt="fafletty" />
            <h4>Bí mật hậu trường của ‘Fast & Furious’</h4>
            <p>
              Sau 9 chuyến hành trình trên màn ảnh rộng. Đằng sau mỗi tác phẩm
              lại là nhiều câu chuyện hậu trường thú vị.
            </p>
          </a>
        </div>
        <div className="col-12 col-sm-4 smallThumbnail__right">
          <a
            href="https://zingnews.vn/minh-tinh-goc-viet-dong-phim-cung-anya-taylor-johnson-post1241017.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.hongChau} alt="Hong Chau" />
            <p>Minh tinh gốc Việt đóng phim cùng Anya Taylor-Johnson</p>
          </a>
          <a
            href="https://zingnews.vn/bo-phim-kho-khan-nhat-voi-the-rock-post1240396.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.theRock} alt="The Rock" />
            <p>Bộ phim khó khăn nhất với The Rock</p>
          </a>
          <a
            href="https://zingnews.vn/cach-marvel-studios-kiem-soat-da-vu-tru-dien-anh-post1239569.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.spiderMan} alt="SpiderMan" />
            <p>Cách Marvel Studios kiểm soát đa vũ trụ điện ảnh</p>
          </a>
          <a
            href="https://zingnews.vn/han-so-hee-dong-phim-cung-joo-ji-hoon-post1239165.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.hanSoHee} alt="Han So Hee" />
            <p>Han So Hee đóng phim cùng Joo Ji Hoon</p>
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

export default Tintuc;

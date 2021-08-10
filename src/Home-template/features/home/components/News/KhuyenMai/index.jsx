import React from "react";
import { IMG_NEWS } from "../../../../../../Contants";
import "./KhuyenMai.scss";
function KhuyenMai() {
  return (
    <div className="container element__fadeIn">
      <div className="row bigThumbnail">
        <div className="col-12 col-sm-6 bigThumbnail__left">
          <a
            href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.tik1k} alt="tik1k" />
            <h4>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h4>
            <p>
              Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
              voucher thanh toán ZaloPay thả ga
            </p>
          </a>
        </div>

        <div className="col-12 col-sm-6 bigThumbnail__right">
          <a
            href="https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.donggia1k} alt="donggia1k" />
            <h4>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</h4>
            <p>
              ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX. Hành trình tìm Ròm và Phúc chỉ
              với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
            </p>
          </a>
        </div>
      </div>
      <div className="row smallThumbnail">
        <div className="col-12 col-sm-4 smallThumbnail__left">
          <a
            href="hhttps://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.bhdstar} alt="bhdstar" />
            <h4>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</h4>
            <p>
              Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé
              khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim
              trên ZaloPay.
            </p>
          </a>
        </div>
        <div className="col-12 col-sm-4 smallThumbnail__middle">
          <a
            href="https://tix.vn/khuyen-mai/7908-beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.betaCineplex} alt="betaCineplex" />
            <h4>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</h4>
            <p>
              Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn
              quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại
              KHỦNG đổ bộ.
            </p>
          </a>
        </div>
        <div className="col-12 col-sm-4 smallThumbnail__right">
          <a
            href="https://tix.vn/khuyen-mai/7806-123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.phim123} alt="phim123" />
            <p>
              [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai
              Yêu Quái
            </p>
          </a>
          <a
            href="https://tix.vn/khuyen-mai/7801-123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.nhapma} alt="nhapma" />
            <p>
              [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù:
              Ai Chết Giơ Tay
            </p>
          </a>
          <a
            href="https://tix.vn/khuyen-mai/7792-mega-gs-mot-doa-hoa-thay-ngan-loi-yeu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.megags} alt="megags" />
            <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
          </a>
          <a
            href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMG_NEWS.giamngay} alt="giamngay" />
            <p>
              [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default KhuyenMai;

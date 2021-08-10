import { images } from "Contants";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <Container className="footer__container">
        <Row className="footer__top">
          <Col xs={12} sm={12} md={6} lg={4}>
            <h5 className="footer__title--content hideOnMobile">TIX</h5>
            <Row>
              <Col lg={6}>
                <div className="footer__title">
                  <a href="https://tix.vn/faq" className="footer__title--link">
                    FAQ
                  </a>
                  <a
                    href="https://tix.vn/brand-guideline/"
                    className="footer__title--link"
                  >
                    Brand Guidelines
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className="footer__title">
                  <a
                    href="https://tix.vn/chinh-sach-bao-mat"
                    className="footer__title--link"
                  >
                    Chính sách bảo mật
                  </a>
                  <a
                    href="https://tix.vn/thoa-thuan-su-dung"
                    className="footer__title--link"
                  >
                    Thỏa thuận sử dụng
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} className="websiteIcon">
            <h5 className="footer__title--content">ĐỐI TÁC</h5>
            <Row className="footer__partner">
              <Col md={12} className="footer__partner--listIcon">
                <a
                  href="https://www.cgv.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoCgv}
                    alt=""
                    className="footer__partner--icon"
                    style={{ backgroundColor: "white" }}
                  />
                </a>
                <a
                  href="https://www.bhdstar.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logobhd}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://www.galaxycine.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logogalaxycine}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="http://cinestar.com.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logocinestar}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://lottecinemavn.com/LCHS/index.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logolotte}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
              </Col>
              <Col md={12} className="footer__partner--listIcon">
                <a
                  href="https://www.megagscinemas.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logomega}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://www.betacinemas.vn/home.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logobt}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="http://ddcinema.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoDDC}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://touchcinema.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoTOUCH}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://cinemaxvn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logocnx}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
              </Col>
              <Col md={12} className="footer__partner--listIcon">
                <a
                  href="http://starlight.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoSTARLIGHT}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://www.dcine.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logodcine}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://zalopay.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logozalopay}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://www.payoo.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logopayoo}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoVCB}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
              </Col>
              <Col md={12} className="footer__partner--listIcon">
                <a
                  href="https://www.agribank.com.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoAGRIBANK}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://www.vietinbank.vn/web/home/vn/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoVIETTINBANK}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://www.indovinabank.com.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoIVB}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://webv3.123go.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logoGo}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
                <a
                  href="https://laban.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.logolaban}
                    alt=""
                    className="footer__partner--icon"
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4}>
            <Row>
              <Col lg={6}>
                <div className="footer__socialApp footer__androidIosIcon">
                  <h5 className="footer__title--content">mobile app</h5>
                  <a
                    href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={images.logoApple}
                      alt=""
                      className="footer__socialApp--icon"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={images.logoAndroid}
                      alt=""
                      className="footer__socialApp--icon"
                    />
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className="footer__socialApp">
                  <h5 className="footer__title--content">social</h5>
                  <a
                    href="https://www.facebook.com/tix.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={images.logoFacebook}
                      alt=""
                      className="footer__socialApp--icon"
                    />
                  </a>
                  <a
                    href="https://zalo.me/tixdatve"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={images.logoZalo}
                      alt=""
                      className="footer__socialApp--icon"
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="hrFooter" />
        <Row className="footer__bottom">
          <Col xs={12} md={2} lg={1} className="footer__img">
            <img className="zionIcon" src={images.logoZion} alt="" />
          </Col>
          <Col xs={12} md={8} lg={9} className="footer__info">
            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <br />
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <br />
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </span>
            <br />
            <span>
              Số Điện Thoại (Hotline): 1900 545 436
              <br />
              Email:
              <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                support@tix.vn
              </a>
            </span>
          </Col>
          <Col xs={12} md={2} lg={2} className="footer__img">
            <a
              href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1"
              target="_blank"
              rel="noopener noreferrer"
              alt=""
            >
              <img className="bocoIcon" src={images.logoBocongthuong} alt="" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

import { images } from "Contants";
import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Mobile.scss";

const Mobile = () => {
  return (
    <div className="mobile">
      <Container className="mobile__container">
        <Row>
          <Col className="mobile__left" lg={6}>
            <p className="mobile__left--text">Ứng dụng tiện lợi dành cho</p>
            <p className="mobile__left--text">người yêu điện ảnh</p>
            <br />
            <p className="mobile__left--textSmall">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <br />
            <a
              href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              target="_blank"
              rel="noreferrer"
              className="mobile__left--button"
            >
              App miễn phí - Tải về ngay!
            </a>
            <p className="mobile__left--textApp">
              TIX có hai phiên bản
              <a
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                target="_blank"
                rel="noreferrer"
              >
                iOS
              </a>
              &amp;
              <a
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                target="_blank"
                rel="noreferrer"
              >
                Android
              </a>
            </p>
          </Col>
          <Col className="mobile__right" lg={6}>
            <img
              className="mobile__right--img"
              src={images.logoMobile}
              alt="logoMobile"
            />
            <div className="mobile__right--slider">
              <Carousel controls={false} indicators={false}>
                <Carousel.Item interval="3000" className="mobile__slider--item">
                  <img
                    className="d-block w-100 mobile__slider--img "
                    src={images.slide1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval="3000" className="mobile__slider--item">
                  <img
                    className="d-block w-100 mobile__slider--img"
                    src={images.slide2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval="3000" className="mobile__slider--item">
                  <img
                    className="d-block w-100 mobile__slider--img"
                    src={images.slide3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval="3000" className="mobile__slider--item">
                  <img
                    className="d-block w-100 mobile__slider--img"
                    src={images.slide4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mobile;

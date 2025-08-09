import React from "react";
import Link from "@/components/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider header_slider_area ">
      <Swiper {...mainSlideOptions}>
        {SlideOneData.map(
          ({ backgroundImage, title, text, button, url }, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${backgroundImage.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="7">
                    <div className="hero-content">
                      <div className="hero-badge">
                        <span className="subtitle_number">0{index + 1}</span>
                        <span className="badge-text">{text}</span>
                      </div>
                      <h1 className="main-slider__title">{title}</h1>
                      <p className="hero-description">
                        Professional HVAC solutions with cutting-edge technology and expert service delivery across India
                      </p>
                      <div className="hero-actions">
                        <Link href={url} className="btn-yellow btn-modern">
                          <span>{button}</span>
                          <i className="fa fa-arrow-right"></i>
                        </Link>
                        <Link href="/about" className="btn-outline">
                          Learn More
                        </Link>
                      </div>
                      <div className="hero-stats">
                        <div className="stat-item">
                          <span className="stat-number">500+</span>
                          <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-number">15+</span>
                          <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-number">24/7</span>
                          <span className="stat-label">Support Available</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default SliderOne;

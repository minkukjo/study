import React, { useEffect } from 'react'
import Layout from '@theme/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'

const handleScrollDown = () => {
  window.scroll({
    top: 1000,
    behavior: 'smooth'
  })
}

export function Portfolio() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout title="Hello">
      <h1 className="hero__logo" data-aos="zoom-in">
        Developer
      </h1>
      <h2 className="hero__text" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
        <span>Minkuk Jo</span>
      </h2>
      <div
        className="hero__scroll"
        data-aos="fade-up"
        data-aos-easing="ease"
        data-aos-delay="800"
        onClick={handleScrollDown}
      >
        Scroll down
        <i className="chevron bottom"></i>
      </div>
      <div
        style={{
          paddingTop: '1000px',
          display: 'block',
          height: '100%',
          fontSize: '20px',
          margin: '50px'
        }}
      >
        <div className="item item--left" data-aos="fade-up">
          <div className="item--title">Samsung Electronics Intern</div>
          <div className="item--content">2019.06.24 ~ 2019.08.09</div>
          <div className="item--content">Android Framework Part</div>
          <img src="../../static/img/samsung.png"></img>
        </div>
        <div className="item item--right" data-aos="fade-left">
          <div className="item--title">Naver Intern</div>
          <div className="item--content">2019.09.09 ~ 2019.11.08</div>
          <div className="item--content">Naver Reservation Platform</div>
        </div>
        <div className="item item--left" data-aos="fade-right">
          <div className="item--title">Kakao Enterprise Intern</div>
          <div className="item--content">2020.03.02 ~ 2020.06.01</div>
          <div className="item--content">AI Service Platform</div>
        </div>
        <div className="item item--right" data-aos="zoom-in"></div>
        <div className="item item--left" data-aos="zoom-in-up"></div>
        <div className="item item--right" data-aos="zoom-out"></div>
        <div className="item item--left" data-aos="zoom-out-up"></div>
        <div className="item item--right" data-aos="flip-left"></div>
        <div className="item item--left" data-aos="flip-right"></div>
      </div>
    </Layout>
  )
}

export default Portfolio

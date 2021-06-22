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

export function About() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout title="About">
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
          <div className="item--title">Challenging Developer</div>
        </div>
        <div className="item item--right" data-aos="fade-left">
          <div className="item--title">Spring Frameowrk Lover</div>
        </div>
        <div className="item item--left" data-aos="fade-right">
          <div className="item--title">Hoby is singing songs,</div>
        </div>
        <div className="item item--right" data-aos="zoom-in">
          <div className="item--title">watching animations</div>
        </div>
        <div className="item item--left" data-aos="zoom-in-up">
          <div className="item--title">and playing game like a LOL</div>
        </div>
        <div className="item item--right" data-aos="zoom-out">
          <div className="item--title">I wanna write clean code</div>
        </div>
        <div className="item item--left" data-aos="zoom-out-up">
          <div className="item--title">Every Day Learning</div>
        </div>
        <div className="item item--right" data-aos="flip-left">
          <div className="item--title">Front-end is also pretty funny</div>
        </div>
        <div className="item item--left" data-aos="flip-right">
          <div className="item--title">Software Craftsman</div>
        </div>
      </div>
    </Layout>
  )
}

export default About

import React from 'react'
import Social from '../Social'
import Testimonials from '../testimonial/TestimonialAnimation'
import Services from '../service/ServiceAnimation'
import Awards from '../award/AwardsAnimation'

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img
                      src="https://i.ibb.co/0BMdCW4/Untitled-2.png"
                      alt="about"
                    />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Full Stack Web Developer</p>
                  <h3>Md Masud Rana</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                    I'm a Full Stack Web Developer with over 6 Month of
                    experience. I'm from Sirajganj, Bangladesh. I code and
                    create web elements for amazing people around the world. I
                    like work with new people. New people new Experiences.
                  </p>
                  <p>
                    I'm a Full Stack Web Developer with over 6 Month of
                    experience. I'm from Sirajganj, Bangladesh. I code and
                    create web elements for amazing people around the world. I
                    like work with new people. New people new Experiences.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Masud Rana</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>15 Jun 2002</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>21 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Sirajganj, Bangladesh</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>+880 1742818037</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>mdmasudranainfo@yahoo.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>live:mdmasude7_1</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/border-dark.png'
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div> */}

          {/* <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  )
}

export default About

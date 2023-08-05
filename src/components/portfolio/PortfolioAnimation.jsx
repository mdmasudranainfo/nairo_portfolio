import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { FiLink } from 'react-icons/fi'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
}

const tabList = ['All', 'Front End ', 'Full Stack', 'Fashion', 'Product']
const tabListContent = [
  {
    porftoliItems: [
      {
        img: 'https://i.ibb.co/x6nkY7D/1.png',
        width: 400,
        height: 550,
        title: 'ZIRO',
        Code_link: 'https://github.com/mdmasudranainfo/freelancer-website',
        alterText: 'ZIRO',
        delayAnimation: '',
        portfolioLink: 'https://zirobd.netlify.app/',
      },
      {
        img: 'https://i.ibb.co/X4GNGFL/3.png',
        width: 400,
        height: 550,
        title: 'Vinras',
        Code_link: 'https://github.com/mdmasudranainfo/vinras',
        alterText: 'Vinras',
        delayAnimation: '',
        portfolioLink: 'https://lambent-unicorn-0edccd.netlify.app/',
      },

      {
        img: 'https://i.ibb.co/MpVDM1m/2.png',
        width: 400,
        height: 550,
        title: 'Cloudeflara',
        Code_link: 'https://github.com/mdmasudranainfo/cloudeflara',
        alterText: 'Cloudeflara',
        delayAnimation: '',
        portfolioLink: 'https://zirobd.netlify.app/',
      },

      {
        img: 'https://i.ibb.co/Tc313b6/4.png',
        width: 400,
        height: 550,
        title: 'FreePik Dashboard',
        Code_link: 'https://github.com/mdmasudranainfo/freepik_d.git',
        alterText: 'FreePik Dashboard',
        delayAnimation: '200',
        portfolioLink: 'https://stately-malasada-ad8ea8.netlify.app/',
      },
      {
        img: 'https://i.ibb.co/4gdS5CP/5.png',
        width: 400,
        height: 550,
        title: 'Sasruco',
        Code_link: 'https://github.com/mdmasudranainfo/sasruco_edu_New',
        alterText: 'Sasruco',
        delayAnimation: '200',
        portfolioLink: 'https://sasrico-new.netlify.app/',
      },
      {
        img: 'https://i.ibb.co/YNFVN2C/6.png',
        width: 400,
        height: 550,
        title: 'Hoom Cooking',
        Code_link: 'https://github.com/mdmasudranainfo/home-cookin-clint',
        alterText: 'Hoom Cooking',
        delayAnimation: '200',
        portfolioLink: 'https://home-cookin-60455.web.app/',
      },
      {
        img: 'https://i.ibb.co/pbnbc8D/8.png',
        width: 400,
        height: 550,
        title: 'Hoom Cooking',
        Code_link: 'https://github.com/mdmasudranainfo/Zindani',
        alterText: 'Hoom Cooking',
        delayAnimation: '200',
        portfolioLink: 'https://zindani-8acac.web.app/',
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: '/img/portfolio/m-portfolio-6.jpg',
        width: 400,
        height: 550,
        title: 'Web Application',
        subTitle: 'Behance Shot',
        alterText: 'Web Application',
        delayAnimation: '',
        portfolioLink:
          'https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template',
      },
      {
        img: '/img/portfolio/m-portfolio-3.jpg',
        width: 400,
        height: 700,
        title: 'Visual Design',
        subTitle: 'Themeforest Marke',
        alterText: 'Business Mockup',
        delayAnimation: '100',
        portfolioLink:
          'https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template',
      },
      {
        img: '/img/portfolio/m-portfolio-8.jpg',
        width: 400,
        height: 550,
        title: 'Chatting App Design',
        subTitle: 'Codecanyon Market',
        alterText: 'Chatting App Design',
        delayAnimation: '200',
        portfolioLink:
          'https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template',
      },
      {
        img: '/img/portfolio/m-portfolio-4.jpg',
        width: 400,
        height: 400,
        title: 'Business Card',
        subTitle: 'Graphicriver Market',
        alterText: 'E-Cosmetics',
        delayAnimation: '300',
        portfolioLink:
          'https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template',
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: '/img/portfolio/m-portfolio-2.jpg',
        width: 400,
        height: 400,
        title: 'E-Learning App',
        subTitle: 'Nuna ios App',
        alterText: 'Illustration',
        delayAnimation: '',
        portfolioLink:
          'https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template',
      },

      {
        img: '/img/portfolio/m-portfolio-5.jpg',
        width: 400,
        height: 700,
        title: 'Chatting Application',
        subTitle: 'Codecanyon Market',
        alterText: 'Bottle Illustration',
        delayAnimation: '100',
        portfolioLink:
          'https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL',
      },
      {
        img: '/img/portfolio/m-portfolio-6.jpg',
        width: 400,
        height: 550,
        title: 'Web Application',
        subTitle: 'Behance Shot',
        alterText: 'Web Application',
        delayAnimation: '200',
        portfolioLink:
          'https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template',
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: '/img/portfolio/m-portfolio-1.jpg',
        width: 400,
        height: 550,
        title: 'Bottle Illustration',
        subTitle: 'Figma Shoot',
        alterText: 'Bottle Illustration',
        delayAnimation: '',
        portfolioLink:
          'https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template',
      },
      {
        img: '/img/portfolio/m-portfolio-7.jpg',
        width: 400,
        height: 700,
        title: 'Business Card',
        subTitle: 'Graphicriver Market',
        alterText: 'Business Card',
        delayAnimation: '100',
        portfolioLink:
          'https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template',
      },
      {
        img: '/img/portfolio/m-portfolio-9.jpg',
        width: 400,
        height: 400,
        title: 'Web Motion',
        subTitle: 'Behance Shot',
        alterText: 'Web Motion',
        delayAnimation: '200',
        portfolioLink: 'https://www.facebook.com/ibthemes',
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: '/img/portfolio/m-portfolio-2.jpg',
        width: 400,
        height: 400,
        title: 'E-Learning App',
        subTitle: 'Nuna ios App',
        alterText: 'Illustration',
        delayAnimation: '',
        portfolioLink:
          'https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template',
      },
      {
        img: '/img/portfolio/m-portfolio-3.jpg',
        width: 400,
        height: 700,
        title: 'Visual Design',
        subTitle: 'Themeforest Marke',
        alterText: 'Business Mockup',
        delayAnimation: '100',
        portfolioLink:
          'https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template',
      },

      {
        img: '/img/portfolio/m-portfolio-5.jpg',
        width: 400,
        height: 700,
        title: 'Chatting Application',
        subTitle: 'Codecanyon Market',
        alterText: 'Bottle Illustration',
        delayAnimation: '200',
        portfolioLink:
          'https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL',
      },
      {
        img: '/img/portfolio/m-portfolio-6.jpg',
        width: 400,
        height: 550,
        title: 'Web Application',
        subTitle: 'Behance Shot',
        alterText: 'Web Application',
        delayAnimation: '300',
        portfolioLink:
          'https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template',
      },
    ],
  },
]

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <a href={val.Code_link} target="blank">
                            Code Link
                          </a>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  )
}

export default PortfolioAnimation

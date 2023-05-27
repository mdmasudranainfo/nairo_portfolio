import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Front End Development",
    descriptions: `I design  services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. `,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Back End Development",
    descriptions: `I Development services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. .`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Full Stack Development",
    descriptions: `I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}

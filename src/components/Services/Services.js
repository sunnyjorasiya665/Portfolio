import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className="services-container" id="services">
        <div className="services-list-container">
          <div className="services-desc-container">
            <h1>
              My Awesome <span>Services</span>
            </h1>
            <p>
              Specialize in delivering comprehensive full-stack development
              services tailored to meet your unique business needs
            </p>
            <button className="hire-button">
              <a href="mailto:sjorasiya665@gmail.com?subject=For Contacting for Website Development">
                Hire Me
              </a>
            </button>
          </div>

          <div className="service-item-container">
            <div className="services-item">
              <i className="fa-solid fa-code"></i>
              <div className="item-desc">
                <h3>Web Developments</h3>
                <p>
                  As a skilled full-stack web developer, I specialize in
                  crafting responsive and intuitive websites that deliver
                  exceptional user experiences. With expertise in both front-end
                  and back-end development, I bring your vision to life by
                  building secure, efficient, and scalable web solutions.
                  Whether it's developing a new site or optimizing an existing
                  one, I am dedicated to helping you achieve your goals with
                  custom-built, high-quality websites.
                </p>
              </div>
            </div>
            <div className="services-item">
              <i className="fa-brands fa-react"></i>
              <div className="item-desc">
                <h3>Frontend Development</h3>
                <p>
                  As a skilled full-stack web developer, I specialize in
                  crafting responsive and intuitive websites that deliver
                  exceptional user experiences. With expertise in both front-end
                  and back-end development, I bring your vision to life by
                  building secure, efficient, and scalable web solutions.
                  Whether it's developing a new site or optimizing an existing
                  one, I am dedicated to helping you achieve your goals with
                  custom-built, high-quality websites.
                </p>
              </div>
            </div>
            <div className="services-item">
              <i class="fa-brands fa-node-js"></i>
              <div className="item-desc">
                <h3>Backend Development</h3>
                <p>
                  As a skilled full-stack web developer, I specialize in
                  crafting responsive and intuitive websites that deliver
                  exceptional user experiences. With expertise in both front-end
                  and back-end development, I bring your vision to life by
                  building secure, efficient, and scalable web solutions.
                  Whether it's developing a new site or optimizing an existing
                  one, I am dedicated to helping you achieve your goals with
                  custom-built, high-quality websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

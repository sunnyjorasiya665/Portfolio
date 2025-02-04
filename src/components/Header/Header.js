import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/pf1.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header-container">
        {/*Header content */}
        <div className="header-content " id="about">
          <h1>Hy! Am</h1>
          <h2 className="fullName">Sunny Jorasiya</h2>
          <h2>
            I'm a {""}
            <Typical
              steps={
                (["Full Stack Developer", 1000],
                [
                  "React Developer 👨‍💻🌐🔗",
                  1000,
                  "Frontend Developer 👨‍💻✅",
                  1000,
                  "Backend Developer 👨‍💻",
                  1000,
                ])
              }
              loop={Infinity}
              wrapper="b"
            />
          </h2>

          <p>
            I am an emerging Full Stack Developer with practical experience from
            my internship at Central Research Laboratory, Bharat Electronics
            Limited, Ghaziabad. During this period, I worked extensively with
            technologies like Node.js, Express.js, and EJS to build robust web
            applications. In addition to backend development, I have developed a
            strong understanding of frontend technologies, particularly
            React.js, along with state management using Redux and data fetching
            with React Query. My portfolio reflects my ability to create
            dynamic, user-centric applications, where I combine responsive
            design with efficient code. I am passionate about continuous
            learning and eager to tackle new challenges that help me grow as a
            developer.
          </p>

          {/* payment */}
          <div className="header-payment-container">
            <button>
              <a href="mailto:sjorasiya665@gmail.com?subject=For Contacting for Website Development">
                Hire Me
              </a>
            </button>

            <a href="tel:+91-8053854156">
              <i
                className="fa-solid fa-square-phone fa-xl"
                // style={{ color: "#5332f5" }}
              ></i>
            </a>
            <button>
              <a href="https://www.freelancer.com/u/sjorasiya665" target="main">
                Hire Me on Freelancer
              </a>
            </button>
            <a
              href="upi://pay?pa=sjorasiya665-1@oksbi&pn=Sunny%20Jorasiya&am=1000&cu=INR"
              target="_blank"
            >
              <i className="fa-brands fa-google-pay"></i>
            </a>
            <a
              href="upi://pay?pa=8053854156@amazonpay&pn=Sunny%20Jorasiya&am=1000&cu=INR"
              target="_blank"
            >
              <i class="fa-brands fa-amazon-pay"></i>
            </a>
            <i class="fa-brands fa-paypal"></i>
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
          </div>
        </div>

        <div className="profile-img-container">
          <img src={profileImg} alt="profile" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
    </>
  );
};

export default Header;

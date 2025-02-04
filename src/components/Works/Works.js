import React, { useEffect, useRef, useState } from "react";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.jpg";
import "./Works.css";

const projects = [
  {
    name: "MoneyTrail - Expense Tracker",
    img: w1,
    live: "https://moneytrail.vercel.app",
    github: "https://github.com/sunnyjorasiya665/MoneyTrail-Expense-Tracker",
  },
  {
    name: "Portfolio",
    img: w2,
    live: "https://yourwebsite2.com",
    github: "https://github.com/yourrepo2",
  },
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Auto-scroll effect with fix
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000); // Change project every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Handle mouse drag for smooth scroll
  const handleMouseDown = (e) => {
    carouselRef.current.isDragging = true;
    carouselRef.current.startX = e.pageX;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!carouselRef.current.isDragging) return;
    const x = e.pageX - carouselRef.current.startX;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - x;
  };

  const handleMouseUp = () => {
    carouselRef.current.isDragging = false;
  };

  return (
    <div className="works-container">
      <h1>My Recent Works</h1>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: "grab" }}
      >
        {/* Navigation Buttons */}
        <button className="nav-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="nav-btn next" onClick={nextSlide}>
          ❯
        </button>

        <div className="carousel-track">
          {projects.map((project, index) => {
            let position = "hidden";
            if (index === currentIndex) {
              position = "center";
            } else if (index === (currentIndex + 1) % projects.length) {
              position = "right";
            } else if (
              index ===
              (currentIndex - 1 + projects.length) % projects.length
            ) {
              position = "left";
            }

            return (
              <div key={index} className={`carousel-item ${position}`}>
                <img src={project.img} alt={`work-${index + 1}`} />
                <p className="project-name">{project.name}</p>
                <div className="middle">
                  <button className="visit-btn">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </button>
                  <button className="github-btn">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Source
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;

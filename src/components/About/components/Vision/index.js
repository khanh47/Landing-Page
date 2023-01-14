import React, { useState } from "react";
import "../../Slider/Slider.css";
import dataSlider from "../../Slider/dataSlider";

export default function Vision() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div className="container-bg-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
                className="bg-img-slide"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="grid wide">
        <div class="col l-1">
          <h1 class="h1">CUỘC CHIẾN VƯƠNG QUYỀN</h1>
          <p class="p">
            Là một cuộc thi học thuật được tổ chức lần đầu vào năm 2017 có
            format giống với Đường lên đỉnh Olympia.
          </p>
        </div>
        <div className="col l-2">          
          <div className="container-slider">
            {dataSlider.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={
                    slideIndex === index + 1 ? "slide active-anim" : "slide"
                  }
                >
                  <img
                    src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
                    className="img-slide"
                    alt=""
                  />
                </div>
              );
            })}

            <div className="container-dots">
              {Array.from({ length: 4 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

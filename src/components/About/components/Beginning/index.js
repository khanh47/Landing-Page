import React, { useState } from "react";
import "../../../Slider/Slider.css";
import dataSlider from "../../../Slider/dataSlider"
import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles(() => ({
  grid: {
    width: "100%",
    height: "100%",
    margin: "5vw 0vw",
    display: "flex",
    flexWrap: "wrap",
  },  
  l2: {
    zIndex: "1",
    margin: "auto",
  },  
  l1: {
    zIndex: "1",
    margin: "auto",
    flex: "0 0 20%",
  },  
  h1: {
    color: "white",
    marginTop: "5vw",
  },
}));

export default function Beginning() {
  const styles = useStyles();
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
      <div className={styles.grid}>
        <div className={styles.l1}>
          <h1 className={styles.h1}>CUỘC CHIẾN VƯƠNG QUYỀN</h1>
          <p class="">
            Là một cuộc thi học thuật được tổ chức lần đầu vào năm 2017 có
            format giống với Đường lên đỉnh Olympia.
          </p>
        </div>
        <div className={styles.l2}>          
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

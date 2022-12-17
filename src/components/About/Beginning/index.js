import "./style.css";
import bgSlide1 from "./images/bgSlide1.jpg";
import bgSlide2 from "./images/bgSlide2.png";
import bgSlide3 from "./images/bgSlide3.png";
import bgSlide4 from "./images/bgSlide4.png";
import slide1 from "./images/bgSlide1.jpg";
import slide2 from "./images/bgSlide2.png";
import slide3 from "./images/bgSlide3.png";
import slide4 from "./images/bgSlide4.png";

function Beginning() {
  return (
    <body>
      <div class="grid wide">
        <div class="grid__row">
          <div class="col l-1">
            <h1 class="h1">CUỘC CHIẾN VƯƠNG QUYỀN</h1>
            <p class="p">
              Là một cuộc thi học thuật được tổ chức lần đầu vào năm 2017 có
              format giống với Đường lên đỉnh Olympia.
            </p>
          </div>
          <div class="col l-2">
            <div class="slides">
              <div class="slide first">
                <img src={slide1} alt="" class="slideImg" />
              </div>  
              <div class="slide">
                <img src={slide2} alt="" class="slideImg" />
              </div>
              <div class="slide">
                <img src={slide3} alt="" class="slideImg" />
              </div>
              <div class="slide">
                <img src={slide4} alt="" class="slideImg" />
              </div>
            </div>
            <div class="navigation-auto">
              <div class="auto-btn1" />
              <div class="auto-btn2" />
              <div class="auto-btn3" />
              <div class="auto-btn4" />
            </div>
            <div class="navigation-manual">
              <label for="radio1" class="manual-btn" />
              <label for="radio2" class="manual-btn" />
              <label for="radio3" class="manual-btn" />
              <label for="radio4" class="manual-btn" />
            </div>
          </div>
        </div>
      </div>
      <div class="slider">
        <div class="bgSlides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div class="slide bgFirst">
            <img src={bgSlide1} alt="" class="bg-img" />
          </div>
          <div class="slide">
            <img src={bgSlide2} alt="" class="bg-img" />
          </div>
          <div class="slide">
            <img src={bgSlide3} alt="" class="bg-img" />
          </div>
          <div class="slide">
            <img src={bgSlide4} alt="" class="bg-img" />
          </div>
        </div>
      </div>
    </body>
  );
}

// var counter = 1;

// setInterval(function Auto(){
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if (counter > 4){
//     counter = 1;
//   }
// }, 5000);

export default Beginning;

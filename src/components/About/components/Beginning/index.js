import "./style.css";
import img1 from "./images/img1.jpg";
import bgimg from "./images/bgimg.jpg";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

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
            <img src={img1} alt="img1" class="img1" />
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
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div class="slide first">
            <img src={bgimg} alt="" class="bg-img" />
          </div>
          <div class="slide">
            <img src={img2} alt="" class="bg-img" />
          </div>
          <div class="slide">
            <img src={img3} alt="" class="bg-img" />
          </div>
          <div class="slide">
            <img src={img4} alt="" class="bg-img" />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Beginning;

import "./style.css";
import img1 from "./images/img1.jpg";
import bgimg from "./images/bgimg.jpg";

function About() {
  return (
    <body>
      <img src={bgimg} alt="bg-img" class="bg-img"></img>
      <div class="grid">
        <div class="grid__row">
          <div class="col l-1">
            <h1 class="h1">CUỘC CHIẾN VƯƠNG QUYỀN</h1>
            <p class="p">
              Là một cuộc thi học thuật được tổ chức lần đầu vào năm 2017 có
              format giống với Đường lên đỉnh Olympia.
            </p>
          </div>
          <div class="col l-2">
            <img src={img1} alt="img1" class="img1"></img>
          </div>
        </div>
      </div>
    </body>
  );
}

export default About;

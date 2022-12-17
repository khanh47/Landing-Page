import "./style.css";

import mainImg from "./images/img.jpg";
import ccvq1 from "./images/ccvq1.jpg";
import ccvq2 from "./images/ccvq2.jpg";
import ccvq4 from "./images/ccvq4.jpg";
import ccvq5 from "./images/ccvq5.png";

function History() {
  return (
    <body>
      <div class="history box">
        <div className="top">
          <div className="top-left">
            <img class="mainimg" src={mainImg} alt=""></img>
          </div>
          <div className="top-right">
            <h1 class="history-title box-item">Lịch sử</h1>
            <p class="history-desc">
              Cuộc chiến vương quyền được thai nghén vào khoảng thời gian 2014 -
              2015. Và đến 2017, mùa 1 của cuộc thi đã chính thức lên sóng. Mặc
              dù gặp nhiều khó khăn và thử thách nhưng với sự quyết tâm, và niềm
              đam mê, BTC đã vượt qua tất cả để cho ra đời thêm nhiều mùa thành
              công.
            </p>
          </div>
        </div>
        <div className="bottom">
          <img class="previewimage" src={ccvq1} alt=""></img>
          <img class="previewimage" src={ccvq2} alt=""></img>
          <img class="previewimage" src={ccvq4} alt=""></img>
          <img class="previewimage" src={ccvq5} alt=""></img>
        </div>
      </div>
    </body>
  );
}

export default History;

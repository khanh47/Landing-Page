import "./style.css";
import img1 from './images/IMG_5643.jpeg';
import img2 from './images/IMG_6399.jpeg';
import img3 from './images/IMG_8802.jpeg';
import img4 from './images/IMG_8885.jpeg';
import img5 from './images/IMG_9612-2.jpeg';

function CCVQ22() {
  return (
    <body>
      <div class="content">
        <div class="mid">
          <h2>Tầm nhìn</h2>
          <ul>
            <li>
              Cải thiện chương trình, xây dựng chương trình học thuật lớn nhất
              biên hòa nói riêng và Đồng Nai nói chung.
            </li>
            <li>
              Khẳng định vị thế CCVQ trên bản đồ các cuộc thi học thuật Việt
              Nam.
            </li>
            <li>
              Tạo một môi trường chuyên nghiệp cho các bạn trẻ có cơ hội học
              tập, tổ chức chương trình.
            </li>
          </ul>
          <img src="Images/Rectangle 53.png" alt="Tam nhin"></img>
        </div>
        <div class="ccvq22">
          <h1>CCVQ22</h1>
          <img
            src={img1}
            alt="CCVQ2022-1"
            style="width: 519px; height: 364px;"
          ></img>
          <img
            src="CCVQ2022 Img/_MG_8802.jpeg"
            alt="CCVQ2022-2"
            style="width: 519px; height: 364px;"
          ></img>
          <img
            src={img4}
            alt="CCVQ2022-3"
            style="width: 519px; height: 364px;"
          ></img>
          <img
            src={img5}
            alt="CCVQ2022-4"
            style="width: 780px; height: 494px;"
          ></img>
          <img
            src={img2}
            alt="CCVQ2022-5"
            style="width: 780px; height: 494px;"
          ></img>
        </div>
      </div>
    </body>
  );
}

export default CCVQ22;

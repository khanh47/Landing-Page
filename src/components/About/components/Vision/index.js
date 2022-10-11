import Rectangle from "./Images/Rectangle 53.png";
import './style.css';

const Vision = () => {
  return (
    <body>
      <div class="mid">
        <h2>Tầm nhìn</h2>
        <ul>
          <li>
            Cải thiện chương trình, xây dựng chương trình học thuật lớn nhất
            biên hòa nói riêng và Đồng Nai nói chung.
          </li>
          <li>
            Khẳng định vị thế CCVQ trên bản đồ các cuộc thi học thuật Việt Nam.
          </li>
          <li>
            Tạo một môi trường chuyên nghiệp cho các bạn trẻ có cơ hội học tập,
            tổ chức chương trình.
          </li>
        </ul>
        <img src={Rectangle} alt="Tam nhin" />
      </div>
    </body>
  );
};

export default Vision;

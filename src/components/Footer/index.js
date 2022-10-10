import "./style.css";
import logoCCVQnew from "./images/logoCCVQnew.png";
import phone from "./images/phone.png";
import address from "./images/address.png";
import mail from "./images/mail.png";
import tiktok from "./images/tiktok.png";
import youtube from "./images/youtube.png";
import facebook from "./images/facebook.png";
import bgCCVQ from "./images/bgCCVQ.png";

const Footer = () => {
  return (
    <footer class="footer">
      <img src={bgCCVQ} class="bg-image" />
      <div class="main-content">
        <div class="left box">
          <img src={logoCCVQnew} alt="logoCCVQnew" class="logoCCVQnew" />
          <div class="content">
            <p>Theo dõi tại:</p>
            <div class="follow">
              <img src={facebook} alt="facebook" class="social" />
              <img src={tiktok} alt="tiktok" class="social" />
              <img src={youtube} alt="youtube" class="social" />
            </div>
          </div>
        </div>
        <div class="center box">
          <h2 class="footer__heading">Liên hệ</h2>
          <div class="content">
            <ul class="footer-list">
              <li class="footer-item">
                <a href="" class="footer-item__link">
                  <img src={phone} alt="Phone" class="icon" />
                  0814516068 - Thầy Hoàng
                </a>
              </li>
              <li class="footer-item">
                <a href="" class="footer-item__link">
                  <img src={mail} alt="mail" class="icon" />
                  cuocchienvuongquyenltv@gmail.com
                </a>
              </li>
              <li class="footer-item">
                <a href="" class="footer-item__link">
                  <img src={address} alt="address" class="icon" />2 Lê Quý Đôn,
                  Tân Hiệp, Biên Hòa, Đồng Nai
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right box">
          <h2 class="footer__heading">Liên lạc</h2>
          <div class="content">
            <form action="">
              <div class="form__row">
                <input type="text" placeholder="Tên" />
              </div>
              <div class="form__row">
                <input type="text" placeholder="Địa chỉ email" />
              </div>
              <div class="form__row">
                <div class="field">
                  <input type="text" placeholder="Nội dung" />
                </div>
              </div>
              <div class="form__row">
                <button class="btn">Gửi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

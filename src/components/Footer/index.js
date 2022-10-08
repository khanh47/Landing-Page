import './style.css'
import logoCCVQnew from './images/logoCCVQnew.png'
import phone from './images/phone.png'
import address from './images/address.png'
import mail from './images/mail.png'
import tiktok from './images/tiktok.png'
import youtube from './images/youtube.png'
import facebook from './images/facebook.png'

const Footer = () => {
  return (
    <footer>
      <div class="grid">
        <div class="bg-image"></div>
        <div class="grid__row">
            <div class="grid__column-2-3">
                <img src={logoCCVQnew} alt="logoCCVQnew" class="logoCCVQnew"/>
                <p class="follow">Theo dõi tại:</p>
                <img src={facebook}  alt="facebook" class="icon"/>
                <img src={tiktok}  alt="tiktok" class="icon"/>
                <img src={youtube}  alt="youtube" class="icon"/>
            </div>
            <div class="grid__column-2-3">
                <h3 class="footer__heading">Liên hệ</h3>
                <ul class="footer-list">
                  <li class="footer-item">
                    <a href="" class="footer-item__link">
                      <img src={phone}  alt="Phone" class="icon"/>
                      0814516068 - Thầy Hoàng
                    </a>
                  </li>
                  <li class="footer-item">
                      <img src={mail}  alt="mail" class="icon"/>
                    <a href="" class="footer-item__link">cuocchienvuongquyenltv@gmail.com</a>
                  </li>
                  <li class="footer-item">
                      <img src={address}  alt="address" class="icon"/>
                      <a href="" class="footer-item__link">2 Lê Quý Đôn, Tân Hiệp, Biên Hòa, Đồng Nai</a>
                  </li>
                </ul>
            </div>
            <div class="grid__column-2-3">
                <h3 class="footer__heading">Liên lạc</h3>
                <form action="">
                  <div class="form__row">
                    <input type="text" placeholder="Tên"/>
                  </div>
                  <div class="form__row">
                    <input type="text" placeholder="Địa chỉ email"/>
                  </div>
                  <div class="form__row">
                    <input type="text" placeholder="Nội dung"/>
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
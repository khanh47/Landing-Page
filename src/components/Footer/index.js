import './style.css'

const Footer = () => {
  return (
    <footer>
      <div class="grid">
        <div class="bg-image"></div>
        <div class="grid__row">
            <div class="grid__column-2-4">
                <img src="/images/logoCCVQnew.png" alt="logoCCVQnew"/>
                <p class="follow">theo dõi tại</p>
            </div>
            <div class="grid__column-2-4">
                <h3 class="footer__heading">Liên hệ</h3>
                <ul class="footer-list">
                  <li class="footer-item">
                    <a href="" class="footer-item__link">
                      <img src="../images/phone.png"></img>
                      0814516068 - Thầy Hoàng
                    </a>
                  </li>
                  <li class="footer-item">
                    <a href="" class="footer-item__link">cuocchienvuongquyenltv@gmail.com</a>
                  </li>
                  <li class="footer-item">
                    <a href="" class="footer-item__link">2 Lê Quý Đôn, Tân Hiệp, Biên Hòa, Đồng Nai</a>
                  </li>
                </ul>
            </div>
            <div class="grid__column-2-4">
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
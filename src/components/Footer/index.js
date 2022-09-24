import './style.css'

const Footer = () => {
  return (
    <header class="header">
      <div class="grid">
        <div class="grid__row">
            <div class="grid__column-2-4">
            <div class="grid__column-2-4"></div>
                <h3 class="footer__heading">Liên hệ</h3>
                <ul class="footer-list">
                  <li class="footer-item">
                    <a href="" class="footer-item__link">0814516068 - Thầy Hoàng</a>
                    <a href="" class="footer-item__link">cuocchienvuongquyenltv@gmail.com</a>
                    <a href="" class="footer-item__link">2 Lê Quý Đôn, Tân Hiệp, Biên Hòa, Đồng Nai</a>
                  </li>
                </ul>
            </div>
            <div class="grid__column-2-4">
                <h3 class="footer__heading">Liên lạc</h3>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
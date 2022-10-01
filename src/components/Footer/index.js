import './style.css'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="grid">
        <div class="grid__row">
            <div class="grid__column-2-4">
                <p class="">theo dõi tại</p>
            </div>
            <div class="grid__column-2-4">
                <h3 class="footer__heading">Liên hệ</h3>
                <ul class="footer-list">
                  <li class="footer-item">
                    <a href="" class="footer-item__link">0814516068 - Thầy Hoàng</a>
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
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import './style.css'
import search from './images/search.png'

const Navbar = () => {
  return (
    <header class="header">
      <div class="header_navbar">
        <div class="home">
          <h1 class="home1">CUỘC CHIẾN</h1>
          <div>
            <h1 class="home2">VƯƠNG QUYỀN</h1>
            <img class="logoCCVQ" src="logoCCVQ.png" alt="logoCCVQ" />
          </div>
          <img class="searchIcon" src={search} alt="search" />
        </div>
        <ul class="header_navbar_list">
          <li class="list">Giới thiệu</li>
          <li class="list">Ban tổ chức</li>
          <li class="list">Cuộc thi</li>
          <li class="list">Liên hệ</li>
          <li class="list">Hỗ trợ</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

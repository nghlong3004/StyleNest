import React from "react";
import "./Footer.css"; // Nếu bạn có file CSS riêng cho footer

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-section">
        <h3>Nếu bạn có gì thắc mắc, liên lạc với chúng tôi qua:</h3>
        <ul className="column">
          <li>Hotline: 0123456789</li>
          <li>Email: gưegwgewgwrgwrgwgwr@gmail.com</li>
          <li>Địa chỉ: 32 Nguyen Xa, Minh Khai, Bac Tu Liem, Ha Noi</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Thời trang nam:</h3>
        <ul className="column">
          <li>Áo Bomber</li>
          <li>Áo Polo</li>
          <li>Quần jean</li>
          <li>Quần âu</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Thời trang nữ:</h3>
        <ul className="column">
          <li>Áo sơ mi</li>
          <li>Áo len</li>
          <li>Quần ống rộng</li>
          <li>Quần âu</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Thời trang trẻ em:</h3>
        <ul className="column">
          <li>Váy (các kích cỡ)</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Phụ kiện:</h3>
        <ul className="column">
          <li>Túi đeo chéo</li>
          <li>Mũ</li>
          <li>Thắt lưng</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

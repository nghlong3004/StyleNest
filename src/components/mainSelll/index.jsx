import React, { useState, useEffect } from "react";
import useCategoryManagement from "../../store"; // Import hook quản lý danh mục
import Login from "../login"; // Import component đăng nhập
import Sign from "../sign"; // Import component đăng ký
import "./style.scss"; // Import file style SCSS
import { useNavigate } from "react-router-dom"; // Import hook điều hướng

const Home = () => {
  // Lấy dữ liệu danh mục từ useCategoryManagement
  const {
    nam,
    nu,
    treEm,
    phukien,
    addItem,
    deleteItem,
    updateItem,
    modifyItemField,
  } = useCategoryManagement();
  const navigate = useNavigate(); // Hook để điều hướng
  const [showSignIn, setShowSignIn] = useState(false); // Trạng thái hiển thị modal đăng nhập
  const [showSignUp, setShowSignUp] = useState(false); // Trạng thái hiển thị modal đăng ký
  const [activeSection, setActiveSection] = useState("header"); // Phần đang active khi scroll
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [isAdmin, setIsAdmin] = useState(false); // Trạng thái quyền admin

  // Mở/đóng modal đăng nhập
  const toggleSignIn = () => {
    setShowSignIn((prev) => !prev);
    setShowSignUp(false);
  };

  // Mở/đóng modal đăng ký
  const toggleSignUp = () => {
    setShowSignUp((prev) => !prev);
    setShowSignIn(false);
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    console.log("Đã đăng xuất");
  };

  // Xử lý submit form đăng nhập
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Đăng nhập:", email, password);

    // Giả lập kiểm tra đăng nhập
    if (email === "admin@example.com" && password === "admin123") {
      setIsLoggedIn(true);
      setIsAdmin(true); // Quyền admin
      setShowSignIn(false);
    } else if (email && password) {
      setIsLoggedIn(true);
      setIsAdmin(false); // User thường
      setShowSignIn(false);
    } else {
      alert("Thông tin đăng nhập không hợp lệ!");
    }
  };

  // Xử lý submit form đăng ký
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Đăng ký:", name, email, password);

    // Giả lập đăng ký thành công
    if (name && email && password) {
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
      setShowSignUp(false);
      setShowSignIn(true); // Mở modal đăng nhập
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
  };

  // Xử lý sự kiện scroll để cập nhật activeSection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["header", "nam", "nu", "tre_em", "phu_kien"];
      let currentSection = "header";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="layout">
        {/* Header */}
        <div id="header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3205/3205438.png"
            alt="Logo"
            onClick={() => navigate("/")} // Điều hướng về trang chủ
          />
          <div id="can">
            {/* Hiển thị nút dựa trên trạng thái đăng nhập */}
            {isLoggedIn ? (
              <>
                <button onClick={handleLogout}>
                  <a className="logout">Đăng xuất</a>
                </button>
                {isAdmin && (
                  <button onClick={() => navigate("/Admin")}>
                    <a className="profile">Profile</a>
                  </button>
                )}
              </>
            ) : (
              <>
                <button onClick={toggleSignIn}>
                  <a className="signIn">Đăng nhập</a>
                </button>
                <button onClick={toggleSignUp}>
                  <a className="signUp">Đăng ký</a>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Navigation */}
        <ul id="navigation">
          {[
            { id: "header", name: "TRANG CHỦ" },
            { id: "nam", name: "THỜI TRANG NAM" },
            { id: "nu", name: "THỜI TRANG NỮ" },
            { id: "tre_em", name: "THỜI TRANG TRẺ EM" },
            { id: "phu_kien", name: "PHỤ KIỆN" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Banner hình lớn */}
        <div id="big_img">
          <img
            src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/YUPS605tR19BUHEldm7XCPC5Y5Mw7AsN.jpg"
            alt="Banner"
          />
        </div>

        {/* Nội dung chính */}
        <div id="container">
          <hr id="nam" />
          <div className="fashion">
            <h2>THỜI TRANG NAM</h2>
            <div className="fashion_nam">
              {nam.map((product, index) => (
                <a
                  href={`/product/${index + 1}`} // Sử dụng vị trí (index + 1) làm id
                  className="product"
                  key={index}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p className="name">{product.name}</p>
                    <p className="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <hr id="nu" />
          <div className="fashion">
            <h2>THỜI TRANG NỮ</h2>
            <div className="fashion_nam">
              {nu.map((product, index) => (
                <a
                  href={`/product/${index + 1}`}
                  className="product"
                  key={index}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p className="name">{product.name}</p>
                    <p className="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <hr id="tre_em" />
          <div className="fashion">
            <h2>THỜI TRANG TRẺ EM</h2>
            <div className="fashion_nam">
              {treEm.map((product, index) => (
                <a
                  href={`/product/${index + 1}`}
                  className="product"
                  key={index}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p className="name">{product.name}</p>
                    <p className="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <hr id="phu_kien" />
          <div className="fashion">
            <h2>PHỤ KIỆN</h2>
            <div className="fashion_nam">
              {phukien.map((product, index) => (
                <a
                  href={`/product/${index + 1}`}
                  className="product"
                  key={index}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p className="name">{product.name}</p>
                    <p className="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
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

        {/* Modal đăng nhập */}
        {showSignIn && (
          <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Login
                onSubmit={handleSignInSubmit}
                toggleSignIn={toggleSignIn}
                toggleSignUp={toggleSignUp} // Truyền toggleSignUp để chuyển sang đăng ký
              />
            </div>
          </div>
        )}

        {/* Modal đăng ký */}
        {showSignUp && (
          <div className="modal-overlay" onClick={() => setShowSignUp(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Sign
                onSubmit={handleSignUpSubmit}
                toggleSignUp={toggleSignUp}
                toggleSignIn={toggleSignIn} // Truyền toggleSignIn để chuyển sang đăng nhập
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

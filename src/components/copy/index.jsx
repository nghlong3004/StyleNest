import React, { useState, useEffect } from "react";
import Login from "../login";
import Sign from "../sign";
import "./style.scss";

const Home = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [activeSection, setActiveSection] = useState("header");

  const toggleSignIn = () => {
    setShowSignIn((prev) => !prev);
    setShowSignUp(false);
  };

  const toggleSignUp = () => {
    setShowSignUp((prev) => !prev);
    setShowSignIn(false);
  };

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

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập:", e.target.email.value, e.target.password.value);
    setShowSignIn(false);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Đăng ký:",
      e.target.name.value,
      e.target.email.value,
      e.target.password.value
    );
    setShowSignUp(false);
  };

  return (
    <>
      <div id="layout">
        <div id="header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3205/3205438.png"
            alt="Logo"
          />
          <div id="can">
            <button onClick={toggleSignIn}>
              <a className="signIn">Đăng nhập</a>
            </button>
            <button onClick={toggleSignUp}>
              <a className="signUp">Đăng ký</a>
            </button>
          </div>
        </div>
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
        <div id="big_img">
          <img src="https://1557691689.e.cdneverest.net/fast/0x0/filters:format(webp)/static.5sfashion.vn/storage/home/slider/YUPS605tR19BUHEldm7XCPC5Y5Mw7AsN.jpg" />
        </div>
        <div id="container">
          <hr id="nam" />
          <div className="fashion">
            <h2>THỜI TRANG NAM</h2>
            <div className="fashion_nam">
              {[
                {
                  id: "men1",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp3-09851ea2-f541-42f7-a962-2c02055d85df.jpg?v=1731513403483",
                  name: "Áo Khoác Da Lộn Nam 2 Lớp",
                  price: "1.860.000₫",
                },
                {
                  id: "men2",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp8-4069b06d-4ec4-4029-9124-ef50cbd0cbd9.jpg?v=1731320140383",
                  name: "Áo polo nam phối màu ND008",
                  price: "450.000₫",
                },
                {
                  id: "men3",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp2-4-b7157267-7641-4ddb-9121-7a7026c92dae.jpg?v=1731845276390",
                  name: "Quần Jeans Nam Slim Denim Like Cơ Bản ND006",
                  price: "490.000₫",
                },
                {
                  id: "men4",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp1-6690bfd4-f853-4f8d-b948-0fee533dc6fe.jpg?v=1731845054833",
                  name: "Quần Jeans Nam Slim Denim Like Cơ Bản",
                  price: "680.000₫",
                },
                {
                  id: "men5",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp4-e1ab086b-aeda-487d-a812-eea86050dbc5.jpg?v=1731513154860",
                  name: "Quần Jeans nam phom slimfit",
                  price: "860.000₫",
                },
                {
                  id: "men6",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp5-0d36d816-4d36-4665-bbf7-2549f87638a7.jpg?v=1731512874167",
                  name: "Quần Jeans Đen Slimfit 5 Túi",
                  price: "860.000₫",
                },
              ].map((product) => (
                <a
                  href={`/product/${product.id}`}
                  className="product"
                  key={product.id}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p id="name">{product.name}</p>
                    <p id="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <hr id="nu" />
          <div className="fashion">
            <h2>THỜI TRANG NỮ</h2>
            <div className="fashion_nam">
              {[
                {
                  id: "women1",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp4-9e2c1a75-f4c2-4a8d-a9f7-340df225e4be.jpg?v=1731552654473",
                  name: "Quần Dài Nữ Dáng Suông",
                  price: "680.000₫",
                },
                {
                  id: "women2",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp3-92d85e87-b843-4d75-b9fd-f008f8a82a0d.jpg?v=1731552473213",
                  name: "Quần Jeans Nữ Dáng Crop",
                  price: "780.000₫",
                },
                {
                  id: "women3",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp1-3-07cbb278-d6b5-4abc-aa4a-38bb07e4f088.jpg?v=1731552741360",
                  name: "Quần Jeans 5 Túi Siêu Co Giãn",
                  price: "680.000₫",
                },
                {
                  id: "women4",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp11.jpg?v=1731125392907",
                  name: "Quần Dài Nữ Dáng Suông Chất Liệu Mềm Mát",
                  price: "368.000₫",
                },
                {
                  id: "women5",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp15-2.jpg?v=1731125521717",
                  name: "Váy liền nữ dáng dài phối màu",
                  price: "628.000₫",
                },
                {
                  id: "women6",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp10.jpg?v=1731125371523",
                  name: "Áo Nỉ Nữ Phối Lá Cổ Dáng Relax",
                  price: "568.000₫",
                },
              ].map((product) => (
                <a
                  href={`/product/${product.id}`}
                  className="product"
                  key={product.id}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p id="name">{product.name}</p>
                    <p id="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <hr id="tre_em" />
          <div className="fashion">
            <h2>THỜI TRANG TRẺ EM</h2>
            <div className="fashion_nam">
              {[
                {
                  id: "kids1",
                  img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8sxk5ouvlaa35",
                  name: "Sét bộ quần áo bé gái TN68",
                  price: "99.000₫",
                },
                {
                  id: "kids2",
                  img: "https://down-vn.img.susercontent.com/file/sg-11134201-7rdx7-lza0tcn1djbaf6",
                  name: "Bộ Cộc Tay Bé Trai Thời Trang DGG",
                  price: "70.000₫",
                },
                {
                  id: "kids3",
                  img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m45w7adk9hgg96",
                  name: "Bộ Cộc Tay Cho Bé Trai Polo Chữ On",
                  price: "78.000₫",
                },
                {
                  id: "kids4",
                  img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lvg8akmqnm317a",
                  name: "Bộ quần áo bé trai (Mã 24 )",
                  price: "55.900₫",
                },
                {
                  id: "kids5",
                  img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m80x3yjbmkw462",
                  name: "Bộ Quần Áo Ba Lỗ Cho Bé Trai Chữ YES OH",
                  price: "69.000₫",
                },
                {
                  id: "kids6",
                  img: "https://down-vn.img.susercontent.com/file/2b283d60ff309068e2ac6ab933ba09fc",
                  name: "Bộ quần áo mùa hè bé trai HE2",
                  price: "52.000₫",
                },
              ].map((product) => (
                <a
                  href={`/product/${product.id}`}
                  className="product"
                  key={product.id}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p id="name">{product.name}</p>
                    <p id="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <hr id="phu_kien" />
          <div className="fashion">
            <h2>PHỤ KIỆN</h2>
            <div className="fashion_nam">
              {[
                {
                  id: "accessory1",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp-1.jpg?v=1731849249067",
                  name: "Túi Unisex Đeo Chéo Nắp Nam Châm",
                  price: "868.000₫",
                },
                {
                  id: "accessory2",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp8-cc2dfef7-6d19-4c03-ac59-32ad42a21589.jpg?v=1731849926150",
                  name: "Mũ Lưỡi Trai Phối Màu Thêu Chữ P",
                  price: "268.000₫",
                },
                {
                  id: "accessory3",
                  img: "https://bizweb.dktcdn.net/100/534/571/products/sp7-b7493e19-ed59-4e84-a899-7f2e0f049b58.jpg?v=1731849854890",
                  name: "Mũ Lưỡi Trai Thêu Space Màu Navy",
                  price: "138.000₫",
                },
                {
                  id: "accessory4",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp6-7f574097-3b9b-458d-becf-2e0e47e7a4b1.jpg?v=1731849773397",
                  name: "Mũ Lưỡi Trai Thêu Space Màu Đỏ",
                  price: "138.000₫",
                },
                {
                  id: "accessory5",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp5-675b885f-c509-4788-8a9c-d26587a531b8.jpg?v=1731849700200",
                  name: "Thắt Lưng Nam Khoá Tự Động Phối Sọc",
                  price: "480.000₫",
                },
                {
                  id: "accessory6",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp4-ceae09b5-3e76-47ed-9ff7-e63f8bbad6d7.jpg?v=1731849611307",
                  name: "Thắt Lưng Nam Khoá Tự Động Mặt Kim Loại",
                  price: "480.000₫",
                },
                {
                  id: "accessory7",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp3-9d43f0ba-32f5-4488-a14f-bf4f6ff6e04a.jpg?v=1731849470710",
                  name: "Thắt Lưng Nam Khoá Tự Động Phối Nhám",
                  price: "680.000₫",
                },
                {
                  id: "accessory8",
                  img: "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp2-2fe29987-73db-472e-a30e-48379172c671.jpg?v=1731849530737",
                  name: "Thắt Lưng Nam Khoá Cài Kim Loại Viền Vuông",
                  price: "368.000₫",
                },
              ].map((product) => (
                <a
                  href={`/product/${product.id}`}
                  className="product"
                  key={product.id}
                >
                  <div>
                    <img src={product.img} alt={product.name} />
                    <p id="name">{product.name}</p>
                    <p id="price">{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

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
              />
            </div>
          </div>
        )}

        {/* Modal đăng ký */}
        {showSignUp && (
          <div className="modal-overlay" onClick={() => setShowSignUp(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Sign onSubmit={handleSignUpSubmit} toggleSignUp={toggleSignUp} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

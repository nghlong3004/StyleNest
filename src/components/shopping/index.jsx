import React, { useState } from "react";
import { product, update } from "./app";
const MyApp = () => {
  const [idl, setID] = useState(0);
  const [san, setSan] = useState("0");
  const handleProduct = (index) => {
    setSan(product[index].img);
  };

  return (
    <>
      <div id="header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3205/3205438.png"
          alt="logo"
        />
        <div>
          <a href="#" className="sign">
            Sign in/
          </a>
          <a href="#" className="sign">
            Sign up
          </a>
        </div>
      </div>

      <ul id="navigation">
        <li>
          <a href="#header" className="active">
            TRANG CHỦ
          </a>
        </li>
        <li>
          <a href="#nam">THỜI TRANG NAM</a>
        </li>
        <li>
          <a href="#nu">THỜI TRANG NỮ</a>
        </li>
        <li>
          <a href="#tre_em">THỜI TRANG TRẺ EM</a>
        </li>
        <li>
          <a href="#phu_kien">PHỤ KIỆN</a>
        </li>
      </ul>

      <div id="main_img">
        <img
          src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/slider_1.jpg?1724746453440"
          alt="main"
        />
      </div>

      <div id="container">
        {/* Section: Nam */}
        <hr id="nam" />
        <CategorySection title="THỜI TRANG NAM" items={maleFashion} />

        {/* Section: Nữ */}
        <hr id="nu" />
        <CategorySection title="THỜI TRANG NỮ" items={femaleFashion} />

        {/* Section: Trẻ em */}
        <hr id="tre_em" />
        <CategorySection title="THỜI TRANG TRẺ EM" items={kidsFashion} />

        {/* Section: Phụ kiện */}
        <hr id="phu_kien" />
        <CategorySection title="PHỤ KIỆN" items={accessories} />
      </div>

      <div id="footer">
        <div>
          <h3>Nếu bạn có gì thắc mắc, liên lạc với chúng tôi qua:</h3>
          <ul className="column">
            <li>Hotline: 0123456789</li>
            <li>Email: example@gmail.com</li>
            <li>Địa chỉ: 32 Nguyen Xa, Minh Khai, Bac Tu Liem, Ha Noi</li>
          </ul>
        </div>

        <div>
          <h3>Thời trang nam:</h3>
          <ul className="column">
            <li>Áo Bomber</li>
            <li>Áo Polo</li>
            <li>Quần jean</li>
            <li>Quần âu</li>
          </ul>
        </div>
      </div>
      <p>nhập số cần thay đổi </p>
      <input type="text" onChange={(e) => setID(e.target.value)} />
      <button onClick={(idl) => handleProduct(idl)}>Sửa</button>
      <img src={san} alt="" />
      <img src={san} alt="" />
    </>
  );
};

// Reusable Product List Section
const CategorySection = ({ title, items }) => (
  <div className="fashion">
    <h2>{title}</h2>
    {items.map((item, index) => (
      <a href="#" className="product" key={index}>
        <div>
          <img src={item.image} alt={item.name} />
          <p id="name">{item.name}</p>
          <p id="price">{item.price}</p>
        </div>
      </a>
    ))}
  </div>
);

// Dummy data (use real data or fetch from API in production)
const maleFashion = [
  {
    name: "ÁO KHOÁC",
    price: "300.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp3-09851ea2-f541-42f7-a962-2c02055d85df.jpg?v=1731513403483",
  },

  {
    name: "ÁO KHOÁC",
    price: "300.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp3-09851ea2-f541-42f7-a962-2c02055d85df.jpg?v=1731513403483",
  },
];

const femaleFashion = [
  {
    name: "ÁO KHOÁC",
    price: "300.000 VNĐ",
    image:
      "https://bizweb.dktcdn.net/thumb/large/100/534/571/products/sp4-9e2c1a75-f4c2-4a8d-a9f7-340df225e4be.jpg?v=1731552654473",
  },
];

const kidsFashion = [
  {
    name: "ÁO KHOÁC",
    price: "300.000 VNĐ",
    image:
      "//bizweb.dktcdn.net/thumb/medium/100/254/343/products/77-1024x1024-2x-min.png?v=1504979693100",
  },
];

const accessories = [
  {
    name: "ÁO KHOÁC",
    price: "300.000 VNĐ",
    image:
      "//bizweb.dktcdn.net/thumb/large/100/534/571/products/sp-1.jpg?v=1731849249067",
  },
];

export default MyApp;

import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/reset.css";

const Sign = ({ onSubmit, toggleSignUp, toggleSignIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e); // Gọi onSubmit từ Home.jsx
  };

  return (
    <div id="dang_ky" className="modal">
      <div id="container">
        <div className="login__header">
          <div className="login__header__main">
            <h1>Đăng ký</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Họ và tên</label>
                <Input name="name" placeholder="Họ và tên" required />
              </div>
              <div>
                <label>Email</label>
                <Input name="email" placeholder="Email" type="email" required />
              </div>
              <div>
                <label>Mật khẩu</label>
                <Input.Password
                  name="password"
                  placeholder="Mật khẩu"
                  required
                />
              </div>
              <Button type="primary" htmlType="submit" block>
                Đăng ký
              </Button>
              <Button
                type="default"
                onClick={toggleSignUp}
                block
                className="white_h"
              >
                Đóng
              </Button>
              <Button
                type="link"
                onClick={toggleSignIn}
                block
                className="white"
              >
                Đăng nhập
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;

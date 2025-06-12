import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/reset.css";

const Login = ({ onSubmit, toggleSignIn, toggleSignUp }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e); // Gọi onSubmit từ Home.jsx
  };

  return (
    <div id="dang_nhap" className="modal">
      <div id="container">
        <div className="login__header">
          <div className="login__header__main">
            <h1>Đăng nhập</h1>
            <form onSubmit={handleSubmit}>
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
                Đăng nhập
              </Button>
              <Button type="default" onClick={toggleSignIn} block>
                Đóng
              </Button>
              <Button
                type="link"
                onClick={toggleSignUp}
                block
                style={{ color: "#ffffff" }}
              >
                Đăng ký
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

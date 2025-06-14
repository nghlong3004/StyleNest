import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ isLoggedIn, isAdmin, handleLogout, toggleSignIn, toggleSignUp }) => {
  const navigate = useNavigate();

  return (
    <div id="header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3205/3205438.png"
        alt="Logo"
        onClick={() => navigate("/")} // Điều hướng về trang chủ
        style={{ cursor: "pointer" }}
      />
      <div id="can">
        {/* Hiển thị nút dựa trên trạng thái đăng nhập */}
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>
              <span className="logout">Đăng xuất</span>
            </button>
            {isAdmin && (
              <button onClick={() => navigate("/Admin")}>
                <span className="profile">Profile</span>
              </button>
            )}
          </>
        ) : (
          <>
            <button onClick={toggleSignIn}>
              <span className="signIn">Đăng nhập</span>
            </button>
            <button onClick={toggleSignUp}>
              <span className="signUp">Đăng ký</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
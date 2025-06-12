import React, { useState } from "react";
import { man, woman, children, accessory } from "./home";

// Hook tùy chỉnh để quản lý các danh mục
const useCategoryManagement = () => {
  const [nam, setNam] = useState(man); // Trạng thái danh mục nam
  const [nu, setNu] = useState(woman); // Trạng thái danh mục nữ
  const [treEm, setTreEm] = useState(children); // Trạng thái danh mục trẻ em
  const [phukien, setPhuKien] = useState(accessory); // Trạng thái danh mục phụ kiện

  // Thêm sản phẩm vào danh mục cụ thể
  const addItem = (category, item) => {
    switch (category) {
      case "nam":
        setNam([...nam, item]);
        break;
      case "nu":
        setNu([...nu, item]);
        break;
      case "treEm":
        setTreEm([...treEm, item]);
        break;
      case "phukien":
        setPhuKien([...phukien, item]);
        break;
      default:
        console.error("Danh mục không hợp lệ");
    }
  };

  // Xóa sản phẩm khỏi danh mục theo index
  const deleteItem = (category, index) => {
    switch (category) {
      case "nam":
        setNam(nam.filter((_, i) => i !== index));
        break;
      case "nu":
        setNu(nu.filter((_, i) => i !== index));
        break;
      case "treEm":
        setTreEm(treEm.filter((_, i) => i !== index));
        break;
      case "phukien":
        setPhuKien(phukien.filter((_, i) => i !== index));
        break;
      default:
        console.error("Danh mục không hợp lệ");
    }
  };

  // Cập nhật sản phẩm trong danh mục theo index
  const updateItem = (category, index, updatedItem) => {
    switch (category) {
      case "nam":
        setNam(
          nam.map((item, i) =>
            i === index ? { ...item, ...updatedItem } : item
          )
        );
        break;
      case "nu":
        setNu(
          nu.map((item, i) =>
            i === index ? { ...item, ...updatedItem } : item
          )
        );
        break;
      case "treEm":
        setTreEm(
          treEm.map((item, i) =>
            i === index ? { ...item, ...updatedItem } : item
          )
        );
        break;
      case "phukien":
        setPhuKien(
          phukien.map((item, i) =>
            i === index ? { ...item, ...updatedItem } : item
          )
        );
        break;
      default:
        console.error("Danh mục không hợp lệ");
    }
  };

  // Sửa một trường cụ thể của sản phẩm theo index
  const modifyItemField = (category, index, field, value) => {
    switch (category) {
      case "nam":
        setNam(
          nam.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
          )
        );
        break;
      case "nu":
        setNu(
          nu.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
          )
        );
        break;
      case "treEm":
        setTreEm(
          treEm.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
          )
        );
        break;
      case "phukien":
        setPhuKien(
          phukien.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
          )
        );
        break;
      default:
        console.error("Danh mục không hợp lệ");
    }
  };

  return {
    nam,
    nu,
    treEm,
    phukien,
    addItem,
    deleteItem,
    updateItem,
    modifyItemField,
  };
};

export default useCategoryManagement;

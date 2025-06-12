import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCategoryManagement from "../../store";
import "./style.scss";

const ProductManager = () => {
  const { nam, nu, treEm, phukien, addItem, deleteItem, updateItem } =
    useCategoryManagement();
  const navigate = useNavigate();

  // State quản lý danh mục, trang và modal
  const [currentCategory, setCurrentCategory] = useState("nam");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
    img2: "",
    des: "",
    detail: "",
    benefit: "",
  });

  const itemsPerPage = 6;

  // Lấy dữ liệu danh mục
  const getCategoryData = () => {
    const categories = { nam, nu, treEm, phukien };
    return categories[currentCategory] || [];
  };

  // Phân trang
  const categoryData = getCategoryData();
  const totalPages = Math.ceil(categoryData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categoryData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Mở modal để thêm/sửa sản phẩm
  const openModal = (product = null, index = null) => {
    if (product && index !== null) {
      setIsEditMode(true);
      setCurrentProduct({ ...product, index });
      setFormData({
        id: index + 1,
        name: product.name,
        price: product.price,
        img: product.img,
        img2: product.img2,
        des: product.des,
        detail: product.detail,
        benefit: product.benefit,
      });
    } else {
      setIsEditMode(false);
      setCurrentProduct(null);
      setFormData({
        id: categoryData.length + 1,
        name: "",
        price: "",
        img: "",
        img2: "",
        des: "",
        detail: "",
        benefit: "",
      });
    }
    setIsModalOpen(true);
  };

  // Đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setCurrentProduct(null);
    setFormData({
      id: "",
      name: "",
      price: "",
      img: "",
      img2: "",
      des: "",
      detail: "",
      benefit: "",
    });
  };

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Thêm hoặc sửa sản phẩm
  const handleAddOrEdit = () => {
    if (!formData.name || !formData.price || !formData.des) {
      alert("Vui lòng điền ít nhất tên, giá và mô tả!");
      return;
    }

    const productData = {
      id: isEditMode ? currentProduct.index + 1 : categoryData.length + 1,
      name: formData.name,
      price: parseFloat(formData.price) || 0, // Chuyển đổi giá sang số
      img: formData.img || "https://via.placeholder.com/150",
      img2: formData.img2 || "https://via.placeholder.com/150",
      des: formData.des,
      detail: formData.detail,
      benefit: formData.benefit,
    };

    if (isEditMode && currentProduct) {
      updateItem(currentCategory, {
        ...productData,
        index: currentProduct.index,
      });
    } else {
      addItem(currentCategory, productData);
    }
    closeModal();
  };

  // Xóa sản phẩm
  const handleDelete = (index) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      deleteItem(currentCategory, index);
    }
  };

  // Chuyển trang
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Danh sách các danh mục
  const categories = [
    { key: "nam", label: "Quản lý đồ Nam" },
    { key: "nu", label: "Quản lý đồ Nữ" },
    { key: "treEm", label: "Quản lý đồ Trẻ Em" },
    { key: "phukien", label: "Quản lý đồ Phụ Kiện" },
  ];

  return (
    <div className="product-manager">
      {/* Sidebar */}
      <div className="product-manager__sidebar">
        <div className="product-manager__sidebar-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3205/3205438.png"
            alt="Logo Trang Chủ"
            onClick={() => navigate("/")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          />
        </div>
        <nav className="product-manager__sidebar-nav">
          {categories.map(({ key, label }) => (
            <span
              key={key}
              className={`product-manager__sidebar-nav-item ${
                currentCategory === key ? "active" : ""
              }`}
              onClick={() => {
                setCurrentCategory(key);
                setCurrentPage(1);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                setCurrentCategory(key) &&
                setCurrentPage(1)
              }
            >
              {label}
            </span>
          ))}
          <span
            className={`product-manager__sidebar-nav-item ${
              currentCategory === phukien ? "active" : ""
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Về Trang Chủ
          </span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="product-manager__content">
        <div className="product-manager__header">
          <h2>Quản lý {currentCategory.toUpperCase()}</h2>
          <button
            className="product-manager__button product-manager__button--primary"
            onClick={() => openModal()}
          >
            Thêm sản phẩm
          </button>
        </div>

        {/* Table */}
        <table className="product-manager__table">
          <thead>
            <tr className="product-manager__table-header">
              <th className="product-manager__table-cell">Vị trí</th>
              <th className="product-manager__table-cell">Ảnh</th>
              <th className="product-manager__table-cell">Tên</th>
              <th className="product-manager__table-cell">Giá</th>
              <th className="product-manager__table-cell">Mô tả</th>
              <th className="product-manager__table-cell">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={startIndex + index} className="product-manager__item">
                  <td className="product-manager__table-cell">
                    {startIndex + index + 1}
                  </td>
                  <td className="product-manager__table-cell">
                    <img src={item.img} alt={item.name} width="40" />
                  </td>
                  <td className="product-manager__table-cell">{item.name}</td>
                  <td className="product-manager__table-cell">{item.price}</td>
                  <td className="product-manager__table-cell">
                    {item.des.slice(0, 50)}...
                  </td>
                  <td className="product-manager__table-cell">
                    <button
                      className="product-manager__table-button product-manager__table-button--edit"
                      onClick={() => openModal(item, startIndex + index)}
                      aria-label={`Sửa ${item.name}`}
                    >
                      ✏️
                    </button>
                    <button
                      className="product-manager__table-button product-manager__table-button--delete"
                      onClick={() => handleDelete(startIndex + index)}
                      aria-label={`Xóa ${item.name}`}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="product-manager__table-cell">
                  Không có sản phẩm nào trong danh mục này.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="product-manager__pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Trang trước"
            >
              Trước
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
                aria-label={`Trang ${page}`}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Trang sau"
            >
              Sau
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="product-manager__modal">
          <div className="product-manager__modal-content">
            <h2 className="product-manager__modal-title">
              {isEditMode ? "Sửa sản phẩm" : "Thêm sản phẩm"}
            </h2>
            <div className="product-manager__form">
              <label className="product-manager__label">
                Vị trí:
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  readOnly
                  className="product-manager__input"
                />
              </label>
              <label className="product-manager__label">
                Tên:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="product-manager__input"
                  required
                />
              </label>
              <label className="product-manager__label">
                Giá:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="product-manager__input"
                  required
                />
              </label>
              <label className="product-manager__label">
                Ảnh 1 (URL):
                <input
                  type="url"
                  name="img"
                  value={formData.img}
                  onChange={handleInputChange}
                  className="product-manager__input"
                />
              </label>
              <label className="product-manager__label">
                Ảnh 2 (URL):
                <input
                  type="url"
                  name="img2"
                  value={formData.img2}
                  onChange={handleInputChange}
                  className="product-manager__input"
                />
              </label>
              <label className="product-manager__label">
                Mô tả:
                <textarea
                  name="des"
                  value={formData.des}
                  onChange={handleInputChange}
                  className="product-manager__input"
                  required
                />
              </label>
              <label className="product-manager__label">
                Chi tiết:
                <textarea
                  name="detail"
                  value={formData.detail}
                  onChange={handleInputChange}
                  className="product-manager__input"
                />
              </label>
              <label className="product-manager__label">
                Lợi ích:
                <textarea
                  name="benefit"
                  value={formData.benefit}
                  onChange={handleInputChange}
                  className="product-manager__input"
                />
              </label>
            </div>
            <div className="product-manager__modal-actions">
              <button
                className="product-manager__modal-button product-manager__modal-button--save"
                onClick={handleAddOrEdit}
              >
                {isEditMode ? "Lưu" : "Thêm"}
              </button>
              <button
                className="product-manager__modal-button product-manager__modal-button--cancel"
                onClick={closeModal}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManager;

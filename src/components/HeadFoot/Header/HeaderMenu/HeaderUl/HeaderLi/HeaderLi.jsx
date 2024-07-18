import React from "react";
import "../../../../../../assets/header/popover.css";

const HeaderLi = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Danh mục
        </a>
        <ul className="dropdown-menu dropdown-menu-custom">
          <li className="box_popover">
            <a className="dropdown-item">Ngôn Tình</a>
            {/* <ul className="popover_list">
              <li className="box_popover">
                <a href="">Kinh dị</a>
                <ul className="popover_list">
                <li className="">
                  <a href="">Kinh dị</a>
                </li>
                </ul>
              </li>
              <li>Hài hước</li>
              <li>Lãng mạng</li>
            </ul> */}
          </li>
          <li>
            <a className="dropdown-item">Trọng Sinh</a>
          </li>
          <li>
            <a className="dropdown-item">Cổ Đại</a>
          </li>
          <li>
            <a className="dropdown-item">Tiên Hiệp</a>
          </li>
          <li>
            <a className="dropdown-item">Ngược</a>
          </li>
          <li>
            <a className="dropdown-item">Khác</a>
          </li>
          <li>
            <a className="dropdown-item">Dị Giới</a>
          </li>
          <li>
            <a className="dropdown-item">Huyền Huyễn</a>
          </li>
          <li>
            <a className="dropdown-item">Xuyên Không</a>
          </li>
          <li>
            <a className="dropdown-item">Sủng</a>
          </li>
          <li>
            <a className="dropdown-item">Cung Đấu</a>
          </li>
          <li>
            <a className="dropdown-item">Gia Đấu</a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default HeaderLi;

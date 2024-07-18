import React from 'react'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="header d-none d-lg-block">
        <nav className="navbar navbar-expand-lg navbar-dark header__navbar p-md-0">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>
                    <img src="/src/assets/images/logo_text.png" alt="Logo Suu Truyen" srcSet="" className="img-fluid"
                        style={{width: "200px"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <HeaderMenu />

                
            </div>
        </nav>
    </header>
    <div className="header-mobile d-sm-block d-lg-none">
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="/src/assets/images/logo_text.png" alt="Logo Suu Truyen" srcSet="" className="img-fluid"
                        style={{width: "200px"}}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark w-75" tabIndex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <img src="/src/assets/images/logo_text.png" alt="Logo Suu Truyen" srcSet="" className="img-fluid"
                            style={{width: "200px"}}/>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-3">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://suustore.com/#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Danh mục
                                </a>
                                <ul className="dropdown-menu dropdown-menu-custom">
                                    <li><a className="dropdown-item" href="#">Mạt
                                            Thế</a>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Xuyên
                                            Nhanh</a>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Hệ
                                            Thống</a>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Nữ
                                            Cường</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className="form-check form-switch d-flex align-items-center mb-3 p-0">
                            <label className="form-check-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    className="bi bi-brightness-high" viewBox="0 0 16 16" style={{fill: "#fff"}}>
                                    <path
                                        d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z">
                                    </path>
                                </svg>
                            </label>
                            <input className="form-check-input theme_mode" type="checkbox"
                                style={{
                                    transform: "scale(1.3)",
                                    marginLeft: "12px",
                                    marginRight: "12px"
                                }}/>

                            <label className="form-check-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 384 512"
                                    style={{fill: "#fff"}}>
                                    <path
                                        d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z">
                                    </path>
                                </svg>
                            </label>
                        </div>

                        <form className="d-flex header__form-search" action="" method="GET">
                            <input className="form-control search-story" type="text" placeholder="Tìm kiếm" name="key_word"
                                />
                            <div className="col-12 search-result shadow no-result d-none">
                                <div className="card text-white bg-light">
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush d-none">
                                            <li className="list-group-item">
                                                <a href="#" className="text-dark hover-title">Tự
                                                    cẩm</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <button className="btn" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                                    </path>
                                </svg>

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div className="bg-light header-bottom">
        <div className="container py-1">
            <p className="mb-0">Đọc truyện online, đọc truyện chữ, truyện full, truyện hay. Tổng hợp đầy đủ và cập nhật liên
                tục.</p>
        </div>
    </div>
    </>
  )
}

export default Header
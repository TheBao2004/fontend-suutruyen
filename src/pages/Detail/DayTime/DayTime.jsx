import React from 'react'
import TimeComic from './TimeComic/TimeComic'

const DayTime = () => {
  return (
    <>

<div className="row top-ratings">
                <div className="col-12 top-ratings__tab mb-2">
                    <div className="list-group d-flex flex-row" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="top-day-list"
                            data-bs-toggle="list"
                            href="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau#top-day" role="tab"
                            aria-controls="top-day" aria-selected="true">Ngày</a>
                        <a className="list-group-item list-group-item-action" id="top-month-list"
                            data-bs-toggle="list"
                            href="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau#top-month"
                            role="tab" aria-controls="top-month" aria-selected="false" tabIndex="-1">Tháng</a>
                        <a className="list-group-item list-group-item-action" id="top-all-time-list"
                            data-bs-toggle="list"
                            href="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau#top-all-time"
                            role="tab" aria-controls="top-all-time" aria-selected="false" tabIndex="-1">All
                            time</a>
                    </div>
                </div>
                <div className="col-12 top-ratings__content">
                    <div className="tab-content" id="nav-tabContent">


                        <div className="tab-pane fade show active" id="top-day" role="tabpanel"
                            aria-labelledby="top-day-list">
                            <ul>


                                <TimeComic />


                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-success rounded-circle">
                                            <span className="text-light">2</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/than-dao-dan-ton"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Thần
                                                Đạo Đan Tôn</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-info rounded-circle">
                                            <span className="text-light">3</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/me-vo-khong-loi-ve"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Mê
                                                Vợ Không Lối Về</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/ngon-tinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngôn
                                                    Tình
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/nguoc"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngược
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/sung"
                                                    className="text-decoration-none text-dark hover-title ">Sủng
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">4</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/dau-pha-thuong-khung"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Đấu
                                                Phá Thương Khung</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/di-gioi"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Dị
                                                    Giới
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">5</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/the-gioi-hoan-my"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Thế
                                                Giới Hoàn Mỹ</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/kiem-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Kiếm
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">6</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Cô
                                                Vợ Ngọt Ngào Có Chút Bất Lương (Vợ Mới Bất Lương Có Chút
                                                Ngọt)</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/ngon-tinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngôn
                                                    Tình
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/trong-sinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Trọng
                                                    Sinh
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/sung"
                                                    className="text-decoration-none text-dark hover-title ">Sủng
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">7</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/pham-nhan-tu-tien"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Phàm
                                                Nhân Tu Tiên</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/kiem-hiep"
                                                    className="text-decoration-none text-dark hover-title ">Kiếm
                                                    Hiệp
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">8</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/nhat-niem-vinh-hang"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Nhất
                                                Niệm Vĩnh Hằng</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">9</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/de-ba"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Đế
                                                Bá</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">10</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/re-quy-troi-cho"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Rể
                                                Quý Trời Cho</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/ngon-tinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngôn
                                                    Tình
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/do-thi"
                                                    className="text-decoration-none text-dark hover-title ">Đô Thị
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-pane fade" id="top-month" role="tabpanel"
                            aria-labelledby="top-month-list">
                            <ul>
                           
                            <TimeComic />

                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-success rounded-circle">
                                            <span className="text-light">2</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/than-dao-dan-ton"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Thần
                                                Đạo Đan Tôn</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-info rounded-circle">
                                            <span className="text-light">3</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/me-vo-khong-loi-ve"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Mê
                                                Vợ Không Lối Về</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/ngon-tinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngôn
                                                    Tình
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/nguoc"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngược
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/sung"
                                                    className="text-decoration-none text-dark hover-title ">Sủng
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">4</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/dau-pha-thuong-khung"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Đấu
                                                Phá Thương Khung</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/di-gioi"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Dị
                                                    Giới
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">5</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/the-gioi-hoan-my"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Thế
                                                Giới Hoàn Mỹ</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/kiem-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Kiếm
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">6</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Cô
                                                Vợ Ngọt Ngào Có Chút Bất Lương (Vợ Mới Bất Lương Có Chút
                                                Ngọt)</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/ngon-tinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngôn
                                                    Tình
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/trong-sinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Trọng
                                                    Sinh
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/sung"
                                                    className="text-decoration-none text-dark hover-title ">Sủng
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">7</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/pham-nhan-tu-tien"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Phàm
                                                Nhân Tu Tiên</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/kiem-hiep"
                                                    className="text-decoration-none text-dark hover-title ">Kiếm
                                                    Hiệp
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">8</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/nhat-niem-vinh-hang"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Nhất
                                                Niệm Vĩnh Hằng</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">9</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/de-ba"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Đế
                                                Bá</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">10</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/re-quy-troi-cho"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Rể
                                                Quý Trời Cho</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/ngon-tinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngôn
                                                    Tình
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/do-thi"
                                                    className="text-decoration-none text-dark hover-title ">Đô Thị
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-pane fade" id="top-all-time" role="tabpanel"
                            aria-labelledby="top-all-time-list">
                            <ul>
                            
                            <TimeComic />

                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-success rounded-circle">
                                            <span className="text-light">2</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/than-dao-dan-ton"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Thần
                                                Đạo Đan Tôn</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-info rounded-circle">
                                            <span className="text-light">3</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/dau-pha-thuong-khung"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Đấu
                                                Phá Thương Khung</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/di-gioi"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Dị
                                                    Giới
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">4</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Cô
                                                Vợ Ngọt Ngào Có Chút Bất Lương (Vợ Mới Bất Lương Có Chút
                                                Ngọt)</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/ngon-tinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Ngôn
                                                    Tình
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/trong-sinh"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Trọng
                                                    Sinh
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/sung"
                                                    className="text-decoration-none text-dark hover-title ">Sủng
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">5</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/pham-nhan-tu-tien"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Phàm
                                                Nhân Tu Tiên</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/kiem-hiep"
                                                    className="text-decoration-none text-dark hover-title ">Kiếm
                                                    Hiệp
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">6</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/nhat-niem-vinh-hang"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Nhất
                                                Niệm Vĩnh Hằng</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">7</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/de-ba"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Đế
                                                Bá</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">8</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/vu-dong-can-khon"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Vũ
                                                Động Càn Khôn</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rating-item d-flex align-items-center">
                                        <div className="rating-item__number bg-light border rounded-circle">
                                            <span className="text-dark">9</span>
                                        </div>
                                        <div className="rating-item__story">
                                            <a href="https://suustore.com/truyen/doc-ton-tam-gioi"
                                                className="text-decoration-none hover-title rating-item__story--name text-one-row">Độc
                                                Tôn Tam Giới</a>
                                            <div className="d-flex flex-wrap rating-item__story--categories">
                                                <a href="https://suustore.com/the-loai/tien-hiep"
                                                    className="text-decoration-none text-dark hover-title  me-1 ">Tiên
                                                    Hiệp
                                                    ,
                                                </a>
                                                <a href="https://suustore.com/the-loai/huyen-huyen"
                                                    className="text-decoration-none text-dark hover-title ">Huyền
                                                    Huyễn
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

    </>
  )
}

export default DayTime

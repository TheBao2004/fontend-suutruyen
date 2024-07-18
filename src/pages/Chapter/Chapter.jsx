import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "../../hooks/request";
import { getDetailChap } from "../../apis/functions";

const Chapter = () => {
  let { slug } = useParams();

  if (!slug) {
    return <Navigate to="/404" />;
  }

  const [chap, setChap] = useState({});
  const [nextChap, setNextChap] = useState({});
  const [prevChap, setPrevChap] = useState({});
  const [list, setList] = useState([]);
  const [comic, setComic] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const createData = async () => {
      const data = await getDetailChap(slug);
      setChap(data.data.chap);
      setList(data.data.list);
      setComic(data.data.comic);
    };

    createData();
  }, []);

  return (
    <>
      <main>
        <div
          className="modal fade"
          id="showListChap"
          tabIndex="-1"
          aria-labelledby="showListChapLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="showListChapLabel"></h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body p-0"
                style={{
                  maxHeight: "450px",
                  height: "fit-content",
                  overflowY: "auto",
                }}
              >
                <div className="list-group rounded-0">
                  {list &&
                    list.map((item, index) => {
                      let isPage = "";
                      if (item.id == chap?.id) {
                        isPage = "active";
                      }
                      return (
                        <a
                          key={index}
                          className={
                            "list-group-item list-group-item-action " + isPage
                          }
                        >
                          {" "}
                          {item.name}{" "}
                        </a>
                      );
                    })}
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="chapter-wrapper container my-5">
          <a href="#" className="text-decoration-none">
            <h1 className="text-center text-success">{comic?.name}</h1>
          </a>
          <a href="#" className="text-decoration-none">
            <p className="text-center text-dark">{chap?.name}</p>
          </a>
          <hr className="chapter-start container-fluid" />
          <div className="chapter-nav text-center">
            <div className="chapter-actions chapter-actions-origin d-flex align-items-center justify-content-center">
              <a
                className="btn btn-success me-1 chapter-prev"
                href="#"
                title=""
              >
                {" "}
                <span>Chương </span>trước
              </a>
              <button
                data-bs-toggle="modal"
                data-bs-target="#showListChap"
                className="btn btn-success chapter_jump me-1"
                data-story-id="3"
                data-slug-chapter="chuong-1"
                data-slug-story="nang-khong-muon-lam-hoang-hau"
              >
                <span>
                  <svg
                    style={{
                      fill: "#fff",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                  </svg>
                </span>
              </button>

              <div className="dropdown select-chapter me-1 d-none">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Chọn chương
                </a>

                <ul
                  className="dropdown-menu select-chapter__list"
                  aria-labelledby="dropdownMenuLink"
                ></ul>
              </div>
              <a className="btn btn-success chapter-next" title="">
                <span>Chương </span>tiếp
              </a>
            </div>
          </div>
          <hr className="chapter-end container-fluid" />

          <div className="chapter-content mb-3">
            <div
              className="visible-md visible-lg ads-responsive incontent-ad"
              id="ads-chapter-pc-top"
              align="center"
              style={{
                height: "90px",
              }}
            ></div>

            {comic && !comic?.book && chap?.content && (
              <>
                {JSON.parse(chap?.content).map((item, index) => {
                  return (
                    <div key={index} className="col-lg-8 mx-auto">
                      <img
                        src={"http://127.0.0.1:8000/storage/" + item}
                        alt={chap?.name}
                        className="w-100"
                      />
                    </div>
                  );
                })}
              </>
            )}

            {comic && comic?.book && chap?.content && (
              <div dangerouslySetInnerHTML={{ __html: chap?.content }}></div>
            )}
          </div>

          {/* <div className="text-center px-2 py-2 alert alert-success d-none d-lg-block" role="alert">Bạn có thể dùng phím
                mũi tên hoặc WASD để
                lùi/sang chương</div> */}
        </div>

        <div className="chapter-actions chapter-actions-mobile d-flex align-items-center justify-content-center">
          <a className="btn btn-success me-2 chapter-prev" href="#" title="">
            {" "}
            <span>Chương</span>trước 1
          </a>
          <button
            className="btn btn-success chapter_jump me-2"
            data-story-id="3"
            data-slug-chapter="chuong-1"
            data-slug-story="nang-khong-muon-lam-hoang-hau"
          >
            <span>
              <svg
                style={{
                  fill: "#fff",
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </span>
          </button>

          <div className="dropup select-chapter me-2 d-none">
            <a
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chọn chương
            </a>

            <ul
              className="dropdown-menu select-chapter__list"
              aria-labelledby="dropdownMenuLink"
            ></ul>
          </div>
          <a className="btn btn-success chapter-next" href="#" title="">
            <span>Chương </span>tiếp 1
          </a>
        </div>
      </main>
    </>
  );
};

export default Chapter;

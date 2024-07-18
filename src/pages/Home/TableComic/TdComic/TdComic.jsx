import React from "react";

const TdComic = ({ comic }) => {
  return (
    <>
      <div className="story-item-no-image">
        <div className="story-item-no-image__name d-flex align-items-center">
          <h3 className="me-1 mb-0 d-flex align-items-center">
            <svg
              style={{
                width: "10px",
                marginRight: "5px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg>
            <a
              href="#"
              className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
            >
              {comic.comic.name}
            </a>
          </h3>

          {comic.comic.status == 1 && (
            <span className="badge text-bg-info text-light me-1">Mới</span>
          )}
          {comic.comic.status == 3 && (
            <span className="badge text-bg-success text-light me-1">
              Hoàn thành
            </span>
          )}
          {comic.comic.status == 2 && (
            <span className="badge text-bg-warning">Cập nhật</span>
          )}
        </div>

        <div className="story-item-no-image__categories ms-2 d-none d-lg-block">
          <p className="mb-0">
            {
                comic.keywords.map((item) => {
                return <span key={item.slug} ><a
                    
                    href="#"
                    className="hover-title text-decoration-none text-info category-name"
                  >
                    {item.name}
                  </a>,{" "}</span>
                })
            }
          </p>
        </div>

        <div className="story-item-no-image__chapters ms-2">
          <a className="hover-title text-decoration-none text-dark">
            Chương {comic.chaps}
          </a>
        </div>
      </div>
    </>
  );
};

export default TdComic;

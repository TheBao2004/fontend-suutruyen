import React from "react";
import { env } from "../../helpers/const";

const Comic = ({ comic, chaps }) => {
  return (
    <>
      <div className="story-item">
        <a href="#" className="d-block text-decoration-none">
          <div className="story-item__image">
            <img
              src={env.FOLDER_UPLOADS + "/" + comic.thumbnail}
              alt="Tự Cẩm"
              className="img-fluid"
              width="150"
              height="230"
              loading="lazy"
            />
          </div>
          <h3 className="story-item__name text-one-row story-name">
            {comic.name}
          </h3>

          <div className="list-badge">
            {comic.status == 3 && (
              <span className="story-item__badge badge text-bg-success">
                Hoàn thành
              </span>
            )}

            {comic.status == 2 && (
              <span className="story-item__badge story-item__badge-hot badge text-bg-warning">
                Cập nhật
              </span>
            )}

            {comic.status == 1 && (
              <span className="story-item__badge story-item__badge-new badge text-bg-info text-light">
                Mới
              </span>
            )}

            <span className="story-item__badge story-item__badge-new badge text-bg-primary text-light">
              Chương {chaps}
            </span>

          </div>
        </a>
      </div>
    </>
  );
};

export default Comic;

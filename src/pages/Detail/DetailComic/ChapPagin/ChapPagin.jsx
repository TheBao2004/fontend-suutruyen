import React, { useEffect, useState } from "react";
import store from "../../../../redux/store";
import { getItemChapComic } from "../../../../apis/functions";
import { actionItemChapComic } from "../../../../redux/action";

const ChapPagin = ({ data }) => {

    const [current, setCurrent] = useState(data?.current_page);


    const paginationChap = (e) => {
        
        const url = e.dataset.url;

        const createData = async () => {

            const chapComic = await getItemChapComic(url);
            store.dispatch(actionItemChapComic(chapComic.data.chaps));
            setCurrent(chapComic?.data?.chaps?.current_page);

        }

        createData();

    }


  return (
    <>
      <div
        className="pagination"
        style={{
          justifyContent: "center",
        }}
      >
        <ul>


         {
            data?.links?.map((item, index) => {

                let isPage = '';
                if(item.label == current) isPage = 'page-current';

                if(Number(item.label)) return <li key={index} className={"pagination__item " + isPage }>
                <a
                  className="page-link story-ajax-paginate"
                  data-url={item.url}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={(e) => paginationChap(e.target)}
                >
                {item.label}
                </a>
              </li>
            })
         }


          {/* <li className="pagination__item ">
            <a
              className="page-link story-ajax-paginate"
              data-url="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau?page=2"
              style={{
                cursor: "pointer",
              }}
            >
              2
            </a>
          </li> */}

          {/* <div className="dropup-center dropup choose-paginate me-1">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chọn trang
            </button>
            <div className="dropdown-menu">
              <input
                type="number"
                className="form-control input-paginate me-1"
              />
              <button className="btn btn-success btn-go-paginate">Đi</button>
            </div>
          </div> */}

          {/* <li className="pagination__arrow pagination__item">
            <a
              data-url="https://suustore.com/truyen/nang-khong-muon-lam-hoang-hau?page=2"
              style={{
                cursor: "pointer",
              }}
              className="text-decoration-none w-100 h-100 d-flex justify-content-center align-items-center story-ajax-paginate"
            >
              &gt;&gt;
            </a>
          </li> */}

        </ul>
      </div>
    </>
  );
};

export default ChapPagin;

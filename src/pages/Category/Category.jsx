import React, { useEffect, useState } from "react";
import CateDesc from "./CateDesc/CateDesc";
import CateComics from "./CateComics/CateComics";
import { useParams, Navigate } from "react-router-dom";
import store from "../../redux/store";
import { actionCategoryComic } from "../../redux/action";
import { getCategoryComic } from "../../apis/functions";
import Loading from "../../components/Loading/Loading";

const Category = ({}) => {
  let { slug } = useParams();

  if (!slug) {
    return <Navigate to="/404" />;
  }

  const [categoryComic, setCategoryComic] = useState({});
  const [check, setCheck] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const createData = async () => {
      const data = await getCategoryComic(slug);

      store.dispatch(actionCategoryComic(data.data));

      setCategoryComic(store.getState().categoryComic);
      setCheck(data.success);

      setLoading(false);
    };

    createData();
  }, []);

  if (!check) return <Navigate to="/404" />;

  return (
    <>
      <main>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md-8 col-lg-9 mb-3">
              {loading || (
                <>
                  <div className="head-title-global d-flex justify-content-between mb-2">
                    <div className="col-12 col-md-12 col-lg-12 head-title-global__left d-flex">
                      <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                        <span
                          href="#"
                          className="d-block text-decoration-none text-dark fs-4 category-name"
                          title={categoryComic?.category?.name}
                        >
                          {categoryComic?.category?.name}
                        </span>
                      </h2>
                    </div>
                  </div>

                  <CateComics data={categoryComic.list} />
                </>
              )}

              {loading && <Loading />}
            </div>

            <div className="col-12 col-md-4 col-lg-3 sticky-md-top">
              <CateDesc />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;

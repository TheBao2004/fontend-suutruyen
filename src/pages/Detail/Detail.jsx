import React, { useEffect, useState } from "react";
import ListCate from "../../components/ListCate/ListCate";
import DayTime from "./DayTime/DayTime";
import Title from "../../components/Title/Title";
import DetailComic from "./DetailComic/DetailComic";
import { useParams, Navigate } from 'react-router-dom';
import { actionDetailComic } from "../../redux/action";
import { getDetailComic } from "../../apis/functions";
import store from "../../redux/store";

const Detail = () => {
  
  let { slug } = useParams();

  if (!slug) {
    return <Navigate to="/404" />
  }

  const [detailComic, setDetailComic] = useState({});
  const [check, setCheck] = useState({});
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const createData = async () => {
      
      const data = await getDetailComic(slug);

      store.dispatch(actionDetailComic(data.data));

      setDetailComic(store.getState().detailComic);
      setCheck(data.success);
      setCategories(store.getState().listCategory?.data);

      setLoading(false);
    };

    createData();
  }, []);


  if (!check) return <Navigate to="/404" />;

  return (
    <main>
      <input
        type="hidden"
        id="story_slug"
        value="nang-khong-muon-lam-hoang-hau"
      />
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md-7 col-lg-8">
            <Title title={"Thông tin truyện"} />

            <DetailComic data={detailComic} />
          </div>

          <div className="col-12 col-md-5 col-lg-4 sticky-md-top">
            <DayTime />

            <ListCate categories={categories} loading={loading}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;

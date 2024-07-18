import React, { useEffect } from "react";
import DetailMain from "./DetailMain/DetailMain";
import DetailExtra from "./DetailExtra/DetailExtra";
import ChapPagin from "./ChapPagin/ChapPagin";
import Chaps from "./Chaps/Chaps";

const DetailComic = ({ data }) => {
  return (
    <>
      <div className="story-detail">
        <DetailMain comic={data.comic} />

        <DetailExtra
          categories={data.categories}
          keywords={data.keywords}
          comic={data.comic}
        />

        {data?.chaps && <Chaps data={data?.chaps} />}

        {data?.chaps && <ChapPagin data={data?.chaps} />}
      </div>
    </>
  );
};

export default DetailComic;

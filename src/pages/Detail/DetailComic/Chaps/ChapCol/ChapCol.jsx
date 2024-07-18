import React from "react";
import Chap from "./Chap/Chap";

const ChapCol = ({ chaps }) => {
  chaps = Object.values(chaps);

  return (
    <>
      <div className="col-12 col-sm-6 col-lg-6 story-detail__list-chapter--list__item">
        <ul>
          {chaps?.map((item) => {
            return <Chap chap={item} key={item?.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default ChapCol;

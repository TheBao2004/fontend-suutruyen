import React from "react";

const Chap = ({chap}) => {
  return (
    <>
      <li>
        <a
          href="chapter.html"
          className="text-decoration-none text-dark hover-title"
        >
          { chap.name }
        </a>
      </li>
    </>
  );
};

export default Chap;

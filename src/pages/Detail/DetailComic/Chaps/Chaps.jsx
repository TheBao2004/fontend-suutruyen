import React, { useState } from 'react'
import ChapCol from './ChapCol/ChapCol'
import store from '../../../../redux/store';

const Chaps = ({data}) => {

    const [chaps, setChaps] = useState(data?.data);

    store.subscribe(() => {
        setChaps(store.getState().itemChapComic.data);
    });


    const keys = Object.keys(chaps);

    const chapKeyLeft = keys.slice(0, 10);
    const chapKeyRight = keys.slice(10);

    const chapLeft = chapKeyLeft.reduce((acc, key) => {
        acc[key] = chaps[key];
        return acc;
    }, {});

    const chapRight = chapKeyRight.reduce((acc, key) => {
        acc[key] = chaps[key];
        return acc;
    }, {});

        
  return (
    <>
      
      <div className="story-detail__list-chapter">
                    <div className="head-title-global d-flex justify-content-between mb-4">
                        <div className="col-6 col-md-12 col-lg-4 head-title-global__left d-flex">
                            <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                                <span href="#"
                                    className="d-block text-decoration-none text-dark fs-4 title-head-name"
                                    title="Truyện hot">Danh sách chương</span>
                            </h2>
                        </div>
                    </div>

                    <div className="story-detail__list-chapter--list">
                        <div className="row">


                            <ChapCol chaps={chapLeft} />


                            {/* Mỗi Truyện chia thành 2 cột mỗi cột tối đa 25 chap nếu không sẽ làm xấu layout */}

                            <ChapCol chaps={chapRight   } />

                        </div>
                    </div>
                </div>

    </>
  )
}

export default Chaps

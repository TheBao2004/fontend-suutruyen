import TdComic from "./TdComic/TdComic";
import { getNewComic } from '../../../apis/functions';
import Loading from '../../../components/Loading/Loading';
import React, { useEffect, useState } from 'react'


const TableComic = ({ data, loading }) => {


    return (
        <>
        <div className="row">
            <div className="col-12">
            <div className="section-stories-new__list">

                {
                    loading || 
                    data?.map(function(item){
                        return <TdComic key={item.comic.id} comic={item} />
                    })
                }

                {
                    loading &&
                    <Loading />
                }

            </div>
            </div>
        </div>
        </>
    );
};

export default TableComic;

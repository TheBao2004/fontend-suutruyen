import React, { useEffect, useState } from 'react'
import Comic from '../../../components/Comic/Comic'
import Loading from '../../../components/Loading/Loading';

const HomeComics = ({comics, loading}) => {

  return (
    <>  
      
      <div className="row">
            <div className="col-12">
                {
                    loading || 
                    <div className="section-stories-hot__list">

                        {
                            comics?.map(function(item){
                                return <Comic key={item.comic.id} comic={item.comic} chaps={item.chaps} />
                            })
                        }
    
                    </div>
                }

                {
                    loading &&
                    <Loading />
                }

                <div className="section-stories-hot__list wrapper-skeleton d-none">
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                    <div className="skeleton" style={{
                        maxWidth: "150px",
                        width: "100%",
                        height: "230px"
                        }}></div>
                </div>
            </div>
        </div>

    </>
  )
}

export default HomeComics

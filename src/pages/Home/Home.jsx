import React, { useEffect, useState } from 'react'
import Title from '../../components/Title/Title';
import TableComic from './TableComic/TableComic';
import ListCate from '../../components/ListCate/ListCate';
import HomeComics from './HomeComics/HomeComics';
import store from '../../redux/store';
import { getFullComic, getLastChapComic, getListCategory, getNewComic } from '../../apis/functions';
import { actionCategories, actionFullComic, actionLastChapComic, actionTableComic } from '../../redux/action';


const Home = ({ }) => {

    const [categories, setCategories] = useState([]);
    const [fullComic, setFullComic] = useState([]);
    const [tableComic, setTableComic] = useState([]);
    const [lastChapComic, setLastChapComic] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // let data = store.getState();

        // setLastChapComic(data.lastChapComic.data);
        // setFullComic(data.fullComic.data);
        // setCategories(data.listCategory.data);


        const createData = async () => {

            const dataCategories = await getListCategory();
            const dataLastChapComic = await getLastChapComic();
            const datafullComic = await getFullComic();
            const dataTableComic = await getNewComic();

            store.dispatch(actionTableComic(dataTableComic.data));
            store.dispatch(actionFullComic(datafullComic.data));
            store.dispatch(actionLastChapComic(dataLastChapComic.data));
            store.dispatch(actionCategories(dataCategories.data));

        }

        createData();

        setLoading(false);

        store.subscribe(() => {

            setFullComic(store.getState().fullComic);
            setLastChapComic(store.getState().lastChapComic);
            setCategories(store.getState().listCategory);
            setTableComic(store.getState().tableComic);

        });


    }, []);


  return (
    <>


    <main>
        <div className="section-stories-hot mb-3">
            <div className="container">
                <div className="row">
                  <Title title={"Chương mới nhất"} select={true} categories={categories} />
                </div>

                <HomeComics comics={lastChapComic} loading={loading} />

            </div>
        </div>
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md-8 col-lg-9">
                    <div className="section-stories-new mb-3">
                        <div className="row">
                          <Title title={"Truyện Mới"} />
                        </div>

                        <TableComic loading={loading} data={tableComic} /> 
                        
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-3 sticky-md-top">

                    <ListCate categories={categories} loading={loading} />

                </div>
                
            </div>
        </div>

        <div className="section-stories-full mb-3 mt-3">
            <div className="container">
                <div className="row">
                             
                    <Title title={"Truyện đã hoàn thành"} />

                </div>

                <HomeComics comics={fullComic} loading={loading} />

            </div>
        </div>
    </main>


    </>
  )
}

export default Home

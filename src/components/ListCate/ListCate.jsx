import React from 'react'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { env } from '../../helpers/const';

const ListCate = ({categories, loading}) => {

  return (
    <>

<div className="row">

<div className="col-12">
    <div className="section-list-category bg-light p-2 rounded card-custom">
        <div className="head-title-global mb-2">
            <div className="col-12 col-md-12 head-title-global__left">
                <h2 className="mb-0 border-bottom border-secondary pb-1">
                    <span href="#" className="d-block text-decoration-none text-dark fs-4"
                        title="Truyện đang đọc">Danh mục</span>
                </h2>
            </div>
        </div>
        <div className="row">

            {
                loading ||
                <ul className="list-category">
                {
                    categories?.map(function(item){
                        return <li className="" key={item.id}>
                        <Link className="text-decoration-none text-dark hover-title" to={"/danh-muc/" + item.slug}>{item.name}</Link>
                        </li>
                    })
                }
                </ul>
            }

            {
                loading &&
                <Loading />
            }

        </div>
    </div>
</div>

</div>

    </>
  )
}

export default ListCate

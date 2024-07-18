import React from 'react'

const DetailExtra = ({categories, keywords, comic}) => {

  return (
    <>
            <div className="story-detail__bottom mb-3">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 story-detail__bottom--info">
                            <p className="mb-2">
                                <strong>Tác giả:</strong>
                                <a href="#"
                                    className="text-decoration-none text-dark hover-title">Thâm Bích Sắc</a>
                            </p>
                            <div className="w-100 mb-2">
                                <strong className="me-1">Từ khóa:</strong>
                                <div className="w-100">

                                    {
                                        keywords?.map((item, index) => {
                                            return <span key={'tu-khoa-' + index}><a href="#"
                                            className="text-decoration-none hover-title text-info me-1 "
                                            style={{
                                                width: "max-content"
                                            }}>{item.name}
                                            </a>, </span>
                                        })
                                    }

                                </div>
                            </div>
                            <div className="w-100 mb-2">
                                <strong className="me-1">Danh mục:</strong>
                                <div className="w-100">

                                    {
                                        categories?.map((item, index) => {
                                            return <span key={'danh-muc-' + index}><a href="#"
                                            className="text-decoration-none hover-title text-info me-1 "
                                            style={{
                                                width: "max-content"
                                            }}>{item.name}
                                            </a>, </span>
                                        })
                                    }

                                </div>
                            </div>

                            <p className="mb-2">
                                <strong>Trạng thái: </strong>
                                {comic?.status == 3 && <span className="text-success">Hoàn thành</span>}
                                {comic?.status == 2 && <span className="text-warning">Cập nhật</span>}
                                {comic?.status == 1 && <span className="text-info">Mới</span>}
                            </p>
                        </div>

                    </div>
                </div>
    </>
  )
}

export default DetailExtra

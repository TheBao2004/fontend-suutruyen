import React from 'react'

const DetailMain = ({comic}) => {

  return (
    <>
                    <div className="story-detail__top d-flex align-items-start">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-3 story-detail__top--image">
                            <div className="book-3d">
                                <img src={'http://127.0.0.1:8000/storage/uploads/' + comic?.thumbnail}
                                    alt="Nàng Không Muốn Làm Hoàng Hậu" className="img-fluid w-100" width="200"
                                    height="300" loading="lazy"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-9">
                            <h3 className="text-center story-name">{ comic?.name }</h3>
                            <div className="rate-story mb-2">
                                <div className="rate-story__holder" data-score="7.0">


                                    <img alt="1" src="/src/assets/images/star-on.png"/>



                                    <img alt="2" src="/src/assets/images/star-on.png"/>



                                    <img alt="3" src="/src/assets/images/star-on.png"/>



                                    <img alt="4" src="/src/assets/images/star-on.png"/>



                                    <img alt="5" src="/src/assets/images/star-on.png"/>



                                    <img alt="6" src="/src/assets/images/star-on.png"/>



                                    <img alt="7" src="/src/assets/images/star-half.png"/>



                                    <img alt="8" src="/src/assets/images/star-off.png"/>



                                    <img alt="9" src="/src/assets/images/star-off.png"/>



                                    <img alt="10" src="/src/assets/images/star-off.png"/>




                                </div>
                                <em className="rate-story__text"></em>
                                <div className="rate-story__value" itemProp="aggregateRating" itemScope=""
                                    itemType="https://schema.org/AggregateRating">
                                    <em>Đánh giá:
                                        <strong>
                                            <span itemProp="ratingValue">7.0</span>
                                        </strong>
                                        /
                                        <span className="" itemProp="bestRating">10</span>
                                        từ
                                        <strong>
                                            <span itemProp="ratingCount">415</span>
                                            lượt
                                        </strong>
                                    </em>
                                </div>
                            </div>

                            <div className="story-detail__top--desc px-3" style={{
                                maxHeight: "285px"
                            }} dangerouslySetInnerHTML={{ __html: comic?.description }}>
                            </div>

                            <div className="info-more">
                                <div className="info-more--more active" id="info_more">
                                    <span className="me-1 text-dark">Xem thêm</span>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.70749 7.70718L13.7059 1.71002C14.336 1.08008 13.8899 0.00283241 12.9989 0.00283241L1.002 0.00283241C0.111048 0.00283241 -0.335095 1.08008 0.294974 1.71002L6.29343 7.70718C6.68394 8.09761 7.31699 8.09761 7.70749 7.70718Z"
                                            fill="#2C2C37"></path>
                                    </svg>
                                </div>

                                <a className="info-more--collapse text-decoration-none">
                                    <span className="me-1 text-dark">Thu gọn</span>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.70749 0.292817L13.7059 6.28998C14.336 6.91992 13.8899 7.99717 12.9989 7.99717L1.002 7.99717C0.111048 7.99717 -0.335095 6.91992 0.294974 6.28998L6.29343 0.292817C6.68394 -0.097606 7.31699 -0.0976055 7.70749 0.292817Z"
                                            fill="#2C2C37"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default DetailMain

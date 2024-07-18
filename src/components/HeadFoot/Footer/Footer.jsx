import React from 'react'
import FooterKeys from './FooterKeys/FooterKeys'

const Footer = () => {
  return (
    <>
          <div id="footer" className="footer border-top pt-2">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <strong>Suu Truyện</strong> - <a title="Đọc truyện online" className="text-dark text-decoration-none"
                        href="#">Đọc truyện</a> online một cách nhanh nhất. Hỗ trợ mọi thiết bị như
                    di
                    động và máy tính bảng.
                </div>


                <FooterKeys />



                <div className="col-12"> <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img
                            alt="Creative Commons License" style={{
                                borderWidth: "0",
                                marginBottom: "10px"
                            }}
                            src="/src/assets/images/88x31.png"/></a><br/>
                    <p>Website hoạt động dưới Giấy phép truy cập mở <a rel="license"
                            className="text-decoration-none text-dark hover-title"
                            href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0
                            International License</a></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer

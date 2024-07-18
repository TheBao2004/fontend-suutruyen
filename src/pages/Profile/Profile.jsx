import React from 'react'
import '../../assets/profile/main.css'

const Profile = () => {
  return (
    <>
      
        <div className="container">

            <div className="row box_profile">

                <div className="col-xl-3 col-lg-4 col-md-5 py-3">
                    <div className="row">
                        <div className="col-8">
                        <p className='mb-1'>Tài khoản của:</p>
                        <h3>Bao Nguyen</h3>
                        </div>
                        <div className="col-4 text-center">
                            <img className='rounded-circle' src="https://i.pinimg.com/736x/a9/6b/76/a96b766fb263e09ac04a100c640625b0.jpg" alt="Error" width={'80%'}/>
                        </div>
                        <div className="col-12 mt-4">

                        <div className="accordion accordion-flush" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Quản lí
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0"> 
                            <ul className="list-group rounded-0">
                            <a href='' className="list-group-item active">Trang cá nhân</a>
                            <a href='' className="list-group-item">Truyện theo dõi</a>
                            <a href='' className="list-group-item">Linh thạch</a>
                            <li className="list-group-item">Thông báo</li>
                            <li className="list-group-item">Đổi mật khẩu</li>
                            <li className="list-group-item">Đăng xuất</li>
                            </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                 
                        </div>
                    </div>
                </div>

                <div className="row col-xl-9 col-lg-8 col-md-7 py-3" style={{
                    height: 'fit-content'
                }}>
                    <div className="col-12 mb-3">
                        <h2 className="title_border">Thông tin chung</h2>
                    </div>
                    <div className="col-md-8">
                        <h4>Tài khoản</h4>
                        <form action="" method="post" className="mt-4">
                        <div className="mb-3 row g-3 align-items-center">
                        <div className="col-lg-3 col-12">
                            <label className="col-form-label">Họ và tên</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-auto">
                            <span className="form-text text-danger">
                            Error
                            </span>
                        </div>
                        </div>
                        <div className="mb-3 row g-3 align-items-center">
                        <div className="col-lg-3 col-12">
                            <label className="col-form-label">Email</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-auto">
                            <span className="form-text text-danger">
                            Error
                            </span>
                        </div>
                        </div>
                        <div className="mb-3">
                            <div className="btn btn-secondary">Lưu</div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                    <h4>Avatar</h4>
                    <form action="" method="post" className="mt-4">
                    <div class="mb-3">
                        <input type="file" class="form-control" id="inputPassword" />
                    </div>
                    </form>
                    <hr />
                    <div className="text-center">
                    <img style={{
                        width: '80%',
                        margin: '0 auto'
                    }} src="https://file.hstatic.net/1000268159/file/blackpink-members_595c2eedcc1346f4a9837eb4bf30e3d0.jpg" alt="Error"/>
                    </div>
                    </div>
                </div>

            </div>

        </div>

    </>
  )
}

export default Profile

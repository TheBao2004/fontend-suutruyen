import "./Login.css"

import React from 'react'


const Login = () => {
  return (
    <>

<div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h1 className="card-title text-center mb-5 fw-light">Đăng nhập</h1>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Mật khẩu</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                  Lưu đăng nhập
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"> Đăng nhập </button>
              </div>
              <hr className="my-4" />
              <div className="d-grid mb-2">
                <button className="btn btn-google btn-login fw-bold" type="submit">
                  <i className="fab fa-google me-2"></i> Đăng nhập bằng Google
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-facebook btn-login fw-bold" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Đăng nhập bằng Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Login

import React from 'react'

const HeaderForm = () => {
  return (
    <>

<form className="d-flex header__form-search" action="" method="GET">
            <input className="form-control search-story" type="text" placeholder="Tìm kiếm" name="key_word"
                />
            <div className="col-12 search-result shadow no-result d-none">
                <div className="card text-white bg-light">
                    <div className="card-body p-0">
                        <ul className="list-group list-group-flush d-none">
                            <li className="list-group-item">
                                <a href="#" className="text-dark hover-title">Tự cẩm</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <button className="btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 512 512">
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                    </path>
                </svg>

            </button>
        </form>


    </>
  )
}

export default HeaderForm

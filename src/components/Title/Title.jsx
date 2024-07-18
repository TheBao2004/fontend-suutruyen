import React, { useState } from 'react'


const Title = ({ title, select, categories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

  return (
    <>
        <div className="head-title-global d-flex justify-content-between mb-2">
            <div className="col-6 col-md-4 col-lg-4 head-title-global__left d-flex align-items-center">
                <h2 className="me-2 mb-0 border-bottom border-secondary pb-1">
                    <a href="#" className="d-block text-decoration-none text-dark fs-4 story-name"
                        title={ title }>{ title }</a>
                </h2>
                <i className="fa-solid fa-fire-flame-curved"></i>
            </div>

            <div className="col-4 col-md-3 col-lg-2">

                {
                    select && 
                    <select value={inputValue} onChange={handleChange} className="form-select select-stories-hot" aria-label="Truyen hot">
                        <option>Tất cả</option>
                        {categories?.map((item) => {
                            return <option key={item.id} value="s">{item.name}</option>
                        })}
                    </select>
                }
      

            </div>
        </div>
    </>
  )
}

export default Title

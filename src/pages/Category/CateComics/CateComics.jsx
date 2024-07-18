import React from 'react'
import Comic from '../../../components/Comic/Comic'

const CateComics = ({data}) => {

  return (
    <>

<div className="list-story-in-category section-stories-hot__list">

    {
        data?.map((item) => {
            return <Comic key={item.comic.id} comic={item.comic} chaps={item.chaps}/>
        })
    }

</div>

    </>
  )
}

export default CateComics

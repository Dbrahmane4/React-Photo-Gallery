import React, { useEffect, useState } from 'react'
import { trendingImages, searchImages } from '../api/Api'
import Masonry from 'react-masonry-component';
import Images from './Images'

const Gallery = ({query}) => {
    const [imageList, setImageList] = useState([]);
    useEffect(() => {
        trendingImages().then((data)=>{
            setImageList(data);
        })
    }, [])

    useEffect(async()=>{
        const data = await searchImages(query);
        setImageList(data);
    }, [query])

    return (
        <div className='gallery'>
        <Masonry options={{isFitWidth: true}}>
        {imageList?.map(img => (
                <Images key={img.id} src={img.urls.small}/>
            ))}
        </Masonry>
            
        </div>
    )
}

export default Gallery

import React, { useState } from 'react'
import DebounceInput from 'react-debounce-input';

const SearchBox = ({input, setInput}) => {
    
   
    return (
        <div className='search-box'>
            <label>Photo Gallery</label>
            <DebounceInput 
            minLength={2}
            debounceTimeout={300}
             type="text" placeholder='search here' name='photo search' onChange={(e) => setInput(e.target.value)} value={input}/>
        </div>
    )
}

export default SearchBox

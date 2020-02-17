import React from 'react'
import { findAllByAltText } from '@testing-library/react'

const getData = () => {
        return fetch('http://localhost:5002/files').then(e => e.json()).then(e => console.log(e))
}

const FileStored = () => {
    return(
        <>
       <div>DataMap{getData().map}</div>
        </>
    )
}
export default FileStored
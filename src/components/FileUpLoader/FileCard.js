import React from 'react'

const FileCard = props => {
    return(
        <>
        <div className='file-card'>{props.file.title}</div>
        </>
    )
}

export default FileCard
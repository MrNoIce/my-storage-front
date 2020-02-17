import React from 'react';
import { Route } from 'react-router-dom'
import FileUpLoader from './FileUpLoader/FileUpLoader'
import FileStored from './FileUpLoader/FileStored';


const ApplicationViews = () => {
    return(
        <>
        <h1>I'm the ApplicationViews</h1>
        <FileUpLoader />
        <FileStored />
        </>
    )
}

export default ApplicationViews
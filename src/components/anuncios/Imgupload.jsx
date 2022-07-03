import React, { useState } from 'react';

export default function Imgupload() {
const [file, setFile] = useState([null]);

 const fileObj = [];
 const fileArray = [];

 const uploadMultipleFiles=(e)=> {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        console.log(e.target.files);
        setFile({ file: fileArray })
    }
    const uploadFiles=(e)=> {
        e.preventDefault()
        console.log(file);
    }

    const clear=(e)=> {
        e.preventDefault()
       
    }


        return (
            <>
                <div className="form-group multi-preview mb-3">
                    {(fileArray || []).map((url,index) => (
                        <img key={index} src={url} alt="..." className='imguploaddisplayed' />
                    ))}
                </div>
                <div className="input-group">
                     <input type="file" className="form-control" id="inputGroupFile04" onChange={uploadMultipleFiles} multiple />
                     <button type="button" className="btn btn-outline-dark" onClick={uploadFiles}><i className="bi bi-upload"></i></button>
                     <button type="button" className="btn btn-outline-danger" onClick={clear}><i className="bi bi-x-circle"></i></button>
                </div>
            </>
        )
    
}
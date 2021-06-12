import React, {useRef} from 'react';

export default function FileUploader ({onFileSelect}){
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        // handle validations
        onFileSelect(e.target.files[0]);
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput}/>
            <button type="button" onClick={e => fileInput.current && fileInput.current.click()} >Upload</button>
        </div>
    );
}
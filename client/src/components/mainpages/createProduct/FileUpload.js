import React, { useContext} from 'react'

import Loading from '../utils/loading/Loading'
import axios from "axios";

import { Avatar, Badge } from "antd";
import {GlobalState} from '../../../GlobalState'
import "antd/dist/antd.css";

const FileUpload = ({ product, setProduct, setLoading , loading, styleUpload}) => {

    const state = useContext(GlobalState)
    const [token] = state.token
  const fileUploadAndResize = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles =product.images;
    console.log(files)

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        let formData = new FormData()
        formData.append('file', files[i])
        axios.post('/api/upload', formData, {
            headers: {'content-type': 'multipart/form-data', Authorization: token}
        })
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                allUploadedFiles.push(res.data);

                setProduct({ ...product, images: allUploadedFiles });
                console.log(allUploadedFiles)
              })
              .catch((err) => {
                setLoading(false);
                console.log("CLOUDINARY UPLOAD ERR", err);
              });
          
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    // console.log("remove image", public_id);
    axios.post('/api/destroy', {public_id}, {
        headers: {Authorization: token}
    })
      .then((res) => {
        setLoading(false);
        const { images } = product;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setProduct({ ...product, images: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
 

  return (
    <>
      <div className="row">
     
        {product.images &&
          product.images.map((image) => (
              <span style={{margin:"10px"}}>
                  
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => handleImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}

            >
              <Avatar
                src={image.url}
                size={100}
                shape="square"
                className="ml-3"
                style={{border:"2px solid #a4aeee",marginBottom:"15px"}}

              />
            </Badge>
           
            </span>
          ))}
      </div>
      {
        loading ? <div ><Loading/></div>:<div style={styleUpload}><label className="" style={{fontSize:"40px",border:"2px solid #a4aeee",padding:"10px",background:"#dce9f9"}}>
                    Choose File
                    <input
                      type="file"
                      multiple
                      hidden
                      accept="images/*"
                      onChange={fileUploadAndResize}

                    />
                  </label></div>}
      {/*<div className="row">
        <label className="btn btn-primary btn-raised mt-3">
          Choose File
          <input
            type="file"
            multiple
            hidden
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>*/}
    </>
  );
};

export default FileUpload;
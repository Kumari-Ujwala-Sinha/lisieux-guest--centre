import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'

import {useHistory, useParams} from 'react-router-dom'
import FileUpload from './FileUpload'

const initialState = {
    product_id: '',
    title: '',
    price: 0,
    description: 'Ujwala eporium',
    content: 'artificial flowers',
    category: '',
    _id: '',
    images:[]
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
   
    const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            products.forEach(product => {
                if(product._id === param.id) {
                    setProduct(product)
                    
                }
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            
        }
    }, [param.id, products])

   
    const handleChangeInput = e =>{
        const {name, value} = e.target
        setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
           

            if(onEdit){
                await axios.put(`/api/products/${product._id}`, {...product}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/products', {...product}, {
                    headers: {Authorization: token}
                })
            }
            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    const styleUpload = {
        display: loading ? "none" : "block"
    }
 
    return (
        <>
        <div className="create_product file-upload">
            <FileUpload
              product={product}
              setProduct={setProduct}
              setLoading={setLoading}
              loading={loading}
              styleUpload={styleUpload}
            />
          </div>
        <div className="create_product">
             
          
            {/*<div className="upload">
                <input type="file" name="file" id="file_up" multiple onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        {images && images.map((image)=>{return <img key={image.public_id} src={ image.url} alt=""/>
                        
                        })}
                        
                    </div>
                }
                
            </div>*/}

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                    value={product.product_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                    value={product.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" required
                    value={product.price} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                    value={product.description} rows="5" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                    value={product.content} rows="7" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>
        </div>
        </>
    )
}

export default CreateProduct

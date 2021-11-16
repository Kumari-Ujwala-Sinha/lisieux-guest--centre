import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'

//homeslide_id, title, description, button, images, link
const initialState = {
    homeslide_id: '',
    title: '',
    description: '',
    button: '',
    link: '',
    _id: ''
}

function CreateHomeslide() {
    const state = useContext(GlobalState)
    const [homeslide, setHomeslide] = useState(initialState)
    
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [homeslides] = state.homeslidesAPI.homeslides
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.homeslidesAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            homeslides.forEach(homeslide => {
                if(homeslide._id === param.id) {
                    setHomeslide(homeslide)
                    setImages(homeslide.images)
                }
            })
        }else{
            setOnEdit(false)
            setHomeslide(initialState)
            setImages(false)
        }
    }, [param.id, homeslides])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]
            
            if(!file) return alert("File not exist.")

           

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if(!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images.public_id}, {
                headers: {Authorization: token}
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setHomeslide({...homeslide, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isAdmin) return alert("You're not an admin")
            if(!images) return alert("No Image Upload")

            if(onEdit){
                await axios.put(`/api/homeslides/${homeslide._id}`, {...homeslide, images}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/homeslides', {...homeslide, images}, {
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
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Homeslide ID</label>
                    <input type="text" name="homeslide_id" id="product_id" required
                    value={homeslide.homeslide_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                    value={homeslide.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Button text</label>
                    <input type="text" name="button" id="content" required
                    value={homeslide.button} rows="7" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">Link</label>
                    <input type="text" name="link" id="price" required
                    value={homeslide.link} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                    value={homeslide.description} rows="5" onChange={handleChangeInput} />
                </div>

                

                

                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default CreateHomeslide

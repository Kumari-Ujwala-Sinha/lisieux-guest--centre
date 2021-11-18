import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'

import Loading from '../utils/loading/Loading'
import axios from 'axios'
import HomeslideItem from './HomeslideItem'



function Homeslides() {
    const state = useContext(GlobalState)
    const [homeslides, setHomeslides] = state.homeslidesAPI.homeslides
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.homeslidesAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        homeslides.forEach(homeslide => {
            if(homeslide._id === id) homeslide.checked = !homeslide.checked
        })
        setHomeslides([...homeslides])
    }

    const deleteHomeslide = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteHomeslide = axios.delete(`/api/homeslides/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteHomeslide
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        homeslides.forEach(homeslide => {
            homeslide.checked = !isCheck
        })
        setHomeslides([...homeslides])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        homeslides.forEach(homeslide => {
            if(homeslide.checked) deleteHomeslide(homeslide._id, homeslide.images.public_id)
        })
    }

    if(loading) return <div><Loading /></div>
    return (
        <>
        
        
        {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        }

        <div className="products">
            {
                homeslides.map(homeslide => {
                    return <HomeslideItem key={homeslide._id} homeslide={homeslide}
                    isAdmin={isAdmin} deleteHomeslide={deleteHomeslide} handleCheck={handleCheck} />
                })
            } 
        </div>

        
        {homeslides.length === 0 && <Loading />}
        </>
    )
}

export default Homeslides

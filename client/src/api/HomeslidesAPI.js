import {useState, useEffect} from 'react'
import axios from 'axios'

function HomeslidesAPI() {
    const [homeslides, setHomeslides] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getHomeslides = async () =>{
            const res = await axios.get('/api/homeslides')
            setHomeslides(res.data)
        }

        getHomeslides()
    },[callback])
    return {
        homeslides: [homeslides, setHomeslides],
        callback: [callback, setCallback]
    }
}

export default HomeslidesAPI

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import GalleryCard from './GalleryCard';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GalleryCardContainer() {
    const [id, setId] = useState(1);
    const [info, setInfo] = useState({});
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    

    const handleChange = (e) => {
        setId(e.target.value)
    }

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    const handleNext = () => {
        if (id < 732) {
            setId(parseInt(id) + 1)
            setIdFromButtonClick(parseInt(id) + 1)
        }
        else {
            toast("No more heroes/villains !", 
            {   position: "top-right",
                autoClose: 2000,
                type : 'info' });
        }
    }

    const handlePrev = () => {
        if (id > 1) {
            setId(id - 1)
            setIdFromButtonClick(id - 1);
        } else{
            toast("There is nothing this side !", 
            {   position: "top-left",
                autoClose: 2000,
                type : 'info' });
        }
    }

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/2910228855724140/${idFromButtonClick}`)
            .then(response => {
                console.log(response.data)
                setInfo(response.data)
            }).catch(error => {
                console.log(error)
            })

    }, [idFromButtonClick])

    return (
        <div className="container">
            
            <h1 className="">Search heroes/villains</h1>
            <div className="search-bar">
                <NavigateBefore className="icon" onClick={handlePrev}></NavigateBefore>
                <input type="text" value={id} onChange={handleChange} />
                <button onClick={handleClick} className="search-button">Search</button>
                <NavigateNext className="icon" onClick={handleNext}></NavigateNext>
            </div>

            {info.name ? <GalleryCard >{info}</GalleryCard> : <CircularProgress color="secondary"></CircularProgress>}

        </div>

    )
}

export default GalleryCardContainer
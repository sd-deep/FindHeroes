import React from 'react'
import './GalleryCard.css'
import CountUp from 'react-countup';

function GalleryCard(props) {
    const { name, appearance, biography, powerstats } = props.children;

    return (
        <div className="card-container">
            <div className="card">
                <img className="card-image" src={props.children.image.url} alt={name} />
                <div className="card-content">
                    <h3>Biography</h3>
                    <div className="biography">
                        <p><b>Name: </b>{name}</p>
                        <p><b>Gender:</b> {appearance.gender}</p>
                        <p><b>Place of Birth:</b> {biography['place-of-birth']}</p>
                        <p><b>Publisher:</b> {biography.publisher}</p>
                    </div>
                    
                    <h3>PowerStats</h3>
                    <div className="powerstats-info">
                        <p><b>Combat:</b> 0<CountUp start={0} end={parseInt(powerstats.combat)} duration={2}/></p>
                        <p><b>Durability:</b> <CountUp start={0} end={parseInt(powerstats.durability)} duration={2}/></p>
                        <p><b>Intelligence:</b> <CountUp start={0} end={parseInt(powerstats.intelligence)} duration={2}/></p>
                        <p><b>Power:</b> <CountUp start={0} end={parseInt(powerstats.power)} duration={2}/></p>
                        <p><b>Speed:</b> <CountUp start={0} end={parseInt(powerstats.speed)} duration={2}/></p>
                        <p><b>Strength:</b> <CountUp start={0} end={parseInt(powerstats.strength)} duration={2}/></p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default GalleryCard


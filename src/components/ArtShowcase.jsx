import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/module.ArtShowcase.css'
import ArtPhotos from './ArtPhotos';

const ArtShowcase = ({ id }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [artData, setArtData] = useState(null); // Initialize state with null
    const [photos, setPhotos] = useState(null); // Initialize state with null

    useEffect(() => {
        // Fetch data from the API endpoint
        axios.get(`http://localhost/TheArtZone/beckend/ArtShowcase.php?id=${id}`) // Use template literals to insert id
            .then(response => {
                // Set the classes data
                setArtData(response.data);
            })
            .catch(error => {
                console.error('Error fetching class:', error);
            });
    }, [id]); // Add id to dependency array

    useEffect(() => {
        // Fetch data from the API endpoint
        axios.get(`http://localhost/TheArtZone/beckend/photo.php?id=${id}`)
            .then(response => {
                // Set the artData state with the fetched data
                setPhotos(response.data);
                console.log(photos)
            })
            .catch(error => {
                console.error('Error fetching art data:', error);
            });
    }, [id]);

    const handleWhatsAppClick = () => {
        // Open WhatsApp in a new tab with the provided number
        window.open('https://api.whatsapp.com/send?phone=9824180759', '_blank');
    };

    return (
        <div className="services_container">
            <section className="bg-white">
                <div className="container px-4 py-5" id="icon-grid">
                    {artData && (<h2 className="pb-2 border-bottom">{artData.class} CLASS</h2>)}
                    {artData && (
                        <section style={{ background: 'white' }}>
                            <div className="container col-xxl-8 px-4 py-5">
                                <div className="row flex-lg-row align-items-center g-5">
                                    <div className="poster col-10 col-sm-8 col-lg-6 mx-auto">
                                        <img src={`/src/assets/${artData.image}`} className="d-block img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="display-5 fw-bold lh-1 mb-3">{artData.class}</h1>
                                        <p className="lead">{artData.discription}</p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                            <button type="button" onClick={handleWhatsAppClick} className="MjsubscribeBtn-outline py-2 btn-lg px-4">BOOK {artData.class} CLASS NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>)}
                    <div>
                        <h2 className="pb-2 border-bottom Photos">PHOTOS</h2>
                        <ArtPhotos photos={photos}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtShowcase;

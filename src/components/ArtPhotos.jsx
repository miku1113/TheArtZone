import React, { useState } from 'react';
import './css/module.FixedGridLayout.css';

const ArtPhotos = ({ photos }) => {
    const [openedImage, setOpenedImage] = useState(null);

    const handleClick = (imageIndex) => {
        setOpenedImage(openedImage === imageIndex ? null : imageIndex);
    };

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                {Array.isArray(photos) && photos.length > 0 ? (
                    photos.map(photo => (
                        <div className="col mb-3" key={photo.id}>
                            <div className="image-container">
                                <img
                                    src={`/src/assets/${photo.image}`} // Assuming images are stored in assets folder
                                    alt={photo.id}
                                    className={`img-fluid fixed-image ${openedImage === photo.id ? 'clicked' : ''}`}
                                    onClick={() => handleClick(photo.id)}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No photos found</p>
                )}
            </div>
        </div>
    );
};

export default ArtPhotos;

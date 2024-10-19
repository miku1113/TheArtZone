import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "./css/module.ServiceLists.css";

const ServiceLists = ({ setSelectedTab, setId }) => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost/TheArtZone/beckend/calssess.php')
      .then(response => {
        const updatedClasses = response.data.map(cls => ({
          ...cls,
          image: cls.image.replace(/\\|\//g, '')
        }));
        setClasses(updatedClasses);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching classes:', error);
        setLoading(false);
      });
  }, []);

  const handleNavItemClickArt = (tab, id) => {
    setSelectedTab(tab);
    setId(id);
    console.log(id);
  }

  return (
    <section className="bg-white">
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">ART CLASSES</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            {Array.isArray(classes) && classes.length > 0 ? (
              classes.map((cls, index) => (
                <div
                  key={cls.id}
                  className={`col d-flex align-items-start service-card`}
                  onClick={() => handleNavItemClickArt("ArtShowcase", cls.id)}
                >
                  <div className="circle-image me-3">
                    <img className="art-img" src={`/src/assets/${cls.image}`} alt={cls.class} />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-0">{cls.class}</h4>
                    <p className="description">
                      {cls.discription}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No classes found</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceLists;

import React, { useEffect, useState } from 'react';
import axios from '../utils/csrf';

const Makes = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/make/all-photos');
        if (response.status === 200) {
          setPhotos(response.data);
          console.log(response.data);
        } else {
          setError('Error fetching photos.');
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError('Error fetching photos.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const base64ToImageUrl = (base64String) => {
    const prefix = 'data:image/png;base64,';
    return base64String.startsWith(prefix) ? base64String : prefix + base64String;
  };

  return (
    <div>
      <h2>Photo Gallery</h2>
      {loading && <p>Loading photos...</p>}
      {error ? (
        <p>{error}</p>
      ) : (
        photos.map((photo, index) => (
          <div key={index}>
            <h3>{photo.name}</h3>
            {photo.photo && (
             <img
             alt={photo.name}
             src={base64ToImageUrl(photo.photo)}
             style={{ maxWidth: '100%', maxHeight: '400px' }}
           />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Makes;

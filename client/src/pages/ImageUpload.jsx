import React, { useState } from 'react';
import axios from '../utils/csrf';
import Cookies from 'js-cookie';

const ImageUpload = () => {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !selectedFile) {
      alert('Please enter a name and choose a file.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('photo', selectedFile);

    try {
      const response = await axios.post('http://localhost:8082/api/makes/upload-image', formData, {
        headers: {
          'X-CSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Image uploaded successfully!');
      } else {
        alert('Error uploading image.');
      }
    } catch (error) {
      console.error('Error:', error);

      if (error.response && error.response.status === 400) {
        alert('Photo is required.');
      } else {
        alert('An error occurred while uploading the image.');
      }
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Choose a file:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;

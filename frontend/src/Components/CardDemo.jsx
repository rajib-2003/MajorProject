import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardDemo =()=> {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/images')
            .then(response => {
                setImages(response.data);
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image); // Ensure 'image' matches the field name used in Multer configuration
        try {
            await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setTitle('');
            setDescription('');
            setImage(null);
            window.location.reload();
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <h1>Image Gallery</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data"> {/* Ensure encType is set to 'multipart/form-data' */}
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button type="submit">Upload</button>
            </form>
            <div>
                {images.map(image => (
                    <div key={image._id}>
                        <h2>{image.title}</h2>
                        <p>{image.description}</p>
                        <img src={`http://localhost:5000/${image.imageUrl}`} alt={image.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardDemo;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCards() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            // Navigate to login or handle unauthorized access
            navigate('/login');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeDesc = (e) => {
        setDesc(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault(); // Prevent form submission

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', desc);
        formData.append('image', image);

        axios.post('http://localhost:5000/api/services', formData, {
            headers: { 'Authorization': localStorage.getItem('token') }
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.code === 403 && res.data.message === 'Token Expired') {
                localStorage.setItem('token', null);
            } else {
                toast.success('Card added successfully!', {
                    onClose: () => {
                        setTimeout(() => {
                            navigate('/state');
                        },500); // Delay navigation by 2 seconds
                    }
                });
            }
        })
        .catch(err => {
            console.log(err, "err");
            toast.error('Failed to add card');
        });
    };

    return (
        <div className="container mt-5 w-70">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="admin-card p-4 shadow text-center">
                        <form>
                            <div className="mb-3">
                                <input value={title} onChange={handleChange} placeholder='Title' className='form-control' />
                            </div>
                            <div className="mb-3">
                                <textarea value={desc} onChange={handleChangeDesc} placeholder='Description' className='form-control' />
                            </div>
                            <div className="mb-3">
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" />
                            </div>
                            <button
                                onClick={handleClick}
                                className='btn btn-primary'>
                                ADD STATE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCards;

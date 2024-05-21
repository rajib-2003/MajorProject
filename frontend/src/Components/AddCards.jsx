import axios from 'axios'
import { useEffect, useState } from 'react'

import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function AddCards() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            // Navigate to login or handle unauthorized access
        }
    }, [])

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDesc = (e) => {
        setDesc(e.target.value)
    }

    const handleClick = () => {
        console.log(title, desc, image, 19)

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', desc)
        formData.append('image', image)

        axios.post('http://localhost:5000/api/services',
            formData,
            {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        )
        .then((res) => {
            console.log(res.data)

            if (res.data.code === 403 && res.data.message === 'Token Expired') {
                localStorage.setItem('token', null)
            }
        })
        .catch(err => {
            console.log(err, "err")
        })
    }

    return (
        <div className="container mt-5 w-70">
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
                                className='btn btn-primary '>
                                ADD STATE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCards;

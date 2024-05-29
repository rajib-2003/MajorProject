import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendEmail = () => {
    const { email } = useParams();
    const navigate = useNavigate();
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/send-email', {
                email,
                subject,
                text
            });
            toast.success('Email sent successfully');
            navigate('/contacts'); // Navigate back to the contacts list
        } catch (error) {
            console.log(error)
            toast.error('Error sending email');
        }
    };

    return (
        <div className="container">
            <h1>Send Email to {email}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        className='inp'
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Message</label>
                    <textarea
                        id="text"
                        value={text}
                        className='inp'
                        placeholder='Message'
                        onChange={(e) => setText(e.target.value)}
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default SendEmail;

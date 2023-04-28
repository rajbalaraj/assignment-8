import React from 'react';

const Subject = ({ subject, handleAddToCart }) => {
    const { name, img, category, credit, time } = subject;
    return (
        <div className='col-md-6 col-lg-4'>
            <div className='border border-2 rounded-2'>
                <img className='img-fluid rounded-2' src={img} alt="" />
                <div className='px-3'>
                    <h3>{name}</h3>
                    <p>Category: {category}</p>
                    <p>Credit: {credit}</p>
                    <p>Time: {time}h</p>
                </div>
                <div className='d-flex justify-content-center mb-2'>
                    <button onClick={() => handleAddToCart(subject)} className='btn btn-primary w-75'>Add Subject</button>
                </div>
            </div>
        </div>
    );
};

export default Subject;
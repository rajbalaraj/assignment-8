import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import img from '../..//raj.jpg'

const Personal = () => {
    return (
        <div className='px-3'>
            <div className=' d-flex align-items-center py-3 rounded-3'>
                <div className='w-25'>
                    <img className='fluid w-100 rounded-3' src={img} alt="" />
                </div>
                <div className='ms-3'>
                    <h4 className='mt-2 mb-0'>Raj</h4>
                    <small><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Khulna,Bangladesh</small>
                </div>
            </div>
            <div className='bg-white d-flex justify-content-between px-3 pt-2 rounded-3'>
                <div>
                    <span className='h5'>68</span><span>kg</span>
                    <p>Weight</p>
                </div>
                <div>
                    <span className='h5'>5.8</span><span>ft</span>
                    <p>Height</p>
                </div>
                <div>
                    <span className='h5'>23</span><span>yrs</span>
                    <p>Age</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Personal;
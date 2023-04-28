import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
// import Subject from '../Subject/Subject';

const Header = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-info fw-bold'><FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon> Crash Courses</h1>
            <h3>Select your desire course</h3>
        </div>
    );
};

export default Header;
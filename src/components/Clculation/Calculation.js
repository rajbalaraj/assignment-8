import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getValuesFromLocalStorage, setValueToLocalStorage } from '../fakedb/fakedb';
import Personal from '../Personal/Personal';
import './Calculation.css'

const Calculation = (props) => {
    const notify = () => toast("Great job...! You finished the course");

    const [breakTime, setBreakTime] = useState('')
    const handleBreakTime = (e) => {
        setBreakTime(e.target.innerText);
        setValueToLocalStorage(e.target.innerText);
    }



    const [storedData, setStoredData] = useState([]);
    useEffect(() => {
        const storedBreakTime = getValuesFromLocalStorage();
        setStoredData(storedBreakTime);
    }, [storedData])




    // const storedBreakTime = getValuesFromLocalStorage();

    return (
        <div className='calculation pb-5 mt-5 ms-md-5 rounded-3 sticky-md-top'>
            <Personal></Personal>
            <div className='px-3'>
                <h4>Add A Break</h4>
                <div className='bg-white d-flex p-3 rounded-3'>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>12h</button>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>24h</button>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>48h</button>
                    <button onClick={(e) => handleBreakTime(e)} className='break-times calculation p-2 mx-2 border border-0 rounded-3'>72h</button>

                </div>
                <hr />
            </div>
            <div className='px-3 mt-3'>
                <h4>Course Details</h4>
                <div className='bg-white d-flex justify-content-between align-items-center px-4 mb-4 mt-1 rounded-3'>
                    <p className='fw-bold my-2'>Course Time</p>
                    <p className='my-2'><span>{
                        props.cart.reduce((previous, current) => previous + current.time, 0)
                    }</span>h</p>
                </div>
                <div className='bg-white d-flex justify-content-between align-items-center px-4 my-4 rounded-3'>
                    <p className='fw-bold my-2'>Break Time</p>

                    {
                        storedData ? <p className='my-2'><span>{storedData}</span></p> : <p className='my-2'><span>{breakTime}</span></p>
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center'>

                <button onClick={notify} className='btn btn-primary w-75'>Course Complete</button>
                <ToastContainer />

            </div>
        </div>
    );
};

export default Calculation;
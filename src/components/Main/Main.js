import React, { useEffect, useState } from 'react';
import Calculation from '../Clculation/Calculation';
import Subject from '../Subject/Subject';

const Main = () => {
    const [subjects, setSubjects] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('subjects.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    const handleAddToCart = (subject) => {
        // console.log(subject);
        const newCart = [...cart, subject];
        setCart(newCart);
    }
    return (
        <div className='container d-flex flex-column-reverse flex-md-row'>
            <div className='my-5'>
                <div className='row g-5'>
                    {
                        subjects.map(subject => <Subject key={subject.id} subject={subject} handleAddToCart={handleAddToCart}></Subject>)
                    }
                </div>
            </div>
            <div>
                <Calculation cart={cart}></Calculation>
            </div>
        </div>
    );
};

export default Main;
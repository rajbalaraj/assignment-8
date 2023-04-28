import React from 'react';

const Question = () => {
    return (
        <div className='container mb-5'>
            <div>
                <strong>Q. How does react works?</strong>
                <p>Ans: The DOM(Document Object Model) represents a web page in tree stucture.ReactJs creates new DOM called virtual DOM.And then if there is any change of state react compare the DOM with virtual DOM and find the changes in website.The process of doing this is known as Diff Algorithm.
                </p>
            </div>
            <div>
                <strong>Q. What is the difference between Props and State?</strong>
                <p>Ans: State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. <br />Props is a object created for a component to flow the data downstream to a child component.</p>
            </div>
            <div>
                <strong>Q. What is the function of UseEffect without API data loading?</strong>
                <p>Ans: useEffect is like a side effect in react.By using this Hook, we tell React that our component needs to do something after render. React will remember the function we passed and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default Question;
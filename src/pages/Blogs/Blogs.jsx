import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { lazy, useState } from 'react';
import useTitle from '../../hooks/TitleHook/useTitle';

const Blogs = () => {

    const [loading, setLoadeing] = useState(false);

    useTitle('Blogs')

    const downloadPDF = () =>{
        const capture = document.querySelector('.document');
        setLoadeing(true);
        html2canvas(capture).then(canvas=>{
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoadeing(false);
            doc.save('document.pdf')
        })
    }


    return (
        <div className='container mx-auto my-8'>
            <div className='document'>
                <div>
                    <h3 className='text-2xl font-semibold text-red-500 mb-3'>1. Tell us the differences between uncontrolled and controlled components.</h3>
                    <p className='text-lg font-medium text-slate-600 ml-7 mb-7'>Controlled components are tightly coupled with React's state management. Any changes to the component's state are reflected immediately in the component's UI. Uncontrolled components maintain their state independently of React's state management. They do not rely on React to synchronize state changes with the UI.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-red-500 mb-3'>2. How to validate React props using PropTypes</h3>
                    <p className='text-lg font-medium text-slate-600 ml-7 mb-7'>We can validate props that can be one of multiple types. To do this, we call oneOfType with an array of types. The optionalUnion prop can be one of string, number or a Person class or constructor instance as specified by the content of the array we call oneOfType with.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-red-500 mb-3'>3. Tell us the difference between nodejs and express js.</h3>
                    <p className='text-lg font-medium text-slate-600 ml-7 mb-7'>Node. js is the JavaScript runtime environment, that acts as an engine to power your web application, while ExpressJS is a framework built on top of Node to structure and simplify the development process. Moreover, if you are building a Node. js web application, it will prove a cost-effective development solution.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold text-red-500 mb-3'>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='text-lg font-medium text-slate-600 ml-7 mb-7'>Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.</p>
                </div>
            </div>
            <div>
                <button
                    className='py-3 px-6  bg-red-600 rounded text-white font-medium text-base'
                    onClick={downloadPDF}
                    disabled={!(loading===false)}
                >
                    {loading ?
                        <span>Downloading</span>
                        :
                        <span>Download</span>}
                </button>
            </div>
        </div>
    );
};

export default Blogs;
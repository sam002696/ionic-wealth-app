import React from 'react';




const ContentQA = () => {

    return (
        <>
            <div className="container mx-auto sm:px-6 lg:px-8 mt-5">
                <div className="service-details-content">

                    <h2 className="text-center text-xl mb-10 uppercase underline underline-offset-2 text-gray-600">Dynamic Planner Risk Profiler</h2>
                    <p className='description text-gray-500'>
                        In order for your adviser to provide you with financial advice, they need to understand your experience of investing in financial products and approach to risk. To do this they have adopted Dynamic Planner’s risk profiling process comprising 3 short sets of questions, which normally takes less than 10 minutes to complete.
                    </p><br />
                    <ul className='list-disc leading-8 text-blue-400 italic'>
                        <li>Firstly, you will be asked about your experience of investing in different financial products.</li>
                        <li>Next, your attitude to investment risk will be explo</li>
                        <li>Finally, you will be asked a few questions to help your adviser understand your capacity for taking investment risk given your current financial position.</li>
                    </ul><br />
                    <p className='text-gray-500'>Once you have answered all these questions, return this document to your adviser who will work out your risk profile and use this to inform the financial advice they provide.</p>
                    <div className='flex mt-8 space-x-3'>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Download PDF
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Preview & Edit
                        </button>
                    </div>


                </div>
            </div>


            {/* </div> */}
        </>
    );
};

export default ContentQA;
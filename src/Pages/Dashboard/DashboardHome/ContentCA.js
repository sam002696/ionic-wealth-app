import React from 'react';
import { useHistory } from 'react-router-dom';

const ContentCA = () => {
    const location = useHistory();
    const changeLocation = () => {
        location.push('/pdf');
    }

    return (
        <>
            <div className="container mx-auto sm:px-6 lg:px-8 mt-5">
                <div className="service-details-content">

                    <h2 className="text-center text-xl mb-10 underline underline-offset-2 text-gray-600">CLIENT AGREEMENT DOCUMENT</h2>
                    <p className='text-justify text-gray-500'>
                        Riverpark Investment and Financial Consultants Ltd is permitted to advise on and arrange
                        (bring about) deals in investments.
                        <br /><br />
                        With regard to investments which we have arranged for you, these will not be kept under review,but we will advise you upon your request. However, we may contact you in the future by means of an unsolicited promotion (i.e. where you had not expressly requested it) should we wish to contact you to discuss the relative merits of an investment or service which we feel may be of interest to you.
                        <br /><br />
                        Riverpark Investment and Financial Consultants Ltd does not handle clients’ money. We
                        never accept a cheque made payable to us or handle cash (unless it is payment in settlement of adviser charges or disbursements for which we have sent you an invoice). If you do send us
                        money, this may delay your transaction as we may have to return this money to you.
                    </p>
                    <p className='text-justify text-gray-500 mt-5'>
                        Riverpark Investment and Financial Consultants Ltd, Brook St Studios, 60 Brook St,
                        Glasgow, G40 2AB is authorised and regulated by the Financial Conduct Authority(FCA). Our
                        Financial Services Register number is 455480.
                        <br /><br />
                        You can check this on the Financial Services Register by visiting the FCA’s website –
                        http://www.fca.org.uk/firms/systems-reporting/register or by contacting the FCA on 0800 111
                        6768.

                    </p>
                    <div className='flex mt-8 space-x-3'>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Download PDF
                        </button>
                        <button
                            type="button"
                            onClick={changeLocation}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Preview & Edit
                        </button>
                    </div>

                </div></div>


            {/* </div> */}
        </>
    );
};

export default ContentCA;
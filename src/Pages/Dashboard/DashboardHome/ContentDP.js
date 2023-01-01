import React from 'react';


const ContentDP = () => {
    return (
        <>
            {/* <div className="col-lg-8-servicedetails"> */}
            <div className="container mx-auto sm:px-6 lg:px-8 mt-5">
                <div className="service-details-content">

                    <h2 className="title text-center text-xl mb-10 underline underline-offset-2 text-gray-600">GDPR DATA PROTECTION</h2>
                    <p className='description text-gray-500'>
                        <span className='text-lg font-semibold text-gray-500'>DATA PRIVACY NOTICE</span>
                        <br /><br />
                        We take your privacy very seriously and we ask that you read
                        this privacy no3ce carefully as it contains important informa3on
                        on who we are, how and why we collect, store, use and share
                        personal data, your rights in rela3on to your personal data and
                        on how to contact us and supervisory authori3es in the event
                        you have a complaint.
                        <br />
                        Italicised words in this privacy no3ce have the meaning set out
                        in the Glossary of Terms at the end of this document.
                        <br /><br />
                        <span className='text-lg font-semibold text-gray-500'>Who We Are</span>
                        <br /><br />
                        <span className='text-red-500'>Riverpark Investment & Financial Consultants Ltd</span> collects, uses
                        and is responsible for certain personal data about you. When
                        we do so we are required to comply with data protec1on
                        regula1on and we are responsible as a data controller of that
                        personal data for the purposes of those laws.
                        When we men3on "Riverpark” we are referring to Riverpark
                        Investment & Financial Consultants Ltd.
                        <br /><br />
                        <span className='text-red-500'>Riverpark Investment & Financial Consultants Ltd</span> is a company registered in Scotland (SC220303) whose registered oﬃce is at
                        145 St Vincent Street, Glasgow, G2 5JH. Riverpark Investment &
                        Financial Consultants Ltd is authorised and regulated by the
                        Financial Conduct Authority. Riverpark’s Financial Services
                        Register number is 455480.
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
export default ContentDP;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import { ChevronRightIcon } from '@heroicons/react/solid'
import ctabg from '../../../../images/cta.jpg'
import Content from './Content';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Cta from '../Cta/Cta';
// import {
//     useLocation
// } from "react-router-dom";


const ServiceDetails = () => {
    // let location = useLocation();
    // const exactLocation = location.pathname;
    // console.log(exactLocation);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className='mt-0 dark:bg-dark-variant'>
                <section className="service-details section-gap">
                    <div className="container">
                        <div className="row-servicedetails">
                            {/* Details Content */}
                            <div className="col-lg-8-servicedetails">
                                <div className={toggleState === 1 ? "  active-content-services" : "content-services"}>
                                    <Content />
                                </div>
                                <div className={toggleState === 2 ? "  active-content-services" : "content-services"}>
                                    <Content1 />
                                </div>
                                <div className={toggleState === 3 ? "  active-content-services" : "content-services"}>
                                    <Content2 />
                                </div>
                                <div className={toggleState === 4 ? "  active-content-services" : "content-services"}>
                                    <Content3 />
                                </div>
                            </div>
                            {/* Sidebar */}
                            <div className="col-lg-4-sidebar col-md-8">
                                <div className="sidebar">
                                    {/* Services List Widget */}
                                    <div className="widget cat-widget">
                                        <h4 className="widget-title dark:text-white">All Service List</h4>
                                        <ul>

                                            <li >
                                                <button className={toggleState === 1 ? "tabs-services active-tabs-services " : "tabs-services dark:text-white"}
                                                    onClick={() => toggleTab(1)}>
                                                    Financial Planning  <span><ChevronRightIcon className='h-10 w-10' /></span></button>
                                            </li>
                                            <li >
                                                <button className={toggleState === 2 ? "tabs-services active-tabs-services" : "tabs-services dark:text-white"}
                                                    onClick={() => toggleTab(2)}>
                                                    Protection <span><ChevronRightIcon className='h-10 w-10' /></span></button>
                                            </li>
                                            <li >
                                                <button className={toggleState === 3 ? "tabs-services active-tabs-services" : "tabs-services dark:text-white"}
                                                    onClick={() => toggleTab(3)}>
                                                    Investement Management <span><ChevronRightIcon className='h-10 w-10' /></span></button>
                                            </li>
                                            <li >
                                                <button className={toggleState === 4 ? "tabs-services active-tabs-services" : "tabs-services dark:text-white"}
                                                    onClick={() => toggleTab(4)}>
                                                    Inheritance Tax Planning <span><ChevronRightIcon className='h-10 w-10' /></span></button>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* Contact Widget */}
                                    <div className="widget contact-widget">
                                        <h4 className="widget-title dark:text-white">Conatct Us</h4>
                                        <form action="#">
                                            <input className='dark:contact-widget-dark' type="text" placeholder="Your Email" />
                                            <textarea className='outline-none dark:contact-widget-dark' placeholder="Message" defaultValue={""} />
                                            <button type="submit" className="site-button">Send Message</button>
                                        </form>
                                    </div>
                                    {/* CTA Widget */}
                                    <div className="widget cta-widget" style={{ backgroundImage: "url(" + ctabg + ")" }}>
                                        <h4 className="title">Need Any Consultations</h4>
                                        <Link to="/contact" className="site-button">Send Message</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Cta />

                </section>
            </div>
        </>
    );
};

export default ServiceDetails;
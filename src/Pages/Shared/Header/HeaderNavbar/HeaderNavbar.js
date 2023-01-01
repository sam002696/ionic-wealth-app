import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../../images/logo.png';
import MainMenu from '../MainMenu/MainMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
// import { RiLock2Line } from 'react-icons/ri';
import logos from '../../../../images/Ionic-Wealth-Logo-1000px-LIGHT.png';
import { PhoneIcon, LocationMarkerIcon, AtSymbolIcon, ChatAltIcon } from '@heroicons/react/solid'
import './HeaderNavbar.css';
const HeaderNavbar = () => {

    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setStickyClass('fixed top-0 left-0 z-50 opacity-90 animated slideInDown') : setStickyClass('relative');
        }
    };


    // nav link active style
    // const navLinkActiveStyle = {
    //     color: 'var(--clr-primary-dark)',
    //     backgroundColor: 'transparent'
    // }


    return (
        <>
            <div style={{ backgroundColor: "#020d26" }} className="top-bar hidden lg:inline-flex pt">
                <div className="container ">
                    <div className="flex justify-evenly items-center">
                        <div className="dlab-topbar-left">
                            <ul className="flex">
                                <li className='flex items-center mr-10'><PhoneIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> 001 1234 6789</li>
                                <li className='flex items-center mr-10'><LocationMarkerIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> 145 St Vincent Street, Glasgow, G2 5JF</li>
                            </ul>
                        </div>
                        <div className="dlab-topbar-right">
                            <ul className='flex'>
                                <li className='flex items-center mr-10'><ChatAltIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> ionic.wealth</li>
                                <li className='flex items-center mr-10'><AtSymbolIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> iw@example.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header id="header_main" className={`navbar dark:bg-dark-variant ${stickyClass}`}>
                <div className="container flex items-center justify-between relative">
                    <div className="logo-wrapper flex-shrink-0 w-28 md:w-36">
                        <Link to="/home">
                            <img src={logos} alt="Ionic Wealth logo" className="w-full" />
                        </Link>
                    </div>

                    <div className="hidden lg:block flex-grow">
                        <MainMenu />
                    </div>
                    <div className="lg:hidden inline-flex items-center">
                        <MobileMenu />
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderNavbar;
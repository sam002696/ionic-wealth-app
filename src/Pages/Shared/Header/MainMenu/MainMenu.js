import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { HomeIcon, ChevronUpIcon } from '@heroicons/react/solid'
import './MainMenu.css'
import useTheme from '../../../../Hooks/DarkMode/useTheme';
import { SunIcon } from '@heroicons/react/solid'
import { MoonIcon } from '@heroicons/react/solid'
import { FiLogOut } from 'react-icons/fi';
import useAuthContexts from '../../../../Hooks/Firebase/useAuthContexts';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const MainMenu = () => {
    const location = useLocation();
    const history = useHistory();
    const { user, logOut, isAdmin, isLoading } = useAuthContexts();
    const [nextTheme, setTheme] = useTheme();


    // nav link active style
    const navLinkActiveStyle = {
        color: 'var(--clr-primary)',
        backgroundColor: 'transparent'
    };

    return (
        <>

            <ul className="dark:text-white h-full w-full flex flex-col md:flex-row md:items-center md:justify-end md:pl-4 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8  uppercase font-medium text-xl md:text-sm lg:text-my-sm text-gray-300 md:text-my-dark-gray tracking-wide md:tracking-wide lg:tracking-my-tiny">
                <li>
                    <NavLink
                        to={location.pathname === '/' ? '/' : '/home'}
                        activeStyle={navLinkActiveStyle}
                        className="hover:text-my-primary flex items-center"
                    >
                        <HomeIcon className=" h-5 w-5 mr-1" aria-hidden="true" /> Home
                    </NavLink>
                </li>
                <Menu as="li">
                    {({ open }) => (
                        <>
                            <Menu.Button as="NavLink"

                                activeStyle={navLinkActiveStyle}
                                className="hover:text-my-primary flex items-center cursor-pointer"
                            >
                                Our Services  <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5`} aria-hidden="true" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-180"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-85"
                                leaveFrom="transform opacity-100 scale-150"
                                leaveTo="transform opacity-0 scale-100"
                            >
                                <Menu.Items className="sub-menu">
                                    <div className="py-5 border-t-4 border-t-blue-400 dark:bg-slate-900">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/allservices"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 text-base py-2'
                                                    )}
                                                >
                                                    All Services
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/allservices/financial"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 text-base py-2'
                                                    )}
                                                >
                                                    Investment & Savings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/allservices/relationship"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 py-2 text-base'
                                                    )}
                                                >
                                                    Life Assurance
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/home"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 py-2 text-base'
                                                    )}
                                                >
                                                    Mortgages
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/home"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 py-2 text-base'
                                                    )}
                                                >
                                                    Estate Planning
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/home"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 py-2 text-base'
                                                    )}
                                                >
                                                    Corporate Advice
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>

                    )}
                </Menu>
                <li>
                    <NavLink
                        to="/all-blogs"
                        activeStyle={navLinkActiveStyle}
                        className="hover:text-my-primary"
                    >
                        Partnership
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/testimonial"
                        activeStyle={navLinkActiveStyle}
                        className="hover:text-my-primary"
                    >
                        Testimonial
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contactus"
                        activeStyle={navLinkActiveStyle}
                        className="hover:text-my-primary"
                    >
                        Contact Us
                    </NavLink>
                </li>

                <Menu as="li">
                    {({ open }) => (
                        <>
                            <Menu.Button as="NavLink"

                                activeStyle={navLinkActiveStyle}
                                className={`${user.displayName ? 'text-sky-600 px-3 p-2 bg-[#dbf0ff] rounded-3xl ring-2 ' : ''}hover:text-my-primary flex items-center cursor-pointer`}
                            >
                                {user.email ? user.displayName : 'CLIENT'}    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''
                                    }  w-5 h-5`} aria-hidden="true" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-180"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-85"
                                leaveFrom="transform opacity-100 scale-150"
                                leaveTo="transform opacity-0 scale-100"
                            >
                                <Menu.Items className={`${user.email ? 'sub-menu-client' : 'sub-menu'}`}>
                                    <div className="py-5 border-t-4 border-t-blue-400 dark:bg-slate-900">
                                        {/* <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/pdf"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 text-base py-2'
                                                    )}
                                                >
                                                    PDF
                                                </Link>
                                            )}
                                        </Menu.Item> */}
                                        {
                                            user.email &&
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to={`${isAdmin ? "/admindashboard" : "/dashboard"}`}
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                            'block px-4 text-base py-2'
                                                        )}
                                                    >
                                                        {
                                                            isLoading ? (
                                                                <svg role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                                </svg>) : (isAdmin ? 'Admin Dashboard' : 'Dashboard')
                                                        }

                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        }


                                        {/* <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/reviewform"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                        'block px-4 py-2 text-base'
                                                    )}
                                                >
                                                    Review Form
                                                </Link>
                                            )}
                                        </Menu.Item> */}
                                        {
                                            user.email ?
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => logOut(location, history)}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-red-400' : 'text-red-700',
                                                                ' px-4 py-2 font-semibold text-base flex items-center justify-items-center w-full justify-between'
                                                            )}
                                                        >
                                                            LOGOUT <span> <FiLogOut className='w-5 h-5' /> </span>
                                                        </button>
                                                    )}
                                                </Menu.Item> :
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/login"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-my-primary' : 'text-gray-700',
                                                                'block px-4 py-2 text-base'
                                                            )}
                                                        >
                                                            CLIENT LOGIN
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </>

                    )}
                </Menu>

                <div className="extra-cell">
                    <button onClick={() => setTheme(nextTheme)} className="dez-page ">{nextTheme === 'dark' ? <SunIcon className='text-white h-10 w-10 fill-yellow-500 hover:fill-yellow-400' /> : <MoonIcon className='text-white h-10 w-10 fill-gray-500 hover:fill-gray-400' />}  </button>
                </div>

            </ul>
        </>
    );
};

export default MainMenu;
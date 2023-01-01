import React, { Fragment, useState } from 'react';
import ContentCA from '../Dashboard/DashboardHome/ContentCA';
import ContentDP from '../Dashboard/DashboardHome/ContentDP';
import ContentQA from '../Dashboard/DashboardHome/ContentQA';
import { Menu, Transition } from '@headlessui/react'
import userImage from './user.png'
import {
    BellIcon,
    // MenuAlt1Icon,
} from '@heroicons/react/outline'
import {

    ChevronDownIcon,
    SearchIcon,
} from '@heroicons/react/solid'
import useAuthContexts from '../../Hooks/Firebase/useAuthContexts';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const DashboardDocuments = () => {
    const { user, logOut } = useAuthContexts();
    const [toggleState, setToggleState] = useState(1);
    // const [sidebarOpen, setSidebarOpen] = useState(false)
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div>
            <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
                {/* <button
                    type="button"
                    className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                {/* Search bar */}
                <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    <div className="flex-1 flex">
                        <form className="w-full flex md:ml-0" action="#" method="GET">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <input
                                    id="search-field"
                                    name="search-field"
                                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                    placeholder="Search transactions"
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                            <div>
                                <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={user.photoURL ? (user.photoURL) : (userImage)}
                                        alt=""
                                    />
                                    <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                        <span className="sr-only">Open user menu for </span>{user.displayName}
                                    </span>
                                    <ChevronDownIcon
                                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/home"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="/home"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={logOut}
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                                            >
                                                Logout
                                            </button>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block lg:border-gray-200 lg:border-t">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex" aria-label="Tabs">

                        <button


                            className={classNames(
                                toggleState === 1 ?
                                    'border-cyan-500 text-cyan-600 bg-slate-200'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'w-1/4 py-4 px-1 text-center  border-b-2 font-medium text-sm bg-gray-100'
                            )}
                            onClick={() => toggleTab(1)}

                        >
                            Client Agreement
                        </button>
                        <button


                            className={classNames(
                                toggleState === 2 ?
                                    'border-cyan-500 text-cyan-600 bg-slate-200'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm bg-gray-100'
                            )}

                            onClick={() => toggleTab(2)}
                        >
                            Data Protection
                        </button>
                        <button


                            className={classNames(
                                toggleState === 3 ?
                                    'border-cyan-500 text-cyan-600 bg-slate-200'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm bg-gray-100'
                            )}
                            onClick={() => toggleTab(3)}

                        >
                            Dynamic Risk Profiler
                        </button>
                        <button


                            className={classNames(
                                toggleState === 4 ?
                                    'border-cyan-500 text-cyan-600 bg-slate-200'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm bg-gray-100'
                            )}
                            onClick={() => toggleTab(4)}

                        >
                            Instructions
                        </button>

                    </nav>
                    <div id="myTabContent">
                        <div className="dashboard-content flex-grow ">

                            <div className="lg:container m-0 lg:m-0 p-0 lg:p-0 lg:px-8">
                                <div className={toggleState === 1 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services "}>
                                    <ContentCA />
                                </div>
                                <div className={toggleState === 2 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                                    <ContentDP />
                                </div>
                                <div className={toggleState === 3 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                                    <ContentQA />
                                </div>
                                <div className={toggleState === 4 ? "  active-content-services bg-white rounded-md py-4 lg:py-8 px-2 lg:px-4 xl:px-6" : "content-services"}>
                                    <ContentQA />
                                </div>
                            </div>






                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardDocuments;
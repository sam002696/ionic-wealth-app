import { Fragment, useState } from 'react'
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { Dialog, Menu, Transition } from '@headlessui/react'
import { HomeIcon, UserAddIcon, ViewListIcon, XIcon } from '@heroicons/react/outline'
import { SearchIcon, SelectorIcon } from '@heroicons/react/solid'
import NewAdminDashboardHome from './NewAdminDashboardHome';
import NewManageDocuments from './NewManageDocuments';
import NewMakeAdmin from './NewMakeAdmin';
import useAuthContexts from '../../Hooks/Firebase/useAuthContexts';
import userPhoto from './user.png'

const teams = [
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const NewAdminDashBoard = () => {
    const { user, logOut } = useAuthContexts()
    let { path, url } = useRouteMatch();
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const navigation = [
        { name: 'Home', to: `${url}`, href: '#', icon: HomeIcon, current: false },
        { name: 'Manage Documents', to: `${url}/managedocuments`, href: '#', icon: ViewListIcon, current: false },
        { name: 'Make Admin', to: `${url}/makeadmin`, href: '#', icon: UserAddIcon, current: false },
    ]
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex z-40">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2">
                                            <div className="space-y-1">
                                                {navigation.map((item) => (
                                                    <NavLink
                                                        key={item.name}
                                                        to={item.to}
                                                        // activeStyle={{
                                                        //     backgroundColor: 'rgb(243 244 246)'
                                                        // }}
                                                        className='text-gray-600 hover:text-gray-900 
                                                            group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'


                                                    >
                                                        <item.icon
                                                            className={classNames(
                                                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                                'mr-3 flex-shrink-0 h-6 w-6'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                            <div className="mt-8">
                                                <h3
                                                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                                    id="mobile-teams-headline"
                                                >
                                                    Teams
                                                </h3>
                                                <div className="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
                                                    {teams.map((team) => (
                                                        <a
                                                            key={team.name}
                                                            href={team.href}
                                                            className="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                                        >
                                                            <span
                                                                className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                                                                aria-hidden="true"
                                                            />
                                                            <span className="truncate">{team.name}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>


                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
                        <div className="flex items-center flex-shrink-0 px-6">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
                                alt="Workflow"
                            />
                        </div>
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
                            {/* User account dropdown */}
                            <Menu as="div" className="px-3 relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 ">
                                        <span className="flex w-full justify-between items-center">
                                            <span className="flex min-w-0 items-center justify-between space-x-3">
                                                <img
                                                    className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                                                    src={user.photoURL ? user.photoURL : userPhoto}
                                                    alt=""
                                                />
                                                <span className="flex-1 flex flex-col min-w-0">
                                                    <span className="text-gray-900 text-sm font-medium truncate">{user.displayName}</span>
                                                    <span className="text-gray-500 text-sm truncate">@{user.displayName}</span>
                                                </span>
                                            </span>
                                            <SelectorIcon
                                                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </span>
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
                                    <Menu.Items className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/profile"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        View profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/settings"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/notifications"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Notifications
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/app"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Get desktop app
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/support"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Support
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={logOut}
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'w-full text-left px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Logout
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            {/* Sidebar Search */}
                            <div className="px-3 mt-5">
                                <label htmlFor="search" className="sr-only">
                                    Search
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div
                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                                        aria-hidden="true"
                                    >
                                        <SearchIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md py-2"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                            {/* Navigation */}
                            <nav className="px-3 mt-6">
                                <div className="space-y-1">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            exact
                                            to={item.to}
                                            activeStyle={{
                                                backgroundColor: 'rgb(229 231 235)'
                                            }
                                            }
                                            className='text-gray-600 hover:text-gray-900
                                            group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'


                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                    'mr-3 flex-shrink-0 h-6 w-6'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    {/* Secondary navigation */}
                                    <h3
                                        className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                        id="desktop-teams-headline"
                                    >
                                        Teams
                                    </h3>
                                    <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
                                        {teams.map((team) => (
                                            <a
                                                key={team.name}
                                                href={team.href}
                                                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                <span
                                                    className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                                                    aria-hidden="true"
                                                />
                                                <span className="truncate">{team.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="lg:pl-64 flex flex-col flex-1">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <NewAdminDashboardHome />
                        </Route>
                        <Route path={`${path}/managedocuments`}>
                            <NewManageDocuments />
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <NewMakeAdmin />
                        </Route>

                    </Switch>
                </div>


            </div>
        </>
    )
};
export default NewAdminDashBoard;
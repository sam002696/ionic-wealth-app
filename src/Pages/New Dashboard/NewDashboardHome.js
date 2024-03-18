import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import userImage from "./user.png";
import {
  BellIcon,
  // MenuAlt1Icon,
  ScaleIcon,
  UserIcon,
  CurrencyPoundIcon,
  InformationCircleIcon,
  ClockIcon,
  TagIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  ShieldCheckIcon,
  CollectionIcon,
  OfficeBuildingIcon,
  ViewGridIcon,
  ClipboardIcon,
} from "@heroicons/react/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  ExclamationIcon,
} from "@heroicons/react/solid";
import useAuthContexts from "../../Hooks/Firebase/useAuthContexts";
import axios from "axios";

const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewDashboardHome = () => {
  const [message, setMessage] = useState("");
  const location = useHistory();
  const changeLocation = (e) => {
    location.push(e);
  };
  var today = new Date();
  var curHr = today.getHours();

  useEffect(() => {
    if (curHr < 12) {
      setMessage("Good morning");
    } else if (curHr < 18) {
      setMessage("Good afternoon");
    } else {
      setMessage("Good evening");
    }
  }, [curHr]);
  // const [sidebarOpen, setSidebarOpen] = useState(false)
  const [tableDocuments, setTableDocuments] = useState({});
  const [loading, setLoading] = useState(false);
  const { user, token, logOut } = useAuthContexts();
  useEffect(() => {
    setLoading(true);
    const email = user?.email;
    const url = `http://localhost:5500/documents/${email}`;
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTableDocuments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user.email, token]);

  const cards = [
    {
      name: "Owner",
      color: "bg-gray-200",
      href: "#",
      icon: UserIcon,
      amount: tableDocuments?.investmentPension?.ownerName,
    },
    {
      name: "Invested Amount",
      color: "bg-red-100",
      href: "#",
      icon: CurrencyPoundIcon,
      amount: tableDocuments?.investmentPension?.investedAmount,
    },
    {
      name: "Description",
      color: "bg-indigo-50",
      href: "#",
      icon: ScaleIcon,
      amount: tableDocuments?.investmentPension?.description,
    },
    {
      name: "CurrentValue",
      color: "bg-fuchsia-100",
      href: "#",
      icon: CurrencyPoundIcon,
      amount: tableDocuments?.investmentPension?.currentValue,
    },
    {
      name: "Provider",
      color: "bg-green-100",
      href: "#",
      icon: ScaleIcon,
      amount: tableDocuments?.investmentPension?.provider,
    },
    {
      name: "InTrust",
      color: "bg-yellow-100",
      href: "#",
      icon: InformationCircleIcon,
      amount: tableDocuments?.investmentPension?.inTrust,
    },
    {
      name: "PlanNo",
      color: "bg-sky-100",
      href: "#",
      icon: TagIcon,
      amount: tableDocuments?.investmentPension?.planNo,
    },
    {
      name: "StartDate",
      color: "bg-cyan-100",
      href: "#",
      icon: ClockIcon,
      amount: tableDocuments?.investmentPension?.startDate,
    },
  ];
  const cardsSecond = [
    {
      name: "LifeAssured",
      color: "bg-emerald-100",
      href: "#",
      icon: CheckIcon,
      amount: tableDocuments?.insurance?.lifeAssured,
    },
    {
      name: "SumAssured",
      color: "bg-teal-100",
      href: "#",
      icon: ViewGridIcon,
      amount: tableDocuments?.insurance?.sumAssured,
    },
    {
      name: "Purpose",
      color: "bg-slate-200",
      href: "#",
      icon: CollectionIcon,
      amount: tableDocuments?.insurance?.purpose,
    },
    {
      name: "PolicyType",
      color: "bg-sky-100",
      href: "#",
      icon: ShieldCheckIcon,
      amount: tableDocuments?.insurance?.policyType,
    },
    {
      name: "PremiumFrequency",
      color: "bg-amber-100",
      href: "#",
      icon: ChartBarIcon,
      amount: tableDocuments?.insurance?.premiumFrequency,
    },
    {
      name: "InsuranceCompany",
      color: "bg-orange-100",
      href: "#",
      icon: OfficeBuildingIcon,
      amount: tableDocuments?.insurance?.insuranceCompany,
    },
    {
      name: "StartDate",
      color: "bg-stone-200",
      href: "#",
      icon: CalendarIcon,
      amount: tableDocuments?.insurance?.startDate,
    },
    {
      name: "PolicyNo",
      color: "bg-orange-100",
      href: "#",
      icon: ClipboardIcon,
      amount: tableDocuments?.insurance?.policyNo,
    },
    {
      name: "MaturityDate",
      color: "bg-indigo-100",
      href: "#",
      icon: CalendarIcon,
      amount: tableDocuments?.insurance?.maturityDate,
    },
  ];
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
                <div
                  className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
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
                    src={user?.photoURL ? user?.photoURL : userImage}
                    alt=""
                  />
                  <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                    <span className="sr-only">Open user menu for </span>{" "}
                    {user.displayName}
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
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/home"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={logOut}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                        )}
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

      <main className="flex-1 pb-8">
        {/* Page header */}
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block"
                    src={user?.photoURL ? user?.photoURL : userImage}
                    alt=""
                  />
                  <div>
                    <div className="flex items-center">
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                        alt=""
                      />
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        {message}, {user?.displayName}
                      </h1>
                    </div>
                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                      <dt className="sr-only">Company</dt>
                      <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                        <OfficeBuildingIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Duke street studio
                      </dd>
                      <dt className="sr-only">Account status</dt>
                      <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                        <CheckCircleIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                        Verified account
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <button
                  type="button"
                  onClick={() => changeLocation("/newdashboard/documents")}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Documents
                </button>
                <button
                  type="button"
                  onClick={() =>
                    changeLocation("/newdashboard/uploadDocuments")
                  }
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
        {!(tableDocuments?.investmentPension && tableDocuments?.insurance) && (
          <div className="rounded-md bg-yellow-50 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ExclamationIcon
                  className="h-6 w-6 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-yellow-800">
                  Attention needed
                </h3>
                <div className="mt-2 text-sm text-yellow-700 tracking-wide">
                  <p>
                    Admin has not uploaded any information yet. Please come back
                    and check again. You will soon be notified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-8">
          {loading ? (
            <div className="border border-cyan-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-5">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Investment & Pensions
              </h2>
              <div className="mt-2 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {/* Card */}
                {cards.map((card) => (
                  <div
                    key={card.name}
                    className={`${card.color} bg-white overflow-hidden shadow rounded-lg`}
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <card.icon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              {card.name}
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">
                                {card.amount}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                      <div className="text-sm">
                        <a
                          href={card.href}
                          className="font-medium text-cyan-700 hover:text-cyan-900"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {loading ? (
            <div className="border border-cyan-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Insurance
              </h2>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {cardsSecond.map((card) => (
                  <div
                    key={card.name}
                    className={`${card.color} bg-white overflow-hidden shadow rounded-lg`}
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <card.icon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              {card.name}
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">
                                {card.amount}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                      <div className="text-sm">
                        <a
                          href={card.href}
                          className="font-medium text-cyan-700 hover:text-cyan-900"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
            Recent activity
          </h2>

          {/* Activity list (smallest breakpoint only) */}
          <div className="shadow sm:hidden">
            <ul
              role="list"
              className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
            >
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <a
                    href={transaction.href}
                    className="block px-4 py-4 bg-white hover:bg-gray-50"
                  >
                    <span className="flex items-center space-x-4">
                      <span className="flex-1 flex space-x-2 truncate">
                        <CashIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="flex flex-col text-gray-500 text-sm truncate">
                          <span className="truncate">{transaction.name}</span>
                          <span>
                            <span className="text-gray-900 font-medium">
                              {transaction.amount}
                            </span>{" "}
                            {transaction.currency}
                          </span>
                          <time dateTime={transaction.datetime}>
                            {transaction.date}
                          </time>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <nav
              className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
              aria-label="Pagination"
            >
              <div className="flex-1 flex justify-between">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>

          {/* Activity table (small breakpoint and up) */}
          <div className="hidden sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          scope="col"
                        >
                          Transaction
                        </th>
                        <th
                          className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          scope="col"
                        >
                          Amount
                        </th>
                        <th
                          className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block"
                          scope="col"
                        >
                          Status
                        </th>
                        <th
                          className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          scope="col"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="bg-white">
                          <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="flex">
                              <a
                                href={transaction.href}
                                className="group inline-flex space-x-2 truncate text-sm"
                              >
                                <CashIcon
                                  className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <p className="text-gray-500 truncate group-hover:text-gray-900">
                                  {transaction.name}
                                </p>
                              </a>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                            <span className="text-gray-900 font-medium">
                              {transaction.amount}{" "}
                            </span>
                            {transaction.currency}
                          </td>
                          <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                            <span
                              className={classNames(
                                statusStyles[transaction.status],
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                              )}
                            >
                              {transaction.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                            <time dateTime={transaction.datetime}>
                              {transaction.date}
                            </time>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <nav
                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                    aria-label="Pagination"
                  >
                    <div className="hidden sm:block">
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">20</span> results
                      </p>
                    </div>
                    <div className="flex-1 flex justify-between sm:justify-end">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Previous
                      </a>
                      <a
                        href="#"
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Next
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewDashboardHome;

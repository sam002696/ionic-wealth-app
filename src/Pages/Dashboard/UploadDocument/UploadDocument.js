import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiAlertTriangle } from "react-icons/fi";
import { InformationCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import userImage from "./user.png";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import useAuthContexts from "../../../Hooks/Firebase/useAuthContexts";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// initialize Swal (sweet alert)
const MySwal = withReactContent(Swal);

const UploadDocument = () => {
  const { user, logOut } = useAuthContexts();
  // const [sidebarOpen, setSidebarOpen] = useState(false)

  const status = "Uploading Documents,Please wait...";
  const [caLoading, setCaLoading] = useState(false);
  const [dpLoading, setDpLoading] = useState(false);
  const [qLoading, setQLoading] = useState(false);
  const [clientAgreement, setClientAgreement] = useState(null);
  const [dataProtection, setDataProtection] = useState(null);
  const [questions, setQuestions] = useState(null);

  const [adding, setAdding] = useState(false);
  const [resetfile, setReset] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // add review
  const onSubmit = async (data) => {
    setAdding(true);
    const data1 = new FormData();
    const data2 = new FormData();
    const data3 = new FormData();
    data.clientAgreement = clientAgreement;
    data.dataProtection = dataProtection;
    data.questions = questions;

    data1.append("file", data.clientAgreement);
    data2.append("file", data.dataProtection);
    data3.append("file", data.questions);
    //upload presets
    data1.append("upload_preset", "eez1w4gg");
    data2.append("upload_preset", "eez1w4gg");
    data3.append("upload_preset", "eez1w4gg");

    const uploadRes1 = await axios
      .post("https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload", data1)
      .finally(() => {
        setCaLoading(true);
      });
    const uploadRes2 = await axios
      .post("https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload", data2)
      .finally(() => {
        setDpLoading(true);
      });
    const uploadRes3 = await axios
      .post("https://api.cloudinary.com/v1_1/dvqolnmnp/image/upload", data3)
      .finally(() => {
        setQLoading(true);
      });
    const { url } = uploadRes1.data;

    if (url) {
      setCaLoading(false);
    }

    const { url: url2 } = uploadRes2.data;

    if (url2) {
      setDpLoading(false);
    }

    const { url: url3 } = uploadRes3.data;

    if (url3) {
      setQLoading(false);
    }
    data.clientAgreement = url;
    data.dataProtection = url2;
    data.questions = url3;
    console.log(data);
    // setAdding(true);
    // if (data.userImg) {
    // 	data.userImg = user?.photoURL ? user?.photoURL : null;
    // } else {
    // 	data.userImg = null;
    // }

    axios
      .post("http://localhost:5500/documents", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          console.log(res.data.insertedId);
          reset();
          setReset(true);

          MySwal.fire({
            icon: "success",
            title: `<span className="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Documents Uploaded Successfully!</span><br> Your Document ID is ${res.data.insertedId.slice(
              0,
              10
            )}`,
            confirmButtonText: `OK`,
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn-regular py-2",
            },
          });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setAdding(false));
  };

  // required field mark
  // const requiredMark = <RiAsterisk className="inline text-my-xs text-red-500 transform -translate-y-1" />;
  return (
    <>
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
                    src={user.photoURL ? user.photoURL : userImage}
                    alt=""
                  />
                  <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                    <span className="sr-only">Open user menu for </span>
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

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 lg:border-gray-200 lg:border-t">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className=" mx-auto">
          <div className="max-w-5xl mx-auto mt-4 mb-10  rounded-md">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-md ">
              <div className=" grid grid-cols-2 gap-x-2">
                <div className="mb-6">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="John Theo"
                    {...register("userName", { required: true })}
                  />
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-x-2">
                <div className="flex justify-center items-center w-full mb-6">
                  <label
                    for="dropzone-file"
                    className="flex flex-col justify-center items-center w-full h-64  rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        className={`${
                          caLoading
                            ? "animate-bounce text-blue-500"
                            : "text-gray-400  "
                        } mb-3 w-10 h-10`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Click to upload your{" "}
                          <span className="underline  underline-offset-2">
                            client agreement
                          </span>{" "}
                          file
                        </span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF, DOC
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      accept=".pdf,.doc"
                      type="file"
                      className="hidden"
                      onChange={(e) => setClientAgreement(e.target.files[0])}
                      required
                    />

                    {clientAgreement && (
                      <div
                        className={`${
                          resetfile
                            ? "hidden"
                            : "border-2 p-2 rounded-md text-gray-600"
                        } `}
                      >
                        {clientAgreement.name}
                      </div>
                    )}
                  </label>
                </div>
                <div className="flex justify-center items-center w-full mb-6">
                  <label
                    for="dropzone-file-data"
                    className="flex flex-col justify-center items-center w-full h-64  rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        className={`${
                          dpLoading
                            ? "animate-bounce text-blue-500"
                            : "text-gray-400  "
                        } mb-3 w-10 h-10 `}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">
                          Click to upload your{" "}
                          <span className="underline  underline-offset-2">
                            data protection
                          </span>{" "}
                          file
                        </span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PDF, DOC
                      </p>
                    </div>
                    <input
                      id="dropzone-file-data"
                      accept=".pdf,.doc"
                      type="file"
                      className="hidden"
                      onChange={(e) => setDataProtection(e.target.files[0])}
                      required
                    />
                    {dataProtection && (
                      <div
                        className={`${
                          resetfile
                            ? "hidden"
                            : "border-2 p-2 rounded-md text-gray-600"
                        } `}
                      >
                        {dataProtection.name}
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex justify-center items-center w-full mb-6">
                <label
                  for="dropzone-file-questions"
                  className="flex flex-col justify-center items-center w-full h-64  rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      className={`${
                        qLoading
                          ? "animate-bounce text-blue-500"
                          : "text-gray-400"
                      } mb-3 w-10 h-10`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">
                        Click to upload your{" "}
                        <span className="underline  underline-offset-2">
                          risk profiler
                        </span>{" "}
                        file
                      </span>{" "}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PDF, DOC
                    </p>
                  </div>
                  <input
                    id="dropzone-file-questions"
                    accept=".pdf,.doc"
                    type="file"
                    className="hidden"
                    onChange={(e) => setQuestions(e.target.files[0])}
                    required
                  />
                  {questions && (
                    <div
                      className={`${
                        resetfile
                          ? "hidden"
                          : "border-2 p-2 rounded-md text-gray-600"
                      } `}
                    >
                      {questions.name}
                    </div>
                  )}
                </label>
              </div>
              <div className="rounded-md bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700">
                      Fill and upload all fields to have a successful upload
                    </p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6">
                      <a
                        href="#"
                        className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                      >
                        Details <span aria-hidden="true">&rarr;</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button> */}
              <div className="mt-4">
                {(errors.userName || errors.phoneno || errors.email) && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-10 flex items-center"
                    role="alert"
                  >
                    <span className="mr-3">
                      <FiAlertTriangle className="text-red-700 h-8 w-8" />
                    </span>
                    <span className="block sm:inline">
                      {" "}
                      Please fill out the field.
                    </span>
                  </div>
                )}
                {!adding ? (
                  <input
                    type="submit"
                    value="Upload"
                    className="font-normal p-3 review-form-button text-lg tracking-wider"
                  />
                ) : (
                  <div className="inline-block">
                    <LoadingStatus status={status} />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadDocument;

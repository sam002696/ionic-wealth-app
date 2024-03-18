import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAuthContexts from "../../../Hooks/Firebase/useAuthContexts";
// initialize Swal (sweet alert)
const MySwal = withReactContent(Swal);

const MakeAdmin = () => {
  const status = "Adding Admin,Please wait...";
  const { token } = useAuthContexts();
  const [users, setUsers] = useState([]);
  const [processing, setProcessing] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // load all users
  useEffect(() => {
    axios
      .get(`http://localhost:5500/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // process make admin
  const onSubmit = (data) => {
    setProcessing(true);
    // return if email not registered
    const isRegisteredEmail = users.find((user) => user.email === data.email);
    if (!isRegisteredEmail) {
      setProcessing(false);
      MySwal.fire({
        icon: "warning",
        title: `<span class="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Not allowed!</span>`,
        html: `<p class="text-sm"><span class="font-semibold">${data.email}</span> is not registered yet. Email must be registered before adding Admin role.</p>`,
        confirmButtonText: `OK`,
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn-regular py-2",
        },
      });
      return;
    }

    // set admin role in database
    const url = `http://localhost:5500/users/admin`;
    axios
      .put(url, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          MySwal.fire({
            icon: "success",
            title: `<span class="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Successful!</span>`,
            html: `<p class="text-sm"><span class="font-semibold">${data.email}</span> is now an ADMIN.</p>`,
            confirmButtonText: `OK`,
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn-regular py-2",
            },
          });
          reset();
        } else {
          MySwal.fire({
            icon: "info",
            title: `<span class="inline-block font-medium text-xl md:text-2xl tracking-normal md:tracking-normal leading-normal md:leading-normal">Action not taken</span>`,
            html: `<p class="text-sm"><span class="font-semibold">${data.email}</span> is already set as admin.</p>`,
            confirmButtonText: `OK`,
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn-regular py-2",
            },
          });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setProcessing(false));

    // MySwal.fire({
    // 	icon: 'warning',
    // 	title: ``,
    // 	html: `<span class="inline-block font-medium text-sm">For security purpose make admin system is disabled currently.</span>`,
    // 	confirmButtonText: `OK`,
    // 	buttonsStyling: false,
    // 	customClass: {
    // 		confirmButton: 'btn-regular py-2',
    // 	},
    // });
  };

  return (
    <>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Make Admin
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:order-0 sm:ml-0"
          >
            Home
          </button>
          <button
            type="button"
            className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:order-1 sm:ml-3"
          >
            Documents
          </button>
        </div>
      </div>
      <div className="bg-white ">
        <div className="relative sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-cyan-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-cyan-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-cyan-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Make someone admin to collaborate in work.
                  </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-cyan-200">
                    Only an admin can make another user as an admin. Contact
                    your developer if you face any problems regarding this.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action="#"
                  className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
                      placeholder="Enter the email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    {!processing ? (
                      <button
                        type="submit"
                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-cyan-500 text-base font-medium text-white shadow hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600 sm:px-10"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <LoadingStatus status={status} />
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section id="make_admin" className="make-admin">
				<h3 className="uppercase font-semibold text-lg lg:text-2xl leading-none lg:leading-none mb-6">
					Make Admin
				</h3>
				<div className="max-w-md">
					<form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
						<div>
							<input
								type="email"
								placeholder="Email address"
								className="form-field"
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<span className="text-xs text-red-600">This field is required</span>
							)}
						</div>
						<div>
							{!processing ? (
								<input
									type="submit"
									value="Confirm"
									className="btn-regular"
								/>
							) : (
								<LoadingStatus status={status} />
							)}
						</div>
					</form>
				</div>



			</section> */}
    </>
  );
};

export default MakeAdmin;

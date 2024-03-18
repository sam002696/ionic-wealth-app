import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuthContexts from "../../../Hooks/Firebase/useAuthContexts";
import LoadingStatus from "../../Shared/LoadingStatus/LoadingStatus";
import "./ContentTable.css";

const ContentTable = () => {
  const status = "Fetching Information...";
  const [tableDocuments, setTableDocuments] = useState({});
  const [loading, setLoading] = useState(false);
  const { user, token } = useAuthContexts();

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

  return (
    <>
      {loading ? (
        <LoadingStatus status={status} />
      ) : !tableDocuments?.investmentPension && !tableDocuments?.insurance ? (
        <div
          id="alert-additional-content-5"
          className={`${
            tableDocuments?.investmentPension && tableDocuments?.insurance
              ? "hidden"
              : "p-4 bg-gray-300 rounded-lg dark:bg-gray-700"
          }`}
          role="alert"
        >
          <div className="my-4 text-sm text-gray-700 dark:text-gray-300 tracking-wide text-center">
            The Admin has not uploaded any documents yet. You will be able to
            see the documents once they are uploaded. Come back later.
          </div>
        </div>
      ) : (
        <div className="">
          <section className="user-details section-gap-userdata">
            <div className="container">
              <div className="grid grid-cols-2 gap-x-10 ">
                {/* Details Content */}
                <div className="">
                  <div className="p-4  bg-white rounded-lg border border-blue-500 shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5 shadow-sky-500/50">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white underline underline-offset-2">
                        INVESMENT & PENSIONS
                      </h5>
                    </div>
                    <div className="flow-root">
                      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                OWNER
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.ownerName}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                INVESTED AMOUNT
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {
                                tableDocuments?.investmentPension
                                  ?.investedAmount
                              }
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                DESCRIPTION
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.description}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                CURRENT VALUE
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.currentValue}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                PROVIDER
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.provider}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                IN TRUST
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.inTrust}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                PLAN NO
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.planNo}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-blue-500 truncate dark:text-white">
                                START DATE
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.investmentPension?.startDate}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="p-4  bg-white rounded-lg border border-green-500 shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5 shadow-green-500/50">
                    <div className=" mb-4">
                      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white underline underline-offset-2">
                        INSURANCE
                      </h5>
                    </div>
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="divide-y divide-gray-200 dark:divide-gray-700"
                      >
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                LIFE ASSURED/ POLICY BENEFICIARY
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.lifeAssured}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                SUM ASSURED/ BENEFITS
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.sumAssured}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                PURPOSE
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.purpose}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                POLICY TYPE
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.policyType}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                PREMIUM/FREQUENCY
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.premiumFrequency}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                INSURANCE COMPANY
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.insuranceCompany}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                START DATE
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.startDate}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                POLICY NO
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.policyNo}
                            </div>
                          </div>
                        </li>
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-green-500 truncate dark:text-white">
                                MATURITY DATE
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {tableDocuments?.insurance?.maturityDate}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ContentTable;

import React from "react";
import bgHome from '../assets/images/bg-home.jpg';

const PlayGame = () => {
  return (
    <div className="w-full p-4 h-[100vh]">
      <h1 className="text-2xl font-bold p-8 text-center w-full text-white">Select Your Room</h1>
      <div className="relative rooms flex justify-center items-center gap-10">
        
        {/* Room 1 */}
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg"
            src={bgHome}
            alt="Room 2"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Learn about the best ways to repay your debt 
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021.
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Debt Management
            </button>
          </div>
        </a>

        {/* Room 2 */}
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg "
            src={bgHome}
            alt="Room 2"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021.
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Taxation
            </button>
          </div>
        </a>

        {/* Room 3 */}
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-w-xs hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg"
            src={bgHome}
            alt="Room 2"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021.
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Savings
            </button>
          </div>
        </a>

        
      </div>
    </div>
  );
};

export default PlayGame;

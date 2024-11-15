import React from "react";
import bgHome from '../assets/images/bg-home.jpg';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PlayGame = () => {
    const navigate = useNavigate();
  return (
    <div className="h-[92vh]">
      <h1 className="text-2xl font-bold p-8 text-center w-full text-white">Select Your Room</h1>
      <div className="relative rooms flex justify-center items-center gap-10">
        
        {/* Room 1 */}
        <Link
          to="debt"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-w-xs hover:opacity-40"
        >
          <img
            className="object-cover w-full rounded-t-lg"
            src={bgHome}
            alt="Room 1"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Master the Art of Debt Repayment
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Discover practical strategies and expert tips to pay off your debt faster and smarter.
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Debt Management
            </button>
          </div>
        </Link>

        {/* Room 2 */}
        <Link
          to="taxation"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-w-xs hover:opacity-40"
        >
          <img
            className="object-cover w-full rounded-t-lg "
            src={bgHome}
            alt="Room 2"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Unlock the Secrets to Smart Tax Planning
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Learn how to optimize your taxes and keep more of your hard-earned money. 
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Tax Planning
            </button>
          </div>
        </Link>

        {/* Room 3 */}
        <Link
          to="savings"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow max-w-xs hover:opacity-40"
        >
          <img
            className="object-cover w-full rounded-t-lg"
            src={bgHome}
            alt="Room 3"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Grow Your Wealth with Smart Savings
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Unlock the power of saving effectively, and set yourself up for long-term financial success.
            </p>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Wealth Management
            </button>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default PlayGame;

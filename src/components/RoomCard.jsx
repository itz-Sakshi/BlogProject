import React from "react";

const RoomCard = ({ title, description, buttonText, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow w-72 h-[400px] hover:opacity-80 cursor-pointer" // Fixed width and height for consistent size
    >
      <img
        className="object-cover w-full h-40 rounded-t-lg" // Fixed image height
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 h-full overflow-hidden">
        {/* Title with line clamp */}
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2">
          {title}
        </h5>

        {/* Description with line clamp */}
        <p className="mb-3 font-normal text-gray-700 line-clamp-3">
          {description}
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-auto"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;

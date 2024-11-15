import React from "react";
import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";
import { useNavigate } from "react-router";

const PlayGame = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[92vh] flex flex-col items-center">
      <h1 className="text-2xl font-bold p-8 text-center w-full text-white">Select Your Room</h1>
      <div className="rooms flex flex-wrap justify-center items-center gap-10">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            title={room.title}
            description={room.description}
            buttonText={room.buttonText}
            image={room.image}
            onClick={() => {navigate(room.link)}}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayGame;

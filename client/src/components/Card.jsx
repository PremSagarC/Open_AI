import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";


const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl relative group shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-full object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div
        className="group-hover:flex flex-col max-h-94.5% hidden absolute
      bottom-0 right-0 left-0 rounded-md bg-[#10131f] m-2 p-4
      "
      >
        <p className="text-white text-xs overflow-y-auto prompt">{prompt}</p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 text-white uppercase rounded-full bg-orange-500 flex justify-center items-center">
              {name[0]}
            </div>
            <p className="text-white text-sm">
              {name}
            </p>
          </div>
          <button className="outline-none bg-blue-400 text rounded-full"
          type="button" onClick={() => downloadImage(_id,photo)}>
            <img src={download} alt="download"  className="w-6 h-6 object-contain invert"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

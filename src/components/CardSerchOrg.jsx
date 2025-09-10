import React from "react";
import { IconProfile } from "../ui-components";

function CardSerchOrg({ name = "Zanele Khumalo" }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center cursor-pointer">
        <div
          className={`avatar-container w-12 h-12 rounded-full bg-cyan-500 mb-2 overflow-hidden`}
        >
          <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-md font-bold">Zanele Khumalo</p>
          <div className="flex gap-2 justify-center mb-4 ">
            <div className="flex items-center text-gray-600 text-sm">
              <IconProfile type="id" />
              <span>2786036</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <IconProfile type="Organitation" />
              <span>Organización Bimbo Brasil</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
            <IconProfile type="Job" />
            <span>Supervisor Production</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <IconProfile type="World" />
            <span>Brasil</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSerchOrg;

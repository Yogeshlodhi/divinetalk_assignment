import React, { memo } from "react";
import Image from "next/image";
import { Star, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AstrologerType } from "../type";
import { calculate_charge } from "@/lib/utils";

const AstroCard = ({ data, id }: { data: AstrologerType; id: number }) => {
  const charge = calculate_charge({ charge: data.charge, discount: data.discount });

  return (
    <div
      className="w-full sm:w-[100%] h-auto bg-white rounded-xl text-black flex items-center justify-between p-4 gap-4 shadow-[0px_1px_6px_0px_#0E233926]"
      key={id}
    >
      {/* Image Section */}
      <div className="flex justify-center items-center w-[30%] sm:w-[20%] mr-2 overflow-hidden">
        <Image
          src={data.image || "/default-image.jpg"}
          alt={data.name}
          width={108}
          height={108}
          className="rounded-full border-2 border-green-500 overflow-hidden"
        />
      </div>

      {/* Content Section */}
      <div className="w-[70%] sm:w-[80%] flex justify-between items-start overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col justify-between items-start gap-2 w-[50%] sm:w-[50%]">
          <div className="flex justify-between items-center w-full">
            <h1 className="sm:font-semibold text-xl">{data.name}</h1>
            <div className="flex items-center gap-1">
              <Star className="text-[#FCB742]" fill="#FCB742" stroke="#FCB742" strokeWidth={0} />
              <h2>{data.rating}</h2>
            </div>
          </div>

          <div className="font-normal text-sm text-[#0E233980] w-[100%]">
            <p className="truncate">{data.specialization.join(", ")}</p>
            <p className="truncate">{data.languages.join(", ")}</p>
            <p>Exp. {data.experience} Years</p>
            {charge === 0 ? (
              <div className="flex items-center gap-4">
                <p className="line-through">₹{data.charge}</p>
                <span className="text-red-500 text-lg">FREE</span>
              </div>
            ) : (
              <p className="text-black">₹{charge}/min</p>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-between items-center w-[40%] sm:w-[50%] h-full relative">
          <div className="flex w-full justify-end">
            <Verified className="text-green-500 text-xl" />
          </div>
          {data.status === true ? (
            <div className="flex w-full justify-end absolute right-0 top-[80px]">
              <Button className="text-green-400 bg-white border-green-400 border w-[6rem] font-bold hover:bg-green-400 hover:text-white">
                Chat
              </Button>
            </div>
          ) : (
            <div className="flex w-full justify-end absolute right-0 top-[65px]">
              <div className="flex flex-col">
                <Button
                  className="text-red-400 bg-white border-red-400 border w-[6rem] font-bold hover:bg-red-400 hover:text-white"
                  disabled
                >
                  Chat
                </Button>
                <span className="text-red-400 text-[10px] text-center">Wait - 7 min</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(AstroCard);
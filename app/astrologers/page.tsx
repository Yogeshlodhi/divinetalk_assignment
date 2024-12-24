import AstroCard from "@/app/Components/AstroCard";
import { AstrologerType } from "../type";
import AstroLogersData from "../data";

const AstrologersPage = () => {
  return (
    <div className="space-y-4 px-4 sm:px-2">
      <h1 className="hidden md:block text-[48px] font-[400] text-center p-4">Chat with Astrologers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-12 lg:p-12 lg:pt-0">
        {AstroLogersData.map((astrologer: AstrologerType, index) => (
          <AstroCard key={index} data={astrologer} id={index} />
        ))}
      </div>
    </div>
  );
};

export default AstrologersPage;
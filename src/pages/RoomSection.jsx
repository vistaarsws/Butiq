import { useState } from "react";
import { ChevronDown } from "lucide-react";
import InfoIcon from "@mui/icons-material/Info";
import Header from "../components/Templates/Header/Header";
import expBanner from "../assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";
import ProgressBar from "../components/ProgressBar/ProgressBar";

// Room Data
const rooms = [
  {
    name: "LUXURY CHALET WITH PRIVATE PATIO",
    description:
      "Generous in both size and luxuries, our Luxury Chalets find the right balance between modern luxuries and historical charm. Each of the rooms come with a large patio which you could argue, were made for morning tea, afternoon tea, or really, no-reason tea.",
    price: 28000,
    image:
      "https://dax6u9k4peaex.cloudfront.net/assets/images/living/assam/luxury_chalet_with_private_patio.png",
  },
  {
    name: "Bungalow Room",
    description:
      "The Bungalow Room invites you to step into a world of timeless elegance, where soaring high ceilings exude charm, and modern luxuries seamlessly blend with historic allure—creating an experience that would leave even its former colonial owners envious.",
    price: 28000,
    image:
      "https://dax6u9k4peaex.cloudfront.net/assets/images/living/assam/bungalow_room.png",
  },
];

// Guest Selector Component
const GuestSelector = ({ label, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-black text-white px-4 py-2 min-w-[120px] text-sm"
      >
        {value} {label}
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white border shadow-lg w-full z-10">
          {options.map((num) => (
            <button
              key={num}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
              onClick={() => {
                onChange(num);
                setIsOpen(false);
              }}
            >
              {num} {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Price Breakdown Component
const PriceBreakdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="ml-2 relative">
        <InfoIcon />
      </button>
      {isOpen && (
        <div className="absolute top-full right-8 mt-4 bg-white shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] border rounded-md p-4 w-64 z-20 -translate-y-8">
          {/* Arrow Pointer */}
          <div className="absolute top-2 -right-2 w-4 h-4 rotate-45 bg-white border-t border-r border-gray-200"></div>
          <h3 className="font-medium text-center mb-2">Price Breakdown</h3>
          <div className="flex border border-black">
            {/* Date Column */}
            <div className="flex flex-col w-1/2 border-r border-black">
              <span className="bg-black text-white text-center p-2 font-medium">
                Date
              </span>
              <span className="p-2 text-xs text-center">Feb 26, 2025</span>
            </div>
            {/* Price Column */}
            <div className="flex flex-col w-1/2">
              <span className="bg-black text-white text-center p-2 font-medium">
                Price
              </span>
              <span className="p-2 text-xs text-center">INR 28000</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Room Card Component
const RoomCard = ({ room }) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <div className="grid md:grid-cols-2 gap-4 py-4 items-center border-t border-dashed border-gray-500">
      {/* Room Image */}
      <div className="h-[400px] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Room Details */}
      <div className="pl-5">
        <h2 className="text-lg font-medium mb-4 border-b border-dashed border-gray-500">
          {room.name}
        </h2>
        <p className="text-lg font-medium mb-6 leading-relaxed border-b border-dashed border-gray-500">
          {room.description}
        </p>

        {/* Guest Selection */}
        <div className="flex gap-4 mb-6 border-b border-dashed border-gray-500 pb-6">
          <GuestSelector
            label="ADULTS"
            value={adults}
            onChange={setAdults}
            options={[1, 2, 3, 4]}
          />
          <GuestSelector
            label="CHILDREN"
            value={children}
            onChange={setChildren}
            options={[0, 1, 2, 3, 4]}
          />
        </div>

        {/* Price Section */}
        <div className="relative flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">
            INR {room.price}/- EXCLUSIVE OF TAXES
          </h2>
          <PriceBreakdown />
        </div>

        {/* Book Now Button */}
        <button className="bg-black text-white px-6 py-3 mb-4 hover:bg-black/90">
          BOOK NOW
        </button>
        <p className="text-sm text-gray-500">
          Price shown is for the entire stay and includes Wi-Fi, anytime
          artisanal breakfast, 24-hour check-in and check-out.
        </p>
      </div>
    </div>
  );
};

// Main RoomSection Component
const RoomSection = () => {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Header title="BOOKING" bannerImg={expBanner} />
      </div>

       {/* Progress Bar for Rooms Page */}
       <ProgressBar steps={["HOTEL", "ROOMS", "BOOK"]} activeStep={1} />

      {/* Header Section */}
      <div className="bg-gray-300 mx-16 my-4 p-8">
        <h2 className="text-lg font-normal mb-2 border-b border-dashed border-gray-500">
          YOUR STAY
        </h2>
        <h2 className="text-lg font-medium mb-2">
          THE POSTCARD IN THE DURRUNG TEA ESTATE, ASSAM
        </h2>
        <p className="text-sm">
          WEDNESDAY, FEBRUARY 26, 2025 ——————— THURSDAY, FEBRUARY 27, 2025
        </p>
      </div>

      {/* Available Rooms */}
      <div className="mx-16 my-4 flex flex-col">
        <h2 className="text-lg font-medium">AVAILABLE ROOMS</h2>
        {rooms.map((room) => (
          <RoomCard key={room.name} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomSection;

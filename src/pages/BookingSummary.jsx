import { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const BookingSummary = () => {
  const [showQwikCilver, setShowQwikCilver] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Progress Bar */}
      <ProgressBar steps={["HOTEL", "ROOMS", "BOOK"]} activeStep={2} />
      {/* Header Section */}
      <div className="bg-gray-300 mx-10 my-4 p-6">
        <h2 className="text-sm font-normal mb-2 border-b border-dashed border-gray-500 pb-2">
          YOUR STAY
        </h2>
        <h2 className="text-lg font-bold mb-2">
          THE POSTCARD CUELIM, SOUTH GOA
        </h2>
        <p className="text-sm">
          WEDNESDAY, FEBRUARY 26, 2025 &nbsp; —————— &nbsp; THURSDAY, FEBRUARY
          27, 2025
        </p>
      </div>

      <div className="mx-10 mb-[5rem] bg-gray-300 p-6 shadow-md text-gray-900">
        {/* Room Details */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              ROOM 1 ( 2 ADULT, 0 CHILD ) - LUXURY ROOM WITH PATIO
            </h2>
            <p className="text-gray-600 text-xs">INR 19000/NIGHT X 1</p>
          </div>
          <IconButton>
            <DeleteIcon className="text-gray-500" />
          </IconButton>
        </div>

        {/* Pricing Details */}
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between font-bold text-gray-800 border-b border-dashed border-gray-500 pb-2">
            <span className="uppercase">Total</span>
            <span>INR 19000</span>
          </div>
          <div className="flex justify-between text-gray-600 border-b border-dashed border-gray-500 pb-2">
            <span>5% Service Charge</span>
            <span>INR 950</span>
          </div>
          <div className="flex justify-between text-gray-600 border-b border-dashed border-gray-500 pb-2">
            <span>Goods and Services Tax</span>
            <span>INR 3591</span>
          </div>
          <div className="flex justify-between font-bold border-b border-dashed border-gray-500 pb-2">
            <span className="uppercase">Net Amount</span>
            <span>INR 23541</span>
          </div>
        </div>

        {/* Advance Payment Section */}
        <div className="mt-4 border-b border-dashed border-gray-500 pb-2">
          <div className="mt-5 w-[30%] bg-black text-white py-3 text-center font-semibold text-sm ">
            50% ADVANCE PAYMENT ( INR 11771 )
          </div>{" "}
        </div>

        {/* QwikCilver Dropdown */}
        <div className="mt-3 border-b border-dashed border-gray-500 pb-2">
          <Button
            variant="contained"
            onClick={() => setShowQwikCilver(!showQwikCilver)}
            className="!bg-black !text-white px-4 py-2 font-semibold text-xs !rounded-none"
          >
            QWIKCILVER {showQwikCilver ? "▼" : "▶"}
          </Button>
        </div>

        {/* QwikCilver Form (Only Show When Dropdown is Open) */}
        {showQwikCilver && (
          <div className="mt-4 bg-gray-300 p-4 space-y-3 border-b border-dashed border-gray-500 pb-2">
            <div>
              <p className="text-xs font-semibold text-gray-700">
                ENTER CARD NUMBER
              </p>
              <TextField fullWidth variant="outlined" size="small" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700">ENTER PIN</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                type="password"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold text-gray-700">
                CHECK CARD BALANCE
              </p>
              <Button
                variant="contained"
                className="!bg-white !text-black border border-black text-xs px-4 py-2"
              >
                CLICK HERE TO RETRIEVE BALANCE
              </Button>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-700">
                AMOUNT TO BE REDEEMED
              </p>
              <TextField fullWidth variant="outlined" size="small" />
            </div>
            <div className="flex justify-end">
              <Button
                variant="contained"
                className="!bg-black !text-white text-xs px-6 py-2"
              >
                ADD PAYMENT
              </Button>
            </div>
          </div>
        )}

        {/* Payable Amount */}
        <div className="mt-5 border-b border-dashed border-gray-500 pb-2">
          <div className="flex justify-between text-lg  text-gray-900">
            <span className="uppercase">Payable Amount</span>
            <span>INR 11771</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2 justify-between">
          <div>
            <Button
              variant="contained"
              className="!bg-black !text-white  py-3 text-xs font-semibold !mr-4 !rounded-none"
            >
              Add Room +
            </Button>
            <Button
              variant="contained"
              className="!bg-black !text-white text-xs font-semibold !rounded-none"
            >
              Enter Promo Code
            </Button>
          </div>

          {/* <Link to={"/book/rooms/booking-summary/form"}> */}

          <Button
            onClick={() => navigate("/")}
            variant="contained"
            className="!bg-black !text-white w-full py-3 font-semibold text-sm uppercase basis-[10%] !rounded-none"
          >
            PAY NOW
          </Button>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;

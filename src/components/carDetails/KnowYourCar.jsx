/* eslint-disable react/prop-types */
import CardUi from "../../ui/CardUi";
import { IoLogoModelS } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { AiFillInsurance } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { MdDriveEta } from "react-icons/md";
import { IoIosMan } from "react-icons/io";

const KnowYourCar = ({
  fuelType,
  registration,
  ownerSerial,
  transmission,
  year,
  carInsurance,
  kmDriven,
}) => {
  console.log(
    fuelType,
    registration,
    ownerSerial,
    transmission,
    year,
    carInsurance,
    kmDriven
  );
  return (
    <>
      <p className="text-2xl text-black font-bold my-6 md:ml-12 font-[Merriweather]">
        Know your Car
      </p>
      <CardUi>
        <div className="w-3/4 h-max md:w-full">
          <div className="md:flex md:justify-between">
            <div className="flex items-center gap-6 md:mr-6">
              <div className="bg-blue-50 py-3 md:px-2 rounded-xl">
                <IoLogoModelS className="w-12 h-8" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-black font-[latto] text-xl">
                  Top Model
                </div>
                <div className="font-[latto] text-lg">
                  Top varient that is equipped with all features of the model
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 mr-6 mt-11">
              <div className="bg-blue-50 py-3 px-2 rounded-xl">
                <GrServices className="w-12 h-8" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-black font-[latto] text-xl">
                  Regularly Serviced
                </div>
                <div className="font-[latto] text-lg">
                  Top varient that is equipped with all features of the model
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-11">
            <div className="bg-blue-50 py-3 px-2 rounded-xl">
              <MdOutlineAirlineSeatReclineExtra className="w-12 h-8" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black font-[latto] text-xl">
                Standard Safty Features
              </div>
              <div className="font-[latto] text-lg">
                Top varient that is equipped with all <br />
                features of the model
              </div>
            </div>
          </div>

          <div className="max-w-full flex justify-start gap-10 px-4 md:justify-between mt-10 flex-wrap">
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div>
                  <FaRegWindowMaximize className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Reg Year</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto] uppercase">
                    {registration}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <FaCalendarDay className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Make Year</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {year}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <FaRoad className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Reg Number</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    ABC-1234567
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <BsFillFuelPumpFill className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Fuel Type</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {fuelType}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div>
                  <PiEngineFill className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Engine Capacity</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    1551 cc
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <AiFillInsurance className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Insurance</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    Upto 25/12/2025
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <FaKey className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Spare Key</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    Yes
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <div>
                  <GiCarWheel className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">Transimission</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {transmission}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5  mt-6">
                <div>
                  <MdDriveEta className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[latto]">KM Driven</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {kmDriven}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <IoIosMan className="w-5 h-5" />
                </div>
                <div className="flex flex-col ">
                  <div className="font-[latto]">Ownership</div>
                  <div className="font-bold text-black text-sm mt-2 font-[latto]">
                    {ownerSerial}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardUi>
    </>
  );
};

export default KnowYourCar;

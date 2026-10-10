import React from "react";
import Link from "next/link";
// Sahi spelling FaRulerCombined aur FaMapMarkerAlt ya FaMapMarker ke sath import kiya
import {
  FaBath,
  FaBed,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="rounded-xl shadow-md relative">
      <img
        src={
          property.images && property.images.length > 0
            ? `/images/properties/${property.images[0]}`
            : "/images/properties/a1.jpg"
        }
        alt={property.name || "Property"}
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {property.rates?.monthly
            ? `${property.rates.monthly.toLocaleString()}/mo`
            : property.rates?.weekly
              ? `${property.rates.weekly.toLocaleString()}/wk`
              : "N/A"}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p className="flex items-center gap-1">
            <FaBed className="inline mr-2" /> {property.beds}
            <span className="md:hidden lg:inline"> Beds</span>
          </p>
          <p className="flex items-center gap-1">
            <FaBath className="inline mr-2" /> {property.baths}
            <span className="md:hidden lg:inline"> Baths</span>
          </p>
          <p className="flex items-center gap-1">
            <FaRulerCombined className="inline mr-2" />
            {property.square_feet?.toLocaleString()}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates?.nightly && (
            <p className="flex items-center gap-1">
              <FaMoneyBill className="inline mr-2" /> Nightly
            </p>
          )}
          {property.rates?.weekly && (
            <p className="flex items-center gap-1">
              <FaMoneyBill className="inline mr-2" /> Weekly
            </p>
          )}
          {property.rates?.monthly && (
            <p className="flex items-center gap-1">
              <FaMoneyBill className="inline mr-2" /> Monthly
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center gap-1 mb-4 lg:mb-0">
            <FaMapMarker className="text-lg text-orange-700 inline mt-1" />
            <span className="text-orange-700">
              {property.location?.city} {property.location?.state}
            </span>
          </div>
          {/* Link component ka use kiya fast navigation ke liye */}
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

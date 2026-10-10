import React from "react";
import Link from "next/link"; // 1. Link ko import kiya

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800", // "texy" ko "text" kiya
  buttonInfo,
  children,
}) => {
  return (
    <div>
      {/* 2. Extra quotes hataye aur classes ke beech space di */}
      <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
        <p className={`${textColor} mt-2 mb-4`}>{children}</p>
        <Link
          href={buttonInfo.link} // 3. URL string pass ki (.link)
          className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`} // opacity-800 ko 80 kiya
        >
          {buttonInfo.text}
        </Link>
      </div>
    </div>
  );
};

export default InfoBox;

import Link from "next/link";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              backgroundColor: "bg-black",
              text: "Browse Properties",
              link: "/properties",
            }}
          >
            Find your dream rental property with ease.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              backgroundColor: "bg-blue-500",
              text: "List Your Property",
              link: "/properties/add",
            }}
          >
            List your property with us and reach thousands of potential tenants.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;

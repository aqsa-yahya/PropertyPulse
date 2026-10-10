import properties from "../../properties.json";
import PropertyCard from "../../components/PropertyCard";

export const metadata = {
  title: "Properties | Property Pulse",
  description: "Browse available properties on Property Pulse.",
};

export default function PropertiesPage() {
  return (
    <section className="px-4 py-10">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">
          All Properties
        </h1>

        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

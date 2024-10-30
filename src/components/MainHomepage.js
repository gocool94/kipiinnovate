import React from "react";
import StatusCard from "./StatusCard";
import TopSubmittersList from "./TopSubmittersList";
import Header from "./Header"; // Import Header component
import innovation from "./innovation.png";

const MainHomepage = ({ setIsLoggedIn, setUserProfile }) => {
  const logout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Just render the Header */}

      {/* Idea Status */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Idea Status
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <StatusCard title="Beans Earned" count={0} bgColor="bg-yellow-100" />
          <StatusCard title="Ideas Shared" count={0} bgColor="bg-blue-100" />
          <StatusCard title="Ideas Accepted" count={0} bgColor="bg-green-100" />
          <StatusCard title="Review Pending" count={0} bgColor="bg-orange-100" />
          <StatusCard title="Review Tired" count={2} bgColor="bg-red-100" />
        </div>
      </div>

      {/* Top 5 Submitters & Featured Section */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-2 gap-4">
        <TopSubmittersList />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={innovation}
            alt="Innovation"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Why Innovate with Us
            </h3>
            <p className="text-gray-600">Know More &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomepage;

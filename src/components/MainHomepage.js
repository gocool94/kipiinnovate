import React, { useState } from "react";
import StatusCard from "./StatusCard";
import TopSubmittersList from "./TopSubmittersList";
import ShareUpdateModal from "./ShareUpdateModal";

const MainHomepage = ({ setIsLoggedIn, setUserProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const logout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-purple-500 to-blue-500 h-12 flex justify-between items-center px-4">
        <p className="text-white font-bold">
          Your Idea Could Be The Next Big Thing. Submit Now!
        </p>
        <button
          onClick={toggleModal}
          className="bg-white text-blue-500 font-bold py-2 px-4 rounded"
        >
          Share It Now!
        </button>
      </div>

      {/* Idea Status */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Idea Status
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <StatusCard title="Beans Earned" count={375} bgColor="bg-yellow-100" />
          <StatusCard title="Ideas Shared" count={20} bgColor="bg-blue-100" />
          <StatusCard title="Ideas Accepted" count={15} bgColor="bg-green-100" />
          <StatusCard title="Review Pending" count={3} bgColor="bg-orange-100" />
          <StatusCard title="Review Tired" count={2} bgColor="bg-red-100" />
        </div>
      </div>

      {/* Top 5 Submitters & Featured Section */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-2 gap-4">
        <TopSubmittersList />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="featured_image.png"
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

      {/* Share Update Modal */}
      {isModalOpen && <ShareUpdateModal toggleModal={toggleModal} />}
    </div>
  );
};

export default MainHomepage;

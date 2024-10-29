import React from "react";

const IdeaCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 text-blue-500 hover:underline">
        View Details &gt;
      </button>
    </div>
  );
};

export default IdeaCard;

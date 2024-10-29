import React from "react";
import Header from "./Header"; // Import the shared Header component
import IdeaCard from "./IdeaCard"; // Assuming each idea is displayed as a card

const BrowseIdeas = () => {
  const ideas = [
    { title: "Idea 1", description: "Description of idea 1" },
    { title: "Idea 2", description: "Description of idea 2" },
    { title: "Idea 3", description: "Description of idea 3" },
    // Add more ideas as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Render Header */}

      {/* Browse Ideas Content */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Browse Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <IdeaCard key={index} title={idea.title} description={idea.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseIdeas;

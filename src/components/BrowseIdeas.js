import React, { useEffect, useState } from "react";
import Header from "./Header"; // Import the shared Header component
import IdeaCard from "./IdeaCard"; // Assuming each idea is displayed as a card

const BrowseIdeas = () => {
  const [ideas, setIdeas] = useState([]); // State to hold ideas
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch ideas when component mounts
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/fetch_ideas");
        if (!response.ok) {
          throw new Error("Failed to fetch ideas");
        }
        const data = await response.json();
        setIdeas(data);
      } catch (error) {
        console.error("Error fetching ideas:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Render Header */}

      {/* Browse Ideas Content */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Browse Ideas</h2>
        
        {loading ? (
          <p className="text-center text-gray-600">Loading ideas...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : ideas.length === 0 ? (
          <p className="text-center text-gray-600">No ideas available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea) => (
              <IdeaCard 
                key={idea._id} 
                ideaTitle={idea.ideaTitle} 
                ideaDescription={idea.ideaDescription} 
                valueAdd={idea.valueAdd} 
                complexity={idea.complexity} 
                contributors={idea.contributors} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseIdeas;

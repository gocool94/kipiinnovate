import React, { useState } from "react";

const ShareUpdateModal = ({ toggleModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ideaTitle: "",
    ideaCategory: [],
    ideaDescription: "",
    valueAdd: "",
    valueAddWords: "",
    toolsTechnologies: [],
    contributors: "",
    complexity: "",
    primaryBeneficiary: [],
    implementIdea: "",
    googleLink: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((v) => v !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toggleModal();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      onClick={toggleModal} // Close modal on clicking the backdrop
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto" // Add max-height and overflow
        style={{ width: "75vw", maxWidth: "1200px" }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <h2 className="text-3xl font-bold mb-6 text-green-700">
          Submit Your Idea
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <label className="text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            {/* Email */}
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            {/* Idea Title */}
            <label className="text-gray-700 font-semibold">Idea Title</label>
            <input
              type="text"
              name="ideaTitle"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Title of the Idea"
              value={formData.ideaTitle}
              onChange={handleChange}
            />

            {/* Idea Category */}
            <label className="text-gray-700 font-semibold">Idea Category</label>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Accelerators, Native Apps, Blogs, POCs, POVs, Use cases etc",
                "Best practises, Checklists Standards, Templates, Governance & Fire Stations ",
                "Delivery - process Improvement",
                "Industy solution - Domain Expertise & business use cases",
                "Data science ",
                "Learning & Development",
                "Sales Marketing ",
                "Operations, HR, CSM, ESM, etc",
                "Others",
              ].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    name="ideaCategory"
                    value={category}
                    className="mr-2"
                    onChange={handleChange}
                  />
                  {category}
                </label>
              ))}
            </div>

            {/* Idea Description */}
            <label className="text-gray-700 font-semibold">
              Idea Description
            </label>
            <textarea
              name="ideaDescription"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Describe your idea here"
              rows="4"
              value={formData.ideaDescription}
              onChange={handleChange}
            ></textarea>

            {/* Value Add */}
            <label className="text-gray-700 font-semibold">Value Add</label>
            <div className="flex space-x-4">
              {["High", "Medium", "Low"].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="valueAdd"
                    value={level}
                    className="mr-2"
                    checked={formData.valueAdd === level}
                    onChange={handleChange}
                  />
                  {level}
                </label>
              ))}
            </div>

            {/* Value Add in Words */}
            <label className="text-gray-700 font-semibold">
              Value Add in Words
            </label>
            <input
              type="text"
              name="valueAddWords"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Explain the value add"
              value={formData.valueAddWords}
              onChange={handleChange}
            />

            {/* Tools/Technologies */}
            <label className="text-gray-700 font-semibold">
              Tools/Technologies
            </label>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Python", "Django"].map((tech) => (
                <label key={tech} className="flex items-center">
                  <input
                    type="checkbox"
                    name="toolsTechnologies"
                    value={tech}
                    className="mr-2"
                    onChange={handleChange}
                  />
                  {tech}
                </label>
              ))}
            </div>

            {/* Contributors */}
            <label className="text-gray-700 font-semibold">Contributors</label>
            <input
              type="text"
              name="contributors"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Contributor names"
              value={formData.contributors}
              onChange={handleChange}
            />

            {/* Complexity */}
            <label className="text-gray-700 font-semibold">Complexity</label>
            <div className="flex space-x-4">
              {["High", "Medium", "Low"].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="complexity"
                    value={level}
                    className="mr-2"
                    checked={formData.complexity === level}
                    onChange={handleChange}
                  />
                  {level}
                </label>
              ))}
            </div>

            {/* Primary Beneficiary */}
            <label className="text-gray-700 font-semibold">
              Primary Beneficiary
            </label>
            <div className="flex flex-wrap gap-2">
              {["Public", "Businesses", "Students"].map((beneficiary) => (
                <label key={beneficiary} className="flex items-center">
                  <input
                    type="checkbox"
                    name="primaryBeneficiary"
                    value={beneficiary}
                    className="mr-2"
                    onChange={handleChange}
                  />
                  {beneficiary}
                </label>
              ))}
            </div>

            {/* Implement Idea */}
            <label className="text-gray-700 font-semibold">
              Implement Idea
            </label>
            <div className="flex space-x-4">
              {["Yes", "No"].map((choice) => (
                <label key={choice} className="flex items-center">
                  <input
                    type="radio"
                    name="implementIdea"
                    value={choice}
                    className="mr-2"
                    checked={formData.implementIdea === choice}
                    onChange={handleChange}
                  />
                  {choice}
                </label>
              ))}
            </div>

            {/* Google Link */}
            <label className="text-gray-700 font-semibold">
              Google Link to Resource
            </label>
            <input
              type="url"
              name="googleLink"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Google link to any resource"
              value={formData.googleLink}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareUpdateModal;

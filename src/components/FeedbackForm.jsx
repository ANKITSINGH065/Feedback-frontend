import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";

const FeedbackForm = ({ onSubmit, onClose }) => {
  const { user } = useUser();
  const [category, setCategory] = useState("Product Features");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback data including the user ID
    onSubmit({ 
      category, 
      rating: parseInt(rating, 10), // Ensure rating is a number
      comments, 
      userID: user?.id 
    });

    // Reset form fields
    setCategory("Product Features");
    setComments("");
    setRating(1);

    // Close the form
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="w-4/5 h-auto bg-white shadow-lg rounded-lg p-6 overflow-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Submit Your Feedback
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Product Features</option>
            <option>Product Pricing</option>
            <option>Product Usability</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 h-32"
            placeholder="Write your comments here..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

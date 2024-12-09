import React from "react";
import { useLocation } from "react-router-dom"; // Use useLocation to retrieve state

const MessagePage = () => {
  const location = useLocation();
  const feedback = location.state?.feedback; // Get the feedback from the state

  if (!feedback) {
    return <p className="text-center text-lg text-gray-500">No feedback selected</p>; // If no feedback is passed, show an error message
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">{feedback.category}</h2>
        <p className="text-xl text-gray-700 mb-4">
          <strong>Rating:</strong> {feedback.rating}
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          <strong>Comments:</strong> {feedback.comments}
        </p>
      </div>
    </div>
  );
};

export default MessagePage;

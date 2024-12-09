import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const FeedbackItem = ({ feedback, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [category, setCategory] = useState(feedback.category);
  const [rating, setRating] = useState(feedback.rating);
  const [comments, setComments] = useState(feedback.comments);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleUpdate = async () => {
    try {
      const updatedFeedback = { ...feedback, category, rating, comments };
      await axios.put(
        `https://feedback-backend-8eej.onrender.com/api/v2/updateFeedback/${feedback._id}`,
        updatedFeedback
      );
      onUpdate(updatedFeedback); // Notify parent to update the list
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating feedback:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://feedback-backend-8eej.onrender.com/api/v2/deleteFeedback/${feedback._id}`
      );
      onDelete(feedback._id); // Notify parent to remove the item
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  const renderComments = (comments) => {
    return comments.length > 150 ? `${comments.substring(0, 150)}...` : comments;
  };

  const handleFeedbackClick = () => {
    navigate("/message", { state: { feedback } }); // Navigate and pass feedback as state
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 shadow rounded-md">
      {isEditing ? (
        <div>
          <h2 className="text-lg font-bold">Edit Feedback</h2>
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option>Product Features</option>
              <option>Product Pricing</option>
              <option>Product Usability</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-1">Comments</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm h-20"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="max-w-sm cursor-pointer" onClick={handleFeedbackClick}> {/* Added onClick for navigating */}
            <h2 className="text-lg font-bold">{feedback.category}</h2>
            <p>Rating: {feedback.rating}</p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">
              Comments: {renderComments(feedback.comments)}
            </p>
          </div>
          <div className="flex">
            <button
              onClick={() => setIsEditing(true)}
              className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackItem;

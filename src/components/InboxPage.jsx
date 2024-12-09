import React, { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import FeedbackForm from "./FeedbackForm";
import FeedbackItem from "./FeedbackItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const InboxPage = () => {
  const { user } = useUser();
  const [feedbacks, setFeedbacks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          `https://feedback-backend-8eej.onrender.com/api/v2/getFeedbackByUser/${user?.id}`
        );
        setFeedbacks(response.data.feedbacks || []);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    if (user?.id) {
      fetchFeedbacks();
    }
  }, [user?.id]);

  const handleFeedbackSubmit = async (feedback) => {
    try {
      const response = await axios.post(
        "https://feedback-backend-8eej.onrender.com/api/v2/submitFeedback",
        feedback
      );
      setFeedbacks((prevFeedbacks) => [
        ...prevFeedbacks,
        response.data.feedback,
      ]);
      setIsFormOpen(false);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const handleFeedbackUpdate = (updatedFeedback) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.map((feedback) =>
        feedback._id === updatedFeedback._id ? updatedFeedback : feedback
      )
    );
  };

  const handleFeedbackDelete = (feedbackId) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.filter((feedback) => feedback._id !== feedbackId)
    );
  };

  const handleFeedbackClick = (feedback) => {
    navigate("/message", { state: { feedback } });
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">Hello ✋{user?.fullName}</h1>
        <UserButton />
      </div>

      <div className="flex-grow overflow-y-auto p-4">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <FeedbackItem
              key={feedback._id}
              feedback={feedback}
              onUpdate={handleFeedbackUpdate}
              onDelete={handleFeedbackDelete}
              onClick={() => handleFeedbackClick(feedback)}
            />
          ))
        ) : (
          <p>No feedback yet!</p>
        )}
      </div>

      <div className="relative p-4">
        <button
          onClick={() => setIsFormOpen(true)}
          className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Add Feedback
        </button>
      </div>

      {isFormOpen && (
        <FeedbackForm
          onSubmit={handleFeedbackSubmit}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default InboxPage;

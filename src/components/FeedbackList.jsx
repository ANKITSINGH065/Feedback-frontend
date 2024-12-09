
import React from 'react';

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="mt-4">
      {feedbacks.map((feedback, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded mb-2">
          <h3 className="font-bold">{feedback.category}</h3>
          <p>{feedback.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
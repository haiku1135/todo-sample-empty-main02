import { useState, ChangeEvent } from 'react';

type UseFeedbackList = () => {
  feedback: string;
  handleChangeFeedback: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleAddFeedbackList: () => void;
  feedbackList: string[];
};

export const useFeedbackList: UseFeedbackList = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState<string[]>([]);
  const handleChangeFeedback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };
  const handleAddFeedbackList = () => {
    if (!feedback.trim()) {
      return;
    }
    const newFeedback = feedback;
    setFeedbackList((prevState) => [...prevState, newFeedback]);
    setFeedback('');
  };

  return { feedback, handleChangeFeedback, handleAddFeedbackList, feedbackList };
};

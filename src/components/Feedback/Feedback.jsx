const Feedback = ({ onFeedback }) => {
  return (
    <div>
      <button onClick={() => onFeedback('good')}>Good</button>
      <button onClick={() => onFeedback('neutral')}>Neutral</button>
      <button onClick={() => onFeedback('bad')}>Bad</button>
    </div>
  );
};

export default Feedback;

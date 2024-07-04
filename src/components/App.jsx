import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    if (type === 'good') {
      setGood(prev => prev + 1);
    } else if (type === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (type === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  return (
    <div>
      <Section title="Please Leave Feedback">
        <Feedback onFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )}
      </Section>
    </div>
  );
};

export default App;

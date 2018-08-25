import React from 'react';

const CodewarsChartTrendIcons = ({ codewarsAnalytics }) => {
  const lastTwo = codewarsAnalytics.slice(-2);

  const d = lastTwo[1].data.honor - lastTwo[0].data.honor;

  return (
    <span className="icon-3rem">
      {d === 0 && '💩'}
      {d > 0 && d <= 5 && '🧟'}
      {d > 5 && d <= 10 && '😶'}
      {d > 10 && d <= 20 && '😳'}
      {d > 20 && d <= 30 && '😃'}
      {d > 30 && d <= 40 && '🤠'}
      {d > 40 && d <= 50 && '🤑'}
      {d > 50 && d <= 60 && '🤪'}
      {d > 60 && d <= 70 && '🤩 '}
      {d > 70 && '😎'}
    </span>
  );
};

export default CodewarsChartTrendIcons;

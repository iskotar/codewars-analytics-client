import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const CodewarsChartPulse = ({ codewarsAnalytics }) => {
  console.log(codewarsAnalytics);
  return (
    <ResponsiveContainer width="100%" aspect={5.0 / 1.0}>
      <LineChart data={codewarsAnalytics}>
        <Line
          type="monotone"
          dataKey="data.honor"
          name="Honor"
          dot={false}
          strokeWidth={2}
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CodewarsChartPulse;

import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const CodewarsChartPulse = ({ codewarsAnalytics }) => {
  const lastSeven = codewarsAnalytics.slice(-7);

  return (
    <ResponsiveContainer width="100%" aspect={5.0 / 1.0}>
      <LineChart data={lastSeven}>
        <Line
          type="monotone"
          dataKey={v => v.data.honor - lastSeven[0].data.honor}
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

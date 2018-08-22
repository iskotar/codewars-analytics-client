import React from 'react';
import moment from 'moment';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const CodewarsChart = ({ codewarsAnalytics }) => {
  console.log(codewarsAnalytics);
  return (
    <ResponsiveContainer width="100%" aspect={5.0 / 1.0}>
      <LineChart
        data={codewarsAnalytics}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey={'timestamp'}
          tickFormatter={timestamp => moment(timestamp).format('DD MMM')}
        />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip label={'qwe'}/>
        <Legend />
        <Line
          type="monotone"
          dataKey="data.honor"
          name="Honor"
          strokeWidth={2}
          stroke="#8884d8"
        />
        <Line
          type="monotone"
          dataKey="data.codeChallenges.totalCompleted"
          name="Completed Tasks"
          strokeWidth={2}
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CodewarsChart;

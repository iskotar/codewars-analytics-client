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

const Label = props => {
  const { x, y, stroke, value } = props;
  return (
    <text x={x} y={y} dy={-3} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const TasksLabel = props => {
  const { x, y, stroke, index, value, data } = props;
  const row = data[index].data;
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value} (
      {(row.honor / row.codeChallenges.totalCompleted).toPrecision(3)})
    </text>
  );
};

const CodewarsChart = ({ codewarsAnalytics }) => {
  console.log(codewarsAnalytics);
  return (
    <ResponsiveContainer width="100%" aspect={3.0 / 1.0}>
      <LineChart
        data={codewarsAnalytics}
        margin={{ top: 50, right: 30, left: 0, bottom: 10 }}
      >
        <XAxis
          dataKey={'timestamp'}
          tickFormatter={timestamp => moment(timestamp).format('DD MMM')}
        />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip label={'qwe'} />
        <Legend />
        <Line
          type="monotone"
          dataKey="data.honor"
          name="Honor"
          strokeWidth={2}
          stroke="#8884d8"
          label={<Label />}
          dot={false}
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="data.codeChallenges.totalCompleted"
          name="Completed Tasks"
          strokeWidth={2}
          label={<TasksLabel data={codewarsAnalytics} />}
          stroke="#82ca9d"
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CodewarsChart;

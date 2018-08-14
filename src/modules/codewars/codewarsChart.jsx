import React from 'react';
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

const CodewarsChart = ({ codewarsAnalytics }) => {
  console.log(codewarsAnalytics);
  return (
    <LineChart
      width={600}
      height={300}
      data={codewarsAnalytics}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis
        dataKey={'timestamp'}
        tickFormatter={timestamp => moment(timestamp).format('DD MMM')}
      />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
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
        name="Tasks"
        strokeWidth={2}
        stroke="#82ca9d"
      />
    </LineChart>
  );
};

// const CodewarsChart = ({ codewarsAnalytics }) => {
//   const lastRecord = codewarsAnalytics[codewarsAnalytics.length - 1].data;
//   return (
//     <ul>
//       <li>
//         <strong>Rank:</strong> {lastRecord.ranks.overall.name}
//       </li>
//       <li>
//         <strong>Honor:</strong> {lastRecord.honor}
//       </li>
//       <li>
//         <strong>Completed:</strong> {lastRecord.codeChallenges.totalCompleted}
//       </li>
//       <li>
//         <strong>Skills:</strong> {lastRecord.skills.map(el => el + ' ')}
//       </li>
//     </ul>
//   );
// };
export default CodewarsChart;

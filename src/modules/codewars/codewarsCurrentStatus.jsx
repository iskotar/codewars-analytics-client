import React from 'react';

const CodewarsCurrentStatus = ({ codewarsAnalytics }) => {
  console.log(codewarsAnalytics);

  const lastRecord = codewarsAnalytics[codewarsAnalytics.length - 1].data;

  return <div>{lastRecord.honor}</div>;
};
export default CodewarsCurrentStatus;

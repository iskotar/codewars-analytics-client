import React from 'react';
import _ from 'lodash';

const CodewarsCurrentStatus = ({ codewarsAnalytics }) => {
  const lastRecord = codewarsAnalytics[codewarsAnalytics.length - 1].data;
  return (
    <ul>
      <li>
        <strong>Rank:</strong> {lastRecord.ranks.overall.name}
      </li>

      <li>
        <strong>Honor:</strong> {lastRecord.honor}
      </li>

      <li>
        <strong>Completed:</strong> {lastRecord.codeChallenges.totalCompleted}
      </li>

      {_.isArray(lastRecord.skills) && (
        <li>
          <strong>Skills:</strong> {lastRecord.skills.map(el => el + ' ')}
        </li>
      )}
    </ul>
  );
};
export default CodewarsCurrentStatus;

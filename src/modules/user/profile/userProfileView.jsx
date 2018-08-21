import React from 'react';
import CodewarsCurrentStatus from './../../codewars/codewarsCurrentStatus';
import CodewarsChart from '../../codewars/codewarsChart';

export default function UserProfileView(props) {
  const { codewarsAnalytics } = props.user;
  return (
    <div>
      <h1>Profile {props.user.codewarsId}</h1>
      <CodewarsCurrentStatus codewarsAnalytics={codewarsAnalytics} />
      <CodewarsChart codewarsAnalytics={codewarsAnalytics} />
    </div>
  );
}

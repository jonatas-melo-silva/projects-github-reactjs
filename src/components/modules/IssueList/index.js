import React, { memo } from 'react';

import List from '../../elements/IssueList';
import Issue from '../../elements/IssueItem';
import Avatar from '../../elements/AvatarIssue';
import LabelList from '../../elements/LabelList';

function IssueList({ issues }) {
  return (
    <List>
      {issues.map((issue) => (
        <Issue key={String(issue.id)}>
          <Avatar src={issue.user.avatar_url} alt={issue.user.login} />
          <div>
            <LabelList>
              <a href={issue.html_url}>{issue.title}</a>
              {issue.labels.map((label) => (
                <span key={String(label.id)}>{label.name}</span>
              ))}
            </LabelList>
            <p>{issue.user.login}</p>
          </div>
        </Issue>
      ))}
    </List>
  );
}

export default memo(IssueList);

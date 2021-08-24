import React, { useState, useEffect, memo } from 'react';

import { get } from '../../api/repository';

import RepositoryPage from '../../components/templates/Repository';

function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nameOfRepository = decodeURIComponent(match.params.repository);

    const loadingData = async () => {
      const [repositoryData, issuesData] = await Promise.all([
        get(`/repos/${nameOfRepository}`),
        get(`/repos/${nameOfRepository}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      setLoading(false);
    };
    loadingData();
  }, [match]);

  return (
    <RepositoryPage loading={loading} repository={repository} issues={issues} />
  );
}

export default memo(Repository);

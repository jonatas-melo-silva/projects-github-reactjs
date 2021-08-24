import React, { memo } from 'react';
import { FaSpinner } from 'react-icons/fa';

import Container from '../../layouts/Container';
import Loading from '../../elements/Loading';
import RepositoryOwner from '../../modules/RepositoryOwner';
import IssueList from '../../modules/IssueList';

function RepositoryPage({ repository, loading, issues }) {
  if (loading) {
    return (
      <Loading loading={loading}>
        <FaSpinner color="#FFF" size={400} />
      </Loading>
    );
  } else {
    return (
      <Container>
        <RepositoryOwner repository={repository} />
        <IssueList issues={issues} />
      </Container>
    );
  }
}
export default memo(RepositoryPage);

import React, { memo } from 'react';
import { FaGithubAlt } from 'react-icons/fa';

import Form from '../../modules/RepositoryForm';
import List from '../../modules/RepositoryList';

import Container from '../../layouts/Container';

function MainPage() {
  return (
    <Container>
      <h1>
        <FaGithubAlt color="#7159c1" />
        Repositories
      </h1>
      <Form />
      <List />
    </Container>
  );
}

export default memo(MainPage);

import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { useRepositories } from '../../../context/Repository'

import List from '../../elements/RepositoryList';
import Item from '../../elements/RepositoryItem';

function RepositoryList() {
  const { getRepositoryNames, removeRepositoryNames } = useRepositories();
  return (
    <List>
        {getRepositoryNames().map((repository, index) => (
          <Item key={index}>
            <span>{repository.name}</span>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              Details
            </Link>
            <Action onClick={() => removeRepositoryNames(repository)}>
              <FaTrash />
              Delete
            </Action>
          </div>
          </Item>
        ))}
      </List>
  )
}

export default memo(RepositoryList) ;
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaTrash } from 'react-icons/fa';

import { useRepositories } from '../../../context/Repository';

import List from '../../elements/RepositoryList';
import Item from '../../elements/RepositoryItem';
import { Action } from '../../elements/Action';

function RepositoryList() {
  const { getRepositoryNames, removeRepositoryNames } = useRepositories();
  return (
    <List>
      {getRepositoryNames().map((repository, index) => (
        <Item key={index}>
          <span>{repository.name}</span>
          <div className='actions-item'>
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              <Action>
                <FaEye />
                Details
              </Action>
            </Link>
            <Action onClick={() => removeRepositoryNames(repository)}>
              <FaTrash />
              Delete
            </Action>
          </div>
        </Item>
      ))}
    </List>
  );
}

export default memo(RepositoryList);

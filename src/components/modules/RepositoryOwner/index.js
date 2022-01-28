import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Owner from '../../elements/Owner';
import AvatarOwner from '../../elements/AvatarOwner';

function RepositoryOwner({ repository }) {
  return (
    <Owner>
      <div className='action-back'>
        <FaArrowLeft/>
        <Link to={`/`}>Back to repositories</Link>
      </div>
      <AvatarOwner
        src={repository.owner.avatar_url}
        alt={repository.owner.login}
      />
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
    </Owner>
  );
}

export default memo(RepositoryOwner);

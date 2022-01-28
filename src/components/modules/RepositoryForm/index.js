import React, { useState, memo } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';

import { get } from '../../../api/repository';
import { useRepositories } from '../../../context/Repository'

import Form from '../../elements/RepositoryForm';
import Input from '../../elements/RepositoryInput';
import Button from '../../elements/SubmitButton';

const RepositoryForm = () => {
  const { addRepositoryNames } = useRepositories();
  const [newRepository, setNewRepository] = useState('');
  const [loading, setLoading] = useState(false);

  const observerChangeInInput = (e) => {
    setNewRepository(`${e.target.value}`.split(' ').join(''));
  };

  const observerChangeInSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await get(`/repos/${newRepository}`);
      const repositoryName = {
        name: data.full_name,
      };
      addRepositoryNames(repositoryName);
      setNewRepository('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Repository not found');
    }
  };
  return (
    <>
      <Form
        onSubmit={(e) => {
          observerChangeInSubmit(e);
        }}
      >
        <Input
          type="text"
          placeholder="Enter username / repository"
          value={newRepository}
          onChange={(e) => observerChangeInInput(e)}
        />
        <Button loading={loading} aria-label="add">
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </Button>
      </Form>
    </>
  );
};

export default memo(RepositoryForm);

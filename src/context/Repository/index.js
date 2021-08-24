import React, { createContext, useState, useEffect, useContext } from 'react';

const RepositoryContext = createContext({});

export const RepositoryProvider = ({ children }) => {
  const [repositoryNames, setRepositoryNames] = useState([]);
  const [repository, setRepository] = useState({});

  useEffect(() => {
    const repositoriesLocal = localStorage.getItem('repositoryNames');
    if (repositoriesLocal) {
      setRepositoryNames(JSON.parse(repositoriesLocal));
    }
  }, []);

  const addRepository = (repository) => {
    setRepository(repository);
  }

  const addRepositoryNames = (newRepository) => {
    const repository = repositoryNames.find(
      (repository) => repository.name === newRepository.name,
    );
    if (!repository) {
      setRepositoryNames([...repositoryNames, newRepository]);
      localStorage.setItem(
        'repositoryNames',
        JSON.stringify([...repositoryNames, newRepository]),
      );
    }
  };

  const getRepositoryNames = () => {
    return repositoryNames;
  };

  const getRepository = () => {
    return repository;
  };

  return (
    <RepositoryContext.Provider
      value={{ addRepository, getRepository, getRepositoryNames, addRepositoryNames }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepositories = () => {
  const context = useContext(RepositoryContext);
  return context;
};

import styled from 'styled-components';

const RepositoryItem = styled.li`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & + li {
    border-top: 1px solid #eee;
  }

  a {
    color: #7159c1;
    text-decoration: none;
  }

  .actions-item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export default RepositoryItem;
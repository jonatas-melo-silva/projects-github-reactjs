import styled from 'styled-components';

const IssueItem = styled.li`
  display: flex;
  padding: 15px 10px;
  border: 1px solid #eee;
  border-radius: 4px;

  & + li {
    margin-top: 10px;
  }

  div {
    flex: 1;
    margin-left: 15px;

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
export default IssueItem;

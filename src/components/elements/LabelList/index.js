import styled from 'styled-components';

const LabelList = styled.strong`
  font-size: 16px;

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #7159c1;
    }
  }
  span {
      background: #eee;
      color: #333;
      border-radius: 2px;
      font-size: 12px;
      font-weight: 600;
      height: 20px;
      padding: 3px 4px;
      margin-left: 10px;
    }
`;

export default LabelList;

import styled from 'styled-components';

const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  .action-back {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #7159c1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Owner;
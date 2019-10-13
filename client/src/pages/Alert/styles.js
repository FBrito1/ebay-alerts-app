import styled from 'styled-components';

export const AlertList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  p {
    font-size: 20px;
    display: flex;
    font-weight: bolder;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  };
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }

    input {
      flex: 1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius: 4px;
      font-size: 16px;
    }

    button {
      background: #fff;
      height: 50px;
      border: 0;
      padding: 0 15px;
    }

  }
`;

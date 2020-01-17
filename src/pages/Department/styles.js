import styled from 'styled-components';

export const Main = styled.div`
  div {
    display: flex;
    flex: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 80px;
  background: #ff0000;
  color: white;
  font-size: 30px;
  justify-content: center;

  svg {
    margin: 10px;
    color: white;
    :hover {
      color: #ddd;
      cursor: pointer;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 100px 100px;
`;

export const Title = styled.div`
  display: list-item;
  flex: auto;
  margin-top: 4px;
  margin-left: 5px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  color: white;
  background: ${props => props.inputColor};
  p {
    margin-left: 5px;
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

export const Square = styled.div`
  display: grid;
  flex: 1;
  grid-template-rows: 100px 100px;
  margin-left: 5px;
  text-align: center;
  align-items: center;
  margin-top: 4px;
  width: 39%;
  height: 220px;
  border: solid 1px ${props => props.inputColor};
`;

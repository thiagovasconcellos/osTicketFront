import styled from 'styled-components';

export const Main = styled.div``;

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

export const Divisor = styled.div`
  flex: 1;
  margin: 0px;
`;

export const MyTitle = styled.h1`
  margin: 10px 0px 0px 15px;
  color: white;
  font-size: 24px;
`;

export const MySubTitle = styled.p`
  display: row;
  color: #b1b0b0;
  font-size: 18px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Grid = styled.div`
  flex: 1;
  flex-direction: row;
`;

export const Item = styled.div`
  flex: 1;
  margin-left: 5px;
  align-items: flex-end;
`;

export const Title = styled.div`
  flex: 1;
  margin-top: 4px;
  font-size: 20px;
  width: 120px;
  height: 30px;
  color: white;
  background: ${props => props.inputColor};
  p {
    margin-left: 5px;
    display: flex;
    flex: 1;
    align-items: center;
  }
`;

export const Square = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  align-items: center;
  margin-top: 4px;
  width: 390px;
  height: 220px;
  border: solid 1px ${props => props.inputColor};
`;

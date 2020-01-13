import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
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

export const H1 = styled.div`
  margin-top: 4px;
  font-size: 20px;
  width: 120px;
  height: 30px;
  color: white;
  background: #71bdff;
  p {
    flex: 1;
    display: flex;
    justify-items: center;
  }
`;

export const BlueSquare = styled.div`
  display: flex;
  margin-left: 5px;
  text-align: center;
  align-items: center;
  margin-top: 4px;
  width: 99%;
  height: 180px;
  border: solid 1px #71bdff;
`;

export const InnerSquare = styled.div`
  width: 50%;
  height: 180px;
`;

export const LineDivisor = styled.div`
  height: 90%;
  width: 2px;
  background: ${props => props.inputColor};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 50px;
`;

export const GridTitle = styled.text`
  display: flex;
  justify-content: center;
  color: black;
`;

export const Item = styled.div`
  margin-left: 5px;
  grid-template-rows: 50px 50px;
`;

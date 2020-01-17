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
  margin-left: 5px;
  font-size: 20px;
  width: 120px;
  height: 30px;
  color: white;
  background: ${props => props.inputColor};
  p {
    margin-left: 5px;
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
  border: solid 1px ${props => props.inputColor};
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
  grid-template-columns: 120px 120px;
  grid-column-gap: 320px;
`;

export const GridTitle = styled.text`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: black;
`;

export const Item = styled.div`
  display: flex;
  flex: 1;
  margin-left: 5px;
  border-bottom: 1px solid ${props => props.inputColor};
  border-bottom-width: 90%;
  align-items: flex-end;
  grid-template-rows: 50px 50px;

  h1 {
    color: ${props => props.inputColor};
  }
  p {
    align-self: left;
    margin-left: 25px;
  }
`;

export const Status = styled.div`
  display: flexbox;
  grid-template-rows: 150px 150px;

  h1 {
    font-size: 20px;
  }
`;

export const Bar = styled.div`
  display: flex;
  margin-left: 5px;
  width: 100px;
  height: 28px;
  background-color: ${props => props.inputColor};
`;

export const TotalBar = styled.div`
  display: flex;
  flex: initial;
  width: ${props => props.progress};
  height: 28px;
  background-color: ${props => props.inputColor};
  p {
    margin-left: 40px;
    position: absolute;
  }
`;

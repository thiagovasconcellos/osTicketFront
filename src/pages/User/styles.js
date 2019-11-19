import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 10px;
  font-weight: bold;
  background-color: #ddd;
  border-radius: 4px;
  display: block;
  margin-bottom: 15px;
`;

export const List = styled.div`
  font-weight: normal;
  display: grid;
  text-align: left;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  color: #fff;
`;

export const Header = styled.header`
  font-weight: normal;
  color: #000;
`;

export const Detail = styled.div`
  font-weight: normal;
  display: block;
  font-size: 28px;
  text-align: center;
  width: 50px;
  height: 50px;
  background: #faa200;
  border-radius: 50%;
  color: #000;
`;

import styled from 'styled-components';

const handleStatusColor = status => {
  switch (status) {
    case 'Em aberto':
      return 'color: #9cf573;';
    case 'Em análise':
      return 'color: #ffb482;';
    case 'Pendentes':
      return 'color: #333';
    case 'Em desenvolvimento':
      return 'color: #4d91ff;';
    case 'Concluído':
      return 'color: #c878e3;';
    case 'Atualizar cliente':
      return 'color: #ffff63;';
    case 'Aguardando cliente':
      return 'color: #d97c5d';
    case 'Suspenso':
      return 'color: #fff';
    default:
      return 'color: #333;';
  }
};
const handleStatusBackgroundColor = status => {
  switch (status) {
    case 'Em aberto':
      return 'background: #007a2f;';
    case 'Em análise':
      return 'background: #db7900;';
    case 'Pendentes':
      return 'background: #ff0000;';
    case 'Em desenvolvimento':
      return 'background: #002f7a;';
    case 'Concluído':
      return 'background: #a300d9;';
    case 'Atualizar cliente':
      return 'background: #b5b500;';
    case 'Aguardando cliente':
      return 'background: #ba3306';
    case 'Suspenso':
      return 'background: #000000';
    default:
      return 'background: #93a79f;';
  }
};

export const Container = styled.ul`
  text-align: center;
  padding: 10px;
  font-weight: bold;
  background-color: #ddd;
  border-radius: 4px;
  display: block;
  margin-bottom: 15px;
`;

export const List = styled.li`
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
  ${({ status }) => handleStatusBackgroundColor(status)};
  border-radius: 50%;
  ${({ status }) => handleStatusColor(status)};
`;

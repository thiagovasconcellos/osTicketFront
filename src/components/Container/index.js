import styled from 'styled-components';

const handleStatus = status => {
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
    default:
      return 'background: #93a79f;';
  }
};

const Container = styled.div`
  justify-content: space-between;
  ${({ status }) => handleStatus(status)};
  border-radius: 48px;
  padding: 30px;
  margin: 10px 10px auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div {
    text-align: center;
  }
  strong {
    text-align: center;
    justify-content: space-between;
  }
`;

export default Container;

import styled, { keyframes, css } from 'styled-components';

const handleStatus = status => {
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
    default:
      return 'color: #333;';
  }
};

export const Div = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 24px;
  text-align: center;
  ${({ status }) => handleStatus(status)};

  svg {
    display: flex;
  }
  strong {
    justify-content: space-between;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div.attrs(props => ({
  disabled: props.loading,
}))`
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const TicketsStyles = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;

  strong {
    text-align: center;
  }
`;

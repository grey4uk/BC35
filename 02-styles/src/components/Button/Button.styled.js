import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  border-radius: 1vh;
  font-size: 18px;
`;

export const ActiveButton = styled(Button)`
  background-color: ${({ isActive }) =>
    isActive ? 'aqua' : 'grey'};
`;

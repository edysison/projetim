import styled from 'styled-components';

export const Background = styled.main`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
  min-width: 100vw;
  padding: 1rem;
  display: flex;
`;

export const Container = styled.main`
  background-color: ${(props) => props.theme.container};
  min-width: 100%;
  padding: 1rem;
`;

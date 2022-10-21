import styled from 'styled-components';
import { colors } from '../../../constants/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background_gray};
  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Card = styled.div`
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${colors.background_white};
  grid-area: card;
`;
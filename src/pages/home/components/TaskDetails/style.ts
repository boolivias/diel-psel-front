import styled from "styled-components";
import colors from "../../../../constants/theme/colors";

export const Title = styled.h1`
  width: 100%;
  padding: 0px 10px;
  font-size: 1.3rem;
  color: ${colors.primary};
  border-bottom: 1px solid ${colors.primary};
`;

export const Card = styled.div`
  padding: 1.2rem;
  border-radius: 8px;
  background-color: ${colors.background_white};
  grid-area: card;
  display: grid;
  grid-row-gap: 10px;
  max-width: 400px;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
`;
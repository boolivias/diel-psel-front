import styled, { css } from "styled-components";
import { colors } from "../../constants/theme";


export const Container = styled.div`
  display: flex;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
`;

export const Option = styled.button.attrs({ type: 'button' })<{ selected?: boolean }>`
  flex: 1;
  width: 100%;
  cursor: pointer;
  padding: 4px 15px;
  transition: all .2s linear;
  background-color: transparent;

  & ~ & {
    border-left: 1px solid ${colors.gray};
  }

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    opacity: .9;
  }

  ${
    ({ selected }) => selected && css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `
  }
`;
import styled, { css } from "styled-components";
import colors from "../../constants/theme/colors";

export const Container = styled.div`
  width: 100%;
  padding-left: .5rem;
  padding-right: .5rem;
  display: flex;
  flex-direction: column;
`;

export const PText = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

const CSSBase = css`
  margin-left: -.5rem;
  margin-right: -.5rem;
  background-color: ${colors.gray};
  border-radius: 4px;
  border: none;
  flex: 1;
  padding: 8px 15px;
  outline: none;

  &:disabled {
    background-color: transparent;
    color: black;
  }
`;

export const Input = styled.input`
  ${CSSBase}

  &[type="time"]::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
  }
`;

export const TextArea = styled.textarea`
  ${CSSBase}
`;

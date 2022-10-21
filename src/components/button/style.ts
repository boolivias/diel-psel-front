import styled from "styled-components";
import { colors } from "../../constants/theme";

export const Button = styled.button<{ color: 'success' | 'danger' | 'alert' }>`
  padding: 6px 10px;
  cursor: pointer;
  color: ${
    ({color}) => 
      color === 'danger'
        ? colors.danger
        : color === 'alert'
        ? colors.alert
        : colors.success
  };
  border-radius: 6px;
  opacity: .9;
  font-weight: 600;
  background-color: transparent;
  transition: all .2s linear;

  &:hover {
    background-color:${
      ({ color }) =>
        color === 'danger'
          ? colors.danger
          : color === 'alert'
            ? colors.alert
            : colors.success
    };
    color: ${colors.white};
    opacity: 1;
  }
`;
import styled from "styled-components";
import { colors } from "../../../../constants/theme";

export const Table = styled.table`
    min-width: 600px;
    table-layout: auto;
    border-spacing: 0 .5rem;
    th {
        font-weight: 600;
        text-align: start;
        border-bottom: 1px solid ${colors.gray};
    }
    
    td {
        vertical-align: middle;
    }

    tbody tr {
      height: 25px;
      transition: all .2s linear;
    }

    tbody tr:hover {
      cursor: pointer;
      background-color: ${colors.gray};
    }
`;

export const TRow = styled.tr``;
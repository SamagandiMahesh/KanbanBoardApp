import styled from "styled-components";
import { COLORS, pxToRem } from "../../utils";
import { BoardRowProps } from "./Board.types";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BoardWrapper = styled.article`
  background: ${COLORS.GRAY};
`;

export const BoardHeader = styled.header`
  background: ${COLORS.WHITE};
  display: flex;
  width: 100%;
  height: ${pxToRem(50)};
  padding: ${pxToRem(16)};

  @media (max-width: 768px) {
    height: ${pxToRem(40)};
    padding: ${pxToRem(16)};
  }
  
  > section {
   width: 100%;
     max-width: 1200px;
     margin: 0 auto;
   }
`;

export const StyledDisplayList = styled(FlexContainer)`
  justify-content: space-between;
  padding: ${pxToRem(8)} ${pxToRem(16)};

  span {
    min-width: ${pxToRem(100)};
  }

`;


export const StyledBoardRow = styled.div<BoardRowProps>`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  column-gap: ${pxToRem(30)};
  padding: ${pxToRem(16)};

  @media (max-width: 768px) {
    grid-auto-flow: row;
    row-gap: ${pxToRem(16)};
  }
`;

export const StyledColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${pxToRem(16)} 0;
  font-size: ${pxToRem(16)};
  .column-title,
  .column-action-icons {
    label {
      padding: 0 ${pxToRem(12)};
    }
  }

  @media (max-width: 768px) {
    .column-title,
    .column-action-icons {
      margin-bottom: ${pxToRem(8)};
    }

    .column-action-icons {
      justify-content: flex-end;
    }
  }
`;

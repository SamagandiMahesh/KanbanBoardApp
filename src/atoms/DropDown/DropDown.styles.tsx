import styled from "styled-components";
import { COLORS, pxToRem } from "../../utils";

export const StyledDropDown = styled.section`
  font-size: ${pxToRem(16)};
  position: relative;
`;

export const StyledDropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  padding: ${pxToRem(8)};
  border: 1px solid ${COLORS.GRAY};
  cursor: pointer;
  background: ${COLORS.WHITE};
  border-radius: ${pxToRem(6)};

  span {
  text-align:  left;
  }
  .downIcon {
    transition: transform 0.5s ease-in-out;
  }
  .rotateIcon {
    transform: rotate(180deg);
  }
`;

export const StyledDropDownMenu = styled.div`
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  z-index: 10;
  top: 100%;
  left: 0;
  position: absolute;
  background: ${COLORS.WHITE};
  border-radius: ${pxToRem(6)};
      min-width: 100%;

  li {
    padding: ${pxToRem(8)};
    list-style: none;

    &:hover {
      background: ${COLORS.GRAY};
      color: ${COLORS.WHITE};
      cursor: pointer;
    }
  }

  .selected {
    background: ${COLORS.LIGHTGRAY};
  }
`;

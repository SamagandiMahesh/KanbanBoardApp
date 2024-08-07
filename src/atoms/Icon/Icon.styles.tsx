import styled, { css } from "styled-components";
import { COLORS, pxToRem } from "../../utils";

const statusVariants = {
  online: css`
    background:  ${COLORS.GREEN};
  `,
  offline: css`
    background:  ${COLORS.LIGHTGRAY};;
  `,
};

export const StyledIcon = styled.div`
  position: relative;
  display: inline-block;
`;


export const Avatar = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${pxToRem(16)};
  background: ${({ backgroundColor }) => backgroundColor};
  font-size: ${pxToRem(12)};
   width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvailabilityIcon = styled.div`
  position: absolute;
  bottom: -3px;
  right: -3px;
  border: 1px solid  ${COLORS.WHITE};;
`;

export const StatusIcon = styled.div<{ status: keyof typeof statusVariants }>`
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  border-radius:${pxToRem(8)};
  ${({ status }) => statusVariants[status]}
`;

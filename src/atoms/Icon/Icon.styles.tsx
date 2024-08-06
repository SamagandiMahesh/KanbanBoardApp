import styled, { css } from "styled-components";

const statusVariants = {
  online: css`
    background: green;
  `,
  offline: css`
    background: gray;
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
  border-radius: 15px;
  background: ${({ backgroundColor }) => backgroundColor};
  font-size: 12px;
   width: 20px;
  height: 20px;
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
  border: 1px solid white;
`;

export const StatusIcon = styled.div<{ status: keyof typeof statusVariants }>`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  ${({ status }) => statusVariants[status]}
`;

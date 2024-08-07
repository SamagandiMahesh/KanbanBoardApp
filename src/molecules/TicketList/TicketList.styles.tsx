import styled from "styled-components";
import { COLORS, pxToRem } from "../../utils";

export const StyledTicketList = styled.section`
  display: grid;
  gap: ${pxToRem(20)};
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: ${pxToRem(8)};
  margin-bottom: ${pxToRem(8)};
`;

export const CardFooter = styled.div`
  display: flex;
`;

export const CardId = styled.p`
  font-size: ${pxToRem(16)};
  margin: 0;
  color:  ${COLORS.LIGHTGRAY};

  @media (max-width: 768px) {
    font-size: ${pxToRem(14)};
  }
`;

export const CardTitle = styled.p`
  font-size:${pxToRem(14)};
  color: ${COLORS.DARKGRAY};
  overflow: hidden;
  height: 50px;

  @media (max-width: 768px) {
    font-size: ${pxToRem(12)};
    height: auto;
  }
`;

export const CardStatus = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${pxToRem(8)};

  ${CardTitle} {
    padding-left: ${pxToRem(4)};
  }
`;

export const TicketUser = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
  position: relative;
`;

export const TicketPriority = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${pxToRem(8)};
`;

export const TicketTag = styled.div`
  border: 1px solid  ${COLORS.LIGHTGRAY};;
  display: flex;
  align-items: center;
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(4)};
  margin-right: ${pxToRem(4)};
`;

export const FeatureIcon = styled.div`
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  background: #bec2c9;
  border-radius:${pxToRem(8)};
  margin-right: ${pxToRem(4)};
  display: inline-block;
`;

export const FeatureLabel = styled.p`
  font-size: ${pxToRem(12)};
  color:  ${COLORS.LIGHTGRAY};
`;

export const StyledCard = styled.div`
  padding: ${pxToRem(16)};
`;

import styled from "styled-components";

export const StyledTicketList = styled.section`
  display: grid;
  gap: 20px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
`;

export const CardId = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  color: #333;
`;

export const CardStatus = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;

  ${CardTitle} {
    padding-left: 4px;
  }
`;

export const TicketUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
`;

export const TicketPriority = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

export const TicketTag = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  margin-right: 4px;
`;

export const FeatureIcon = styled.div`
  width: 8px;
  height: 8px;
  background: #bec2c9;
  border-radius: 10px;
  margin-right: 5px;
  display: inline-block;
`;

export const FeatureLabel = styled.p`
  font-size: 12px;
  color: #333;
`;

export const StyledCard = styled.div`
  padding: 1rem;
`;

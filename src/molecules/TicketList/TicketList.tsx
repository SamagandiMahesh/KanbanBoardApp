import React, { FC } from "react";
import { TicketListProps } from "./TicketList.types";
import {
  StyledTicketList,
  StyledCard,
  CardHeader,
  CardFooter,
  CardId,
  CardTitle,
  CardStatus,
  TicketUser,
  TicketTag,
  FeatureIcon,
  FeatureLabel,
} from "./TicketList.styles";
import { Card, Icon } from "../../atoms";
import { PRIORITY_ICON, STATUS_ICON } from "../../utils";
import { GroupBy } from "../../organisms/Board/Board.types";

export const TicketList: FC<TicketListProps> = ({
  ticketList,
  selectedGroup,
}) => {
  return (
    <StyledTicketList>
      {ticketList?.map((ticket) => (
        <Card key={ticket.id}>
          <StyledCard>
            <CardHeader>
              <div>
                <CardId>{ticket.id} </CardId>

                <CardStatus className="card-status">
                  {selectedGroup !== GroupBy.STATUS && (
                    <Icon
                      icon={STATUS_ICON[ticket.status]}
                      available={false}
                    />
                  )}
                  <CardTitle> {ticket.title}</CardTitle>
                </CardStatus>
              </div>
              {selectedGroup !== GroupBy.USER_ID && (
                <TicketUser>
                  <Icon icon="" available={ticket.user.available} />
                </TicketUser>
              )}
            </CardHeader>
            <CardFooter>
              {selectedGroup !== GroupBy.PRIORITY && (
                <TicketTag>
                  <Icon
                    icon={PRIORITY_ICON[ticket.priority]}
                    available={false}
                  />
                </TicketTag>
              )}
              <>
                {ticket.tag.map((tag, index) => (
                  <TicketTag key={index} className="ticket-tag">
                    <FeatureIcon className="feature-icon"></FeatureIcon>
                    <FeatureLabel className="feature-label">{tag}</FeatureLabel>
                  </TicketTag>
                ))}
              </>
            </CardFooter>
          </StyledCard>
        </Card>
      ))}
    </StyledTicketList>
  );
};

import React, { FC } from "react";
import { TicketListProps } from "./TicketList.types";
import { StyledTicketList } from "./TicketList.styles";
import { Card } from "../../atoms";
import { PRIORITY_ICON } from "../../utils";

export const TicketList: FC<TicketListProps> = ({ ticketList }) => {
  return (
    <StyledTicketList>
      {ticketList.map((ticket) => (
        <Card key={ticket.id}>
          <div className="card-header">
            <div>
              <h4 className="card-id"> {ticket.id}</h4>
              <p className="card-title"> {ticket.title}</p>
            </div>
            <div className="ticket-user">
              <img  className="avatar" src="./icons/Done.svg" alt="" />
              <div  className="availability-icon available" />
            </div>
           
          </div>
          <div className="card-footer">
            <div className="ticket-tag">
              <img
                className="priority-icon"
                src={PRIORITY_ICON[ticket.priority]}
                alt={`Priority level ${ticket.priority}`}
              />
            </div>
            <div className="ticket-tag">
              {ticket.tag.map((tag, index) => (
                <div>
                  <img src="/icons/To-do.svg" alt={tag} />
                  <span key={index}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </StyledTicketList>
  );
};

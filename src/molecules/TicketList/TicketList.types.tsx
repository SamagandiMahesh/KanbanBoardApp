import { GroupBy, Priority, Status } from "../../organisms/Board/Board.types";

export type TicketListProps = {
    ticketList:  Ticket[];
    selectedGroup: GroupBy;
}

export type Ticket = {
    [x: string]: any;
    id: string;
    title: string;
    tag: string[];
    priority: Priority;
    userId: string;
    status: Status
}
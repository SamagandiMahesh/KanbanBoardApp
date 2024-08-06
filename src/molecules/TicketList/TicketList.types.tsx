export type TicketListProps = {
    ticketList:  Ticket[];
}

type Ticket = {
    [x: string]: any;
    id: string;
    title: string;
    tag: string[];
    priority: number;
}
import { Ticket } from "../../molecules/TicketList/TicketList.types";
export type BoardProps = {};

export type BoardRowProps = {
  length: number;
};

export type Result = {
  tickets: Ticket[];
  users: User[];
};

export type User = {
  id: string;
  available: boolean;
  name: string;

};

export enum GroupBy {
  STATUS = 'status',
  USER_ID = 'userId',
  PRIORITY = 'priority',
}

export enum SortBy {
  TITLE = 'title',
  PRIORITY = 'priority',
}


export enum Status {
  BACKLOG = "Backlog",
  TODO = "Todo",
  IN_PROGRESS = "In progress",
  DONE = "Done",
  CANCELLED = "Cancelled",
}

export enum Priority {
  NO_PRIORITY = 0,
  LOW_PRIORITY = 1,
  MEDIUM_PRIORITY = 2,
  HIGH_PRIORITY = 3,
  URGENT_PRIORITY = 4,
}

export type StatusItem = {
  id: Status;
  name: string;
  icon: string;
  available?: boolean;
};

export type PriorityItem = {
  id: Priority;
  name: string;
  icon: string;
  available?: boolean;
};

export type StatusIconMap = {
  [key in Status]: string;
};

export type PriorityIconMap = {
  [key in Priority]: string;
};

export type BoardColumn = {
  status: StatusItem[];
  priority: PriorityItem[];
  userId: (User & { icon: string })[];
};

export type BoardColumnKey = keyof BoardColumn;
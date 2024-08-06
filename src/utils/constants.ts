import { DropdownItem } from "../atoms/DropDown/DropDown.types";
import {
  BoardColumn,
  GroupBy,
  Priority,
  PriorityIconMap,
  PriorityItem,
  SortBy,
  Status,
  StatusIconMap,
  StatusItem,
  User,
} from "../organisms/Board/Board.types";
import { ICONS } from "./icons";

export const GROUPBY: DropdownItem[] = [
  {
    id: GroupBy.STATUS,
    name: 'Status',
  },
  {
    id: GroupBy.USER_ID,
    name: 'User',
  },
  {
    id: GroupBy.PRIORITY,
    name: 'Priority',
  },
];

// Update SORTBY constant
export const SORTBY: DropdownItem[] = [
  {
    id: SortBy.TITLE,
    name: 'Title',
  },
  {
    id: SortBy.PRIORITY,
    name: 'Priority',
  },
];

export const PRIORITY_ICON: PriorityIconMap = {
  [Priority.NO_PRIORITY]: ICONS.NO_PRIORITY,
  [Priority.LOW_PRIORITY]: ICONS.LOW_PRIORITY,
  [Priority.MEDIUM_PRIORITY]: ICONS.MEDIUM_PRIORITY,
  [Priority.HIGH_PRIORITY]: ICONS.HIGH_PRIORITY,
  [Priority.URGENT_PRIORITY]: ICONS.URGENT_PRIORITY,
};

export const STATUS_ICON: StatusIconMap = {
  [Status.BACKLOG]: ICONS.BACKLOG,
  [Status.TODO]: ICONS.TODO,
  [Status.IN_PROGRESS]: ICONS.IN_PROGRESS,
  [Status.DONE]: ICONS.DONE,
  [Status.CANCELLED]: ICONS.CANCELLED,
};

export const STATUS: StatusItem[] = [
  { id: Status.BACKLOG, name: "Backlog", icon: ICONS.BACKLOG },
  { id: Status.TODO, name: "Todo", icon: ICONS.TODO },
  { id: Status.IN_PROGRESS, name: "In Progress", icon: ICONS.IN_PROGRESS },
  { id: Status.DONE, name: "Done", icon: ICONS.DONE },
  { id: Status.CANCELLED, name: "Cancelled", icon: ICONS.CANCELLED },
];

export const PRIORITY: PriorityItem[] = [
  { id: Priority.NO_PRIORITY, name: "No priority", icon: ICONS.NO_PRIORITY },
  { id: Priority.URGENT_PRIORITY, name: "Urgent", icon: ICONS.URGENT_PRIORITY },
  { id: Priority.HIGH_PRIORITY, name: "High", icon: ICONS.HIGH_PRIORITY },
  { id: Priority.MEDIUM_PRIORITY, name: "Medium", icon: ICONS.MEDIUM_PRIORITY },
  { id: Priority.LOW_PRIORITY, name: "Low", icon: ICONS.LOW_PRIORITY },
];

export const BOARDCOLUMNS: BoardColumn = {
  status: STATUS,
  priority: PRIORITY,
  userId: [],
};

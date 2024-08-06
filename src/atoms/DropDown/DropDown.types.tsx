import { ReactNode } from "react";
import { GroupBy, SortBy } from "../../organisms/Board/Board.types";

export type DropDownProps = {
    title?: string;
    data: DropdownItem[];
    icon?: string;
    selectedId?: string;
    onSelect?: (id: string) => void;
    children?: ReactNode;
}


export type DropdownItem  = {
    id: GroupBy | SortBy;
    name: string;
  }

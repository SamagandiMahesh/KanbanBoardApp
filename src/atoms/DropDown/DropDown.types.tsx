import { ReactNode } from "react";

export type DropDownProps = {
    title?: string;
    data: DropdownItem[];
    icon?: string;
    selectedId?: string;
    onSelect?: (id: string) => void;
    children?: ReactNode;
}


export type DropdownItem  = {
    id: string;
    name: string;
  }

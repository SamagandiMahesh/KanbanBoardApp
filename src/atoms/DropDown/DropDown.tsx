import React, { FC, useState, useEffect, useCallback } from "react";
import { DropDownProps, DropdownItem } from "./DropDown.types";
import {
  StyledDropDown,
  StyledDropDownMenu,
  StyledDropDownButton,
} from "./DropDown.styles";

export const DropDown: FC<DropDownProps> = ({
  title = "Select",
  data = [],
  icon,
  selectedId,
  onSelect,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    data.find((item) => item.id === selectedId)
  );

  const handleChange = useCallback(
    (item: DropdownItem) => {
      setSelectedItem(item);
      onSelect?.(item.id);
      setIsOpen(false);
    },
    [onSelect]
  );

  useEffect(() => {
    const newSelectedItem = data.find((item) => item.id === selectedId);
    setSelectedItem(newSelectedItem);
  }, [selectedId, data]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <StyledDropDown>
      <div>
        <StyledDropDownButton onClick={toggleDropdown}>
          {icon && <img src={icon} alt="icon" className="" />}
          <span>{selectedItem?.name || title}</span>

          <img
            src="../../icons/down.svg"
            alt="icon"
            className={`downIcon ${isOpen ? "rotateIcon" : ""}`}
          />
        </StyledDropDownButton>

        {isOpen && (
          <StyledDropDownMenu>
            <>
              {children}
              {data && (
                <ul>
                  {data.map((item) => (
                    <li key={item.id} 
                      className={`${item.id === selectedItem?.id ? 'selected' : '' }`}
                      onClick={() => handleChange(item)}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
          </StyledDropDownMenu>
        )}
      </div>
    </StyledDropDown>
  );
};

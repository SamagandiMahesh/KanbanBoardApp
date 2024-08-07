import React, { FC, useState, useEffect, useRef } from "react";
import { DropDownProps, DropdownItem } from "./DropDown.types";
import {
  StyledDropDown,
  StyledDropDownMenu,
  StyledDropDownButton,
} from "./DropDown.styles";
import { ICONS } from "../../utils";
import useOutsideClick from "../../hooks/useOutsideClick";

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

  const handleChange = (item: DropdownItem) => {
      setSelectedItem(item);
      onSelect?.(item.id);
      setIsOpen(false);
    };
    

  useEffect(() => {
    const newSelectedItem = data.find((item) => item.id === selectedId);
    setSelectedItem(newSelectedItem);
  }, [selectedId, data]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <StyledDropDown ref={dropdownRef}>
      <div>
        <StyledDropDownButton onClick={toggleDropdown}>
          {icon && <img src={icon} alt="icon" className="" />}
          <span>{selectedItem?.name || title}</span>

          <img
            src={ICONS.DOWN}
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

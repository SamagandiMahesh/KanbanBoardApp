import React, { FC, useEffect, useState } from "react";
import { IconProps } from "./Icon.types";
import {
  StyledIcon,
  Avatar,
  AvailabilityIcon,
  StatusIcon,
} from "./Icon.styles";
import { getRandomColor } from "../../utils";

export const Icon: FC<IconProps> = ({ className, icon, available }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, []);

  return (
    <StyledIcon className={className}>
      {icon ? (
        <img className="icon" src={icon} alt="icon" />
      ) : (
        <>
         <Avatar backgroundColor={backgroundColor}>U</Avatar>
          <AvailabilityIcon>
            <StatusIcon status={available ? "online" : "offline"} />
          </AvailabilityIcon>
        </>
      )}
    </StyledIcon>
  );
};

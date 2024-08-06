import React, { FC } from 'react';
import { CardProps } from "./Card.types";
import { StyledCard } from "./Card.styles";

export const Card: FC<CardProps> = (props: CardProps) => {
  const {children} = props;
  return <StyledCard className='card'>{children}</StyledCard>;
};

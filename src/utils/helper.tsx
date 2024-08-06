import { Ticket } from "../molecules/TicketList/TicketList.types";

export const pxToRem = (pixels: number): string => `${pixels * 0.0625}rem`;

export const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


export const sortTicketsById = (a: Ticket, b: Ticket, id: string): number => {
    if (a[id] < b[id]) return -1;
    if (a[id] > b[id]) return 1;
    return 0;
  };
  
  
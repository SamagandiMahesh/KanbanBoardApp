import React, { FC, useEffect, useState } from 'react';
import { BoardWrapper, BoardHeader, StyledDisplayList } from './Board.styles';
import { BoardProps } from './Board.types';
import { Card, DropDown } from '../../atoms';
import { GROUPBY, SORTBY } from '../../utils';
import { TicketList } from '../../molecules';


export const Board: FC<BoardProps> = () => {

   const [ticketList, setTicketList] = useState();
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(true);
 
   const fetchData = async () => {
     try {
       const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       const result = await response.json();
       setTicketList(result.tickets);
     } catch (error) {
       setError(true);
     } finally {
       setLoading(false);
     }
   };
 
   useEffect(() => {
     fetchData();
   }, []);
 
   if (loading) {
     return <div>Loading...</div>;
   }
 
   if (error) {
     return <div>Error: {error}</div>;
   }


return (

 <BoardWrapper>
   <BoardHeader>
      <DropDown
         data={[]}
         title='Display'
         icon='./icons/Display.svg'
      >
      <Card>
         <StyledDisplayList>
            <span>Grouping</span>
            <DropDown 
               selectedId='status'
               data={GROUPBY}
               icon=''
            />
         </StyledDisplayList>

         <StyledDisplayList>
            <span>Ordering</span>
            <DropDown 
               selectedId='priority'
               data={SORTBY}
               icon=''
            />
         </StyledDisplayList>
      </Card>
      </DropDown>
   </BoardHeader>
   <main>
   {ticketList && <TicketList ticketList={ticketList} /> }
   </main>
 </BoardWrapper>
);
}


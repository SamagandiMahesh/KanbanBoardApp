import styled from 'styled-components';

export const StyledTicketList = styled.section`

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background-color: #f7f8fa;


.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.card-footer  {
 display: flex;
}

.card-id {
    font-weight: 700;
    font-size: 16px;
    color: #333;
    margin: 0;
}

.card-title {
    font-weight: 500;
    font-size: 14px;
    color: #666;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* User avatar and availability icon */
.ticket-user {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
}

.avatar {
    width: 30px;
    height: 30px;
}
.availability-icon {
  position: absolute;
   bottom:0;
   right:0;
       border: 1px solid white;
   }

.available {
background: green;
    width: 10px;
    height: 10px;
    border-radius: 5px;
}

/* Priority section */
.ticket-priority {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
}

.priority-icon {
    width: 20px;
    height: 20px;
}

/* Feature tags */
.ticket-tag {
   border: 1px solid lightgray;
   display: flex;
   align-items: center;
       border-radius: 4px;
    padding: 4px;
    margin: 4px;
}

.feature-tag img {
    width: 12px;
    height: 12px;
}

.feature-tag span {
    font-size: 12px;
    color: #333;
}
 
`;


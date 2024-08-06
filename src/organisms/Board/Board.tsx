import React, { FC, useEffect, useState, useCallback, useMemo } from "react";
import {
  BoardWrapper,
  BoardHeader,
  StyledDisplayList,
  StyledBoardRow,
  StyledColumnHeader,
  ResponsiveContainer,
} from "./Board.styles";
import {
  BoardColumn,
  BoardColumnKey,
  BoardProps,
  GroupBy,
  PriorityItem,
  Result,
  StatusItem,
  User,
} from "./Board.types";
import { Card, DropDown, Icon } from "../../atoms";
import {
  BOARDCOLUMNS,
  GROUPBY,
  ICONS,
  SORTBY,
  sortTicketsById,
} from "../../utils";
import { TicketList } from "../../molecules";
import { Ticket } from "../../molecules/TicketList/TicketList.types";
import { useFetchData } from "../../hooks/ useFetchData";

export const Board: FC<BoardProps> = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [groupedTickets, setGroupedTickets] = useState<
    Record<string, Ticket[]>
  >({});
  const [error, setError] = useState<string | null>(null);
  const [columns, setColumns] = useState<BoardColumn>(BOARDCOLUMNS);

  const [selectedGroupBy, setSelectedGroupBy] = useState("status");
  const [selectedFilter, setSelectedFilter] = useState("priority");

  const groupTicketsBy = useCallback(
    (groupBy: string) => {
      console.log(groupBy);
      setSelectedGroupBy(groupBy);
      const userMap = users.reduce(
        (map, user) => {
          map[user.id] = user;
          return map;
        },
        {} as Record<string, User>
      );

      const groupedData: Record<string, Ticket[]> = tickets.reduce(
        (acc, ticket) => {
          const key = ticket[groupBy];
          const user = userMap[ticket.userId];
          const ticketWithUser = { ...ticket, user };

          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(ticketWithUser);

          return acc;
        },
        {} as Record<string, Ticket[]>
      );

      console.log(groupedData);
      setGroupedTickets(groupedData);
    },
    [tickets, users]
  );

  const sortGroupedTicketsBy = useCallback((sortBy: string) => {
    setSelectedFilter(sortBy);
    setGroupedTickets((prevGroupedTickets) => {
      const updatedGroupedTickets = { ...prevGroupedTickets };

      Object.keys(updatedGroupedTickets).forEach((key) => {
        updatedGroupedTickets[key] = [...updatedGroupedTickets[key]].sort(
          (a, b) => sortTicketsById(a, b, sortBy)
        );
      });
      console.log(updatedGroupedTickets);
      return updatedGroupedTickets;
    });
  }, []);

  const updateUserColumn = () => {
    const newUserEntries = users.map((user) => ({
      id: user.id,
      name: user.name,
      available: user.available,
      icon: "",
    }));

    console.log(newUserEntries, "newUserEntries");
    setColumns((prevColumns) => ({
      ...prevColumns,
      userId: newUserEntries,
    }));
  };

  const handleFetchSuccess = (result: Result) => {
    setTickets(result.tickets);
    setUsers(result.users);
  };

  const handleFetchError = (error: string) => {
    setError(error);
  };

  const loading = useFetchData(
    "https://api.quicksell.co/v1/internal/frontend-assignment",
    handleFetchSuccess,
    handleFetchError
  );

  useEffect(() => {
    if (tickets.length > 0 && users.length > 0) {
      groupTicketsBy("status");
      sortGroupedTicketsBy("priority");
      updateUserColumn();
    }
  }, [tickets, users]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(groupedTickets[selectedGroupBy]);
  return (
    <BoardWrapper>
      <BoardHeader>
          <DropDown data={[]} title="Display" icon={ICONS.DISPLAY}>
            <Card>
              <StyledDisplayList>
                <span>Grouping</span>
                <DropDown
                  selectedId={selectedGroupBy}
                  data={GROUPBY}
                  icon=""
                  onSelect={groupTicketsBy}
                />
              </StyledDisplayList>

              <StyledDisplayList>
                <span>Ordering</span>
                <DropDown
                  selectedId={selectedFilter}
                  data={SORTBY}
                  icon=""
                  onSelect={sortGroupedTicketsBy}
                />
              </StyledDisplayList>
            </Card>
          </DropDown>
      </BoardHeader>
      <main>
        <ResponsiveContainer>
          <StyledBoardRow
            length={columns[selectedGroupBy as BoardColumnKey].length + 1}
          >
            {groupedTickets &&
              columns[selectedGroupBy as BoardColumnKey].map(
                (
                  status: StatusItem | PriorityItem | (User & { icon: string })
                ) => {
                  const { id, name, icon, available } = status;
                  return (
                    <section key={id as string}>
                      <StyledColumnHeader>
                        <div className="column-title">
                          <Icon
                            icon={icon as string}
                            available={available as boolean}
                          />
                          <label>{name}</label>
                          <span>{groupedTickets[id as string]?.length}</span>
                        </div>
                        <div className="column-action-icons">
                          <Icon icon={ICONS.ADD} available={false} />
                          <Icon icon={ICONS.MENU} available={false} />
                        </div>
                      </StyledColumnHeader>
                      <TicketList
                        ticketList={groupedTickets[id as string]}
                        selectedGroup={selectedGroupBy as GroupBy}
                      />
                    </section>
                  );
                }
              )}
          </StyledBoardRow>
        </ResponsiveContainer>
      </main>
    </BoardWrapper>
  );
};

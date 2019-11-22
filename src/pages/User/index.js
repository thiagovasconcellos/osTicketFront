/* eslint-disable operator-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unused-state */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/state-in-constructor */
/* eslint-disable class-methods-use-this */
import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, List, Header, Detail } from './styles';

function User() {
  const [users, setUsers] = useState([]);
  let idLastObject;
  let index = 0;
  const usersGroup = [];

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/tickets/staff');

      setUsers(...users, response.data);
    }
    loadUsers();
  }, []);

  function createUsers(object) {
    if (!idLastObject) {
      const newUser = {
        staff_id: object.staff_id,
        name: object.Staff.firstname + ' ' + object.Staff.lastname,
        tickets: [object.TicketStatus],
      };
      usersGroup.push(newUser);
      index = index + 1;
    } else if (idLastObject === object.staff_id) {
      usersGroup[index - 1].tickets.push(object.TicketStatus);
    } else {
      const newUser = {
        staff_id: object.staff_id,
        name: object.Staff.firstname + ' ' + object.Staff.lastname,
        tickets: [object.TicketStatus],
      };
      usersGroup.push(newUser);
      index = index + 1;
    }

    idLastObject = object.staff_id;
  }

  users.map(user => createUsers(user));

  console.log(usersGroup);

  return (
    <>
      {usersGroup.map(user => (
        <Container key={user.staff_id}>
          {user.name}
          <List>
            {user.tickets.map(ticket => (
              <Header>
                {ticket.name}
                <Detail status={ticket.name}>{ticket.count}</Detail>
              </Header>
            ))}
          </List>
        </Container>
      ))}
    </>
  );
}

export default User;

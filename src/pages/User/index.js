/* eslint-disable react/no-unused-state */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/state-in-constructor */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import api from '../../services/api';
// import { Container, List, Header, Detail } from './styles';

export default class User extends Component {
  state = {
    users: [],
  };
  users = [];
  async componentDidMount() {
    const response = await api.get('/tickets/staff');

    await response.data.map(c => this.getUserTasks(c));

    this.setState({
      users: this.users,
    });

    this.users.length = 0;
  }

  async getUsers() {
    const response = await api.get('/tickets/staff');

    response.data.map(c => this.getUserTasks(c));

    this.setState({
      users: this.users,
    });

    this.users.length = 0;
  }

  async getUserTasks(user) {
    const response = await api.get(`tickets/staff/${user.staff_id}`);
    const { data } = response;
    const newUser = {
      name: user.Staff.firstname,
      lastName: user.Staff.lastname,
      tickets: data,
    };
    this.users.push(newUser);
  }

  render() {
    const { users } = this.state;

    if (users.length < 1) {
      return <h1>{users.length}</h1>;
    }
    return (
      <div>
        {users.map(user => (
          <h1 key={user.name}>{user.name}</h1>
        ))}
      </div>
      // <>
      //   <Container>
      //     Thiago
      //     <List>
      //       <Header>
      //         Em aberto
      //         <Detail>12</Detail>
      //       </Header>
      //     </List>
      //   </Container>
      //   <Container>
      //     Thiago
      //     <List>
      //       <Header>
      //         Em aberto
      //         <Detail>12</Detail>
      //       </Header>
      //     </List>
      //   </Container>
      // </>
    );
  }
}

/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import api from '../../services/api';
import { Container, List, Header, Detail } from './styles';

export default class User extends Component {
  async getUsers() {
    const response = await api.get('users');

    return response;
  }

  async getUserTasks(user) {
    const response = await api.get(`tasksByUser/${user.id}`);

    return response;
  }

  render() {
    return (
      <>
        <Container>
          Thiago
          <List>
            <Header>
              Em aberto
              <Detail>12</Detail>
            </Header>
            <Header>
              Fechadas
              <Detail>10</Detail>
            </Header>
            <Header>
              Concluídas
              <Detail>14</Detail>
            </Header>
            <Header>
              Atualizar cliente
              <Detail>8</Detail>
            </Header>
          </List>
        </Container>
        <Container>
          Thiago
          <List>
            <Header>
              Em aberto
              <Detail>12</Detail>
            </Header>
          </List>
        </Container>
      </>
    );
  }
}

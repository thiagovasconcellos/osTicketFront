import React, { Component } from "react";

import api from "../../services/api";

import Container from "../../components/Container";
import { Title, Table, Department, Status, Count } from "./styles";

export default class Home extends Component {
  state = {
    tickets: []
  };

  async componentDidMount() {
    //get api
    const response = await api.get("/tickets/position");
    this.setState({
      tickets: response.data
    });
    console.log(response);
  }

  componentDidUpdate(_, prevState) {
    // update api
  }

  render() {
    const { tickets } = this.state;
    return (
      <Container>
        <Title>Posicionamento geral</Title>
        <div>
          <Table>
            <tbody>
              {tickets.map((c, index) => (
                <tr key={index}>
                  <Department>{c.Department.name}</Department>
                  <Status>{c.TicketStatus.name}</Status>
                  <Count>{c.count}</Count>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}

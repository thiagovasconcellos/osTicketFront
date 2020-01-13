/* eslint-disable class-methods-use-this */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSpinner, FaMedal } from 'react-icons/fa';
import Fullscreen from 'react-full-screen';
import { MdFullscreen } from 'react-icons/md';

import api from '../../services/api';
import Container from '../../components/Container';
import {
  Header,
  Image,
  Div,
  Loading,
  TicketsStyles,
  Finishs,
  Button,
} from './styles';
import Logo from '../../assets/images/logo.png';

export default class Home extends Component {
  state = {
    ticketsByStatus: [],
    ticketsByStaff: [],
    ticketsPendent: 0,
    finishedToday: 0,
    topFinishes: 0,
    loading: true,
    isFull: false,
  };

  async componentDidMount() {
    const responseByStatus = await api.get('/tickets/status');
    const responseByStaff = await api.get('/tickets/staff/top3');
    const responsePendents = await api.get('tickets/pendents');
    const responseFinishedToday = await api.get('tickets/finishedToday');
    const responseTopFinish = await api.get('tickets/topFinishes');

    await this.setState({
      ticketsByStatus: responseByStatus.data,
      ticketsByStaff: responseByStaff.data,
      ticketsPendent: responsePendents.data[0].count,
      finishedToday: responseFinishedToday.data[0].count,
      topFinishes: responseTopFinish.data[0],
      loading: false,
    });

    setInterval(() => {
      this.getData();
    }, 15000);
  }

  async getData() {
    const responseByStatus = await api.get('/tickets/status');
    const responseByStaff = await api.get('/tickets/staff/top3');
    const responsePendents = await api.get('tickets/pendents');
    const responseFinishedToday = await api.get('tickets/finishedToday');
    const responseTopFinish = await api.get('tickets/topFinishes');

    await this.setState({
      ticketsByStatus: responseByStatus.data,
      ticketsByStaff: responseByStaff.data,
      ticketsPendent: responsePendents.data[0].count,
      finishedToday: responseFinishedToday.data[0].count,
      topFinishes: responseTopFinish.data[0],
      loading: false,
    });
  }

  goFullScreen = () => {
    this.setState({ isFull: true });
  };

  handleColorMedal(pos) {
    switch (pos) {
      case 0:
        return '#827500';
      case 1:
        return '#474747';
      case 2:
        return '#b33e00';
      default:
        return '#ddd';
    }
  }

  handleSentiment(count, status) {
    if (count > 30 && status === 'Em aberto') {
      return '<MdSentimentDissatisfied />';
    }
    return '<MdSentimentNeutral />';
  }

  render() {
    const {
      ticketsByStatus,
      ticketsByStaff,
      ticketsPendent,
      finishedToday,
      topFinishes,
      loading,
    } = this.state;

    if (loading) {
      return (
        <Loading loading={loading}>
          <FaSpinner color="#FFF" syze={32} />
        </Loading>
      );
    }

    return (
      <Header>
        <Fullscreen
          // eslint-disable-next-line react/destructuring-assignment
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <Image>
            <img src={Logo} alt="Logo" widht={190} height={190} />
          </Image>
          <TicketsStyles>
            {ticketsByStatus.map(c => (
              <Container status={c.TicketStatus.name}>
                <Div status={c.TicketStatus.name}>
                  <strong>
                    {c.TicketStatus.name}: {c.count}{' '}
                  </strong>
                </Div>
              </Container>
            ))}
            {ticketsPendent > 0 ? (
              <Container status="Pendentes">
                <Div status="Pendentes">
                  <strong>Pendentes: {ticketsPendent}</strong>
                </Div>
              </Container>
            ) : null}
            <br />
          </TicketsStyles>
          <Container>
            <Div>
              {ticketsByStaff.map((c, index) => (
                <>
                  <FaMedal size={32} color={this.handleColorMedal(index)} />
                  <strong>
                    {c.Staff.firstname} {c.Staff.lastname} : {c.count}
                  </strong>
                </>
              ))}
            </Div>
          </Container>
          <TicketsStyles>
            <Container>
              <Finishs>
                <strong>Finalizados hoje: {finishedToday}</strong>
              </Finishs>
            </Container>
            <Container>
              <Finishs>
                <strong>Recorde: {topFinishes.count}</strong>
                <small>({topFinishes.date})</small>
              </Finishs>
            </Container>
          </TicketsStyles>
        </Fullscreen>
        <Button>
          <MdFullscreen onClick={this.goFullScreen} size={32} />
        </Button>
      </Header>
    );
  }
}

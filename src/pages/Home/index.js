import React from 'react';

import { MdBusinessCenter } from 'react-icons/md';
import { FaUserFriends, FaChartBar, FaDatabase } from 'react-icons/fa';

import {
  Container,
  Header,
  Divisor,
  MyTitle,
  MySubTitle,
  H1,
  BlueSquare,
  InnerSquare,
  LineDivisor,
  GridTitle,
  Grid,
  Item,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <MdBusinessCenter size={60} />
        <Divisor>
          <MyTitle>212</MyTitle>
          <MySubTitle>Clientes</MySubTitle>
        </Divisor>
        <FaUserFriends size={60} />
        <Divisor>
          <MyTitle>21</MyTitle>
          <MySubTitle>Usuários</MySubTitle>
        </Divisor>
        <FaChartBar size={60} />
        <Divisor>
          <MyTitle>87</MyTitle>
          <MySubTitle>Tíquetes</MySubTitle>
        </Divisor>
        <FaDatabase size={60} />
        <Divisor>
          <MyTitle>33</MyTitle>
          <MySubTitle>Serv-Cloud</MySubTitle>
        </Divisor>
      </Header>
      <H1>Tíquetes</H1>
      <BlueSquare>
        <InnerSquare>
          <GridTitle>Distribuição dos tickets</GridTitle>
          <Grid>
            <Item>
              <h1>59</h1>
              <p>CeltaBS</p>
            </Item>
            <Item>
              <h1>21</h1>
              <p>CeltaPDV</p>
            </Item>
            <Item>
              <h1>10</h1>
              <p>Comercial</p>
            </Item>
            <Item>
              <h1>5</h1>
              <p>Infraestrutra</p>
            </Item>
          </Grid>
        </InnerSquare>
        <LineDivisor inputColor="#71bdff" />
        <InnerSquare>
          <GridTitle>Distribuição dos tickets</GridTitle>
          <Grid>
            <Item>
              <h1>122</h1>
              <p>CeltaBS</p>
            </Item>
          </Grid>
        </InnerSquare>
      </BlueSquare>
    </Container>
  );
}

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
  Status,
  Bar,
  TotalBar,
} from './styles';

export default function Home() {
  const count = 5;
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
      <H1 inputColor="#71bdff">Tickets</H1>
      <BlueSquare inputColor="#71bdff">
        <InnerSquare>
          <GridTitle>Principais departamentos</GridTitle>
          <Grid>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">59</h1>
              <p>CeltaBS</p>
            </Item>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">21</h1>
              <p>CeltaPDV</p>
            </Item>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">10</h1>
              <p>Comercial</p>
            </Item>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">5</h1>
              <p>Infraestrutra</p>
            </Item>
          </Grid>
        </InnerSquare>
        <LineDivisor inputColor="#71bdff" />
        <InnerSquare>
          <GridTitle>Principais tópicos</GridTitle>
          <Grid>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">20</h1>
              <p>Dúvida</p>
            </Item>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">18</h1>
              <p>Erro!</p>
            </Item>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">17</h1>
              <p>Melhoria</p>
            </Item>
            <Item inputColor="#71bdff">
              <h1 inputColor="#71bdff">10</h1>
              <p>Serviços</p>
            </Item>
          </Grid>
        </InnerSquare>
      </BlueSquare>
      <H1 inputColor="#F9A747">Status</H1>
      <BlueSquare inputColor="#F9A747">
        <InnerSquare>
          <GridTitle>Distribuição por status</GridTitle>
          <Grid>
            <Status>
              <h1>Em aberto</h1>
              <Bar inputColor="#F9A747">
                <TotalBar
                  progress={`${count}px`}
                  inputColor="rgba(255, 255, 255, 0.4)"
                >
                  <p>{count}</p>
                </TotalBar>
              </Bar>
            </Status>
            <Status>
              <h1>Em andamento</h1>
              <Bar inputColor="#F9A747">
                <TotalBar progress={18} inputColor="red">
                  <p>18</p>
                </TotalBar>
              </Bar>
            </Status>
            <Status>
              <h1>Pendentes</h1>
              <Bar inputColor="#F9A747">
                <TotalBar progress={14} inputColor="red">
                  <p>14</p>
                </TotalBar>
              </Bar>
            </Status>
          </Grid>
        </InnerSquare>
        <LineDivisor inputColor="#F9A747" />
        <InnerSquare>
          <GridTitle>Distribuição por agentes</GridTitle>
          <Grid>
            <Item inputColor="#F9A747">
              <h1 inputColor="#F9A747">20</h1>
              <p>Dúvida</p>
            </Item>
            <Item inputColor="#F9A747">
              <h1 inputColor="#F9A747">18</h1>
              <p>Erro!</p>
            </Item>
            <Item inputColor="#F9A747">
              <h1 inputColor="#F9A747">17</h1>
              <p>Melhoria</p>
            </Item>
            <Item inputColor="#F9A747">
              <h1 inputColor="#F9A747">10</h1>
              <p>Serviços</p>
            </Item>
          </Grid>
        </InnerSquare>
      </BlueSquare>
    </Container>
  );
}

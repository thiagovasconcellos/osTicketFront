import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

import { MdBusinessCenter } from 'react-icons/md';
import { FaUserFriends, FaChartBar, FaDatabase } from 'react-icons/fa';

import { Container, Row, Col } from 'react-grid-system';
import {
  Main,
  Header,
  Divisor,
  MyTitle,
  MySubTitle,
  Content,
  Grid,
  Item,
  Square,
  Title,
} from './styles';

export default function Department() {
  const dataBs = [
    { name: 'Em aberto', value: 21 },
    { name: 'Em andamento', value: 9 },
    { name: 'Aguardando desenvolvimento', value: 5 },
    { name: 'Em análise', value: 2 },
    { name: 'Pendentes', value: 1 },
    { name: 'Concluídos', value: 1 },
  ];
  const dataPdv = [
    { name: 'Em aberto', value: 5 },
    { name: 'Em andamento', value: 3 },
    { name: 'Em análise', value: 2 },
  ];
  const dataCmc = [
    { name: 'Em aberto', value: 11 },
    { name: 'Em andamento', value: 8 },
  ];
  const dataInfra = [
    { name: 'Em aberto', value: 15 },
    { name: 'Em andamento', value: 11 },
    { name: 'Em análise', value: 5 },
    { name: 'Pendentes', value: 4 },
  ];

  const COLORS = ['#F9A747', '#C2D847', '#47A0F9', '#F16565', '#A19D2D'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
        {dataBs[index].value}
      </text>
    );
  };
  const renderCustomizedLabelPdv = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
        {dataPdv[index].value}
      </text>
    );
  };
  const renderCustomizedLabelCmc = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
        {dataCmc[index].value}
      </text>
    );
  };

  const renderCustomizedLabelInfra = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {/* {`${(percent * 100).toFixed(0)}%`} */}
        {dataInfra[index].value}
      </text>
    );
  };

  return (
    <Main>
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
      <Content>
        <Container>
          <Grid>
            <Row debug>
              <Item>
                <Col xs={8}>
                  <Title inputColor="#F9A747">CeltaBS</Title>
                  <Square inputColor="#F9A747">
                    <PieChart width={400} height={400}>
                      <Pie
                        data={dataBs}
                        cx={100}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {dataBs.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        height={138}
                        width={138}
                      />
                    </PieChart>
                  </Square>
                </Col>
              </Item>
              <Item>
                <Col xs={20}>
                  <Title inputColor="#C2D847">CeltaPDV</Title>
                  <Square inputColor="#C2D847">
                    <PieChart width={400} height={400}>
                      <Pie
                        data={dataPdv}
                        cx={100}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabelPdv}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {dataPdv.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        height={138}
                        width={138}
                      />
                    </PieChart>
                  </Square>
                </Col>
              </Item>
              <Item>
                <Col xs={8}>
                  <Title inputColor="#47A0F9">Comercial</Title>
                  <Square inputColor="#47A0F9">
                    <PieChart width={400} height={400}>
                      <Pie
                        data={dataCmc}
                        cx={100}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {dataCmc.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        height={138}
                        width={138}
                      />
                    </PieChart>
                  </Square>
                </Col>
              </Item>
              <Item>
                <Col xs={20}>
                  <Title inputColor="#F16565">Infraestrutura</Title>
                  <Square inputColor="#F16565">
                    <PieChart width={400} height={400}>
                      <Pie
                        data={dataInfra}
                        cx={100}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {dataInfra.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        height={138}
                        width={138}
                      />
                    </PieChart>
                  </Square>
                </Col>
              </Item>
            </Row>
          </Grid>
        </Container>
      </Content>
    </Main>
  );
}

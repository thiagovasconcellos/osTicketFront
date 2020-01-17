import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

import { Container, Row, Col } from 'react-grid-system';
import { Main, Header, Grid, Square, Title } from './styles';

export default function Department() {
  const data = [
    { name: 'Em aberto', value: 21 },
    { name: 'Em andamento', value: 9 },
    { name: 'Aguardando desenvolvimento', value: 5 },
    { name: 'Em análise', value: 2 },
    { name: 'Pendentes', value: 1 },
    { name: 'Concluídos', value: 1 },
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
        {data[index].value}
      </text>
    );
  };

  return (
    <Main>
      <Header />
      <Container>
        <Row>
          <Col>
            <Title inputColor="#F9A747">CeltaBS</Title>
            <Square inputColor="#F9A747">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx={100}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
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
          <Col>
            <Title inputColor="#C2D847">CeltaPDV</Title>
            <Square inputColor="#C2D847">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx={100}
                  cy={200}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
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
        </Row>
        <br />
        <Title inputColor="#F9A747">CeltaBS</Title>
        <Square inputColor="#F9A747">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={100}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
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
        <Title inputColor="#C2D847">CeltaPDV</Title>
        <Square inputColor="#C2D847">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={100}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
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
      </Container>
    </Main>
  );
}

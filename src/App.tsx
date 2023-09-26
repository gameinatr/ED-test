import "./App.css";

import React, { useState } from "react";
import { Card, FloatButton, Layout, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
};
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "80vh",
};

interface IToDoCard {
  content: string;
  date: number;
  id: number;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<IToDoCard[]>([
    { content: "Default ToDo 1", date: Date.now(), id: 1 },
    { content: "Default ToDo 2", date: Date.now(), id: 2 },
  ]);
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          {cards.map((card: IToDoCard) => {
            return (
              <Card key={card.id} title={card.date.toString()}>
                {card.content}
              </Card>
            );
          })}
        </Content>
      </Layout>
      <FloatButton
        icon={<PlusOutlined />}
        onClick={() => {
          const newCard: IToDoCard = {
            content: "New ToDo",
            date: Date.now(),
            id: cards.length + 1,
          };
          setCards([...cards, newCard]);
        }}
      />
    </Space>
  );
};

export default App;

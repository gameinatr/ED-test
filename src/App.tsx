import React, { useState } from "react";
import { FloatButton, Layout, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { IToDoCard } from "./@types";
import { contentStyle, headerStyle } from "./styling";
import { ToDoCard } from "./ToDoCard";
const { Header, Content } = Layout;

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
            return <ToDoCard card={card} cards={cards} setCards={setCards} />;
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

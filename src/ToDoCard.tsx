import { CheckOutlined, CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Input, Space } from "antd";
import React, { useState } from "react";
import { IToDoCardProps } from "./@types";
import { cardStyle } from "./styling";

export const ToDoCard: React.FC<IToDoCardProps> = ({
  card,
  cards,
  setCards,
}) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const { content, date, id } = card;
  const [editValue, setEditValue] = useState<string>(content);
  return (
    <Card
      title={`Created: ${new Date(date).toString()}`}
      style={cardStyle}
      extra={
        <Space direction="horizontal" size={[5, 5]}>
          <EditOutlined onClick={() => setEditActive(true)} />
          <CloseOutlined
            onClick={() => {
              setCards(cards.filter((cardItem) => cardItem.id !== id));
            }}
          />
        </Space>
      }
    >
      {!editActive ? (
        content
      ) : (
        <Space direction="horizontal">
          <Input
            defaultValue={editValue}
            onChange={({ target: { value } }) => {
              setEditValue(value);
            }}
          />
          <CheckOutlined
            onClick={() => {
              setEditActive(false);
              setCards(
                cards.map((cardItem) => {
                  return cardItem.id !== id
                    ? { ...cardItem }
                    : { ...cardItem, content: editValue };
                })
              );
            }}
          />
        </Space>
      )}
    </Card>
  );
};

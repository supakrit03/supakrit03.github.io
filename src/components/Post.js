import { useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Space } from "antd";
import { useState } from "react";

export default function Post({ id, title, body }) {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("Desc");

  const onCLickEdit = () => {
    navigate(`/posts/${id}`);
  };

  const onSortHandle = () => {
    if (sortType === "Desc") {
    }
  }

  return (
    <Card>
      <h2>{title}</h2>
      <Button onClick={onSortHandle}>Sort {sortType}</Button>
      <p>{body}</p>
      <Button type="primary" onClick={onCLickEdit}>
        See
      </Button>
    </Card>
  );
}

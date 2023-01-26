import { Card, Button, Space, Form, Input } from "antd";

import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById, updatePost } from "../services/post.service";

export default function EditPostPage() {
  const params = useParams();
  const navigate = useNavigate();
  const postId = params.id;

  const [form] = Form.useForm();

  useEffect(() => {
    fetchPostById(postId).then((json) => {
      form.setFieldsValue({
        title: json.title,
        body: json.body
      });
    });
  }, [postId]);

  const onClickBack = () => {
    navigate("/posts");
  };

  const onFinish = (values) => {
    const { title, body } = values;
    const data = { title, body };

    updatePost(postId, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="container">
      <Card>
        <Form form={form} onFinish={onFinish}>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Body" name="body">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Space>
            <Button onClick={onClickBack}>Back</Button>
            <Button htmlType="submit" type="primary">
              Edit
            </Button>
          </Space>
        </Form>
      </Card>
    </div>
  );
}

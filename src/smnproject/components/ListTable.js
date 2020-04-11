import React from "react";

import { Table, Divider, Tag } from "antd";
import { Button, Row, Col, Typography, Input, Form } from "antd";
const { Title } = Typography;
const { Item } = Form;

const ListTable = props => (
  <Form>
    <Title level={2}>Create Employee Form</Title>
    <Item>
      <Row gutter={40}>
        <Col md={12}>
          <Input name="fullname" placeholder="full Name" />
        </Col>
        <Col md={12}>
          <Input name="phone" placeholder="phone no" />
        </Col>
      </Row>
    </Item>

    <Item>
      <Row>
        <Col md={12}>
          <Button type="primary">Save</Button>
        </Col>
      </Row>
    </Item>
  </Form>
);
export default ListTable;

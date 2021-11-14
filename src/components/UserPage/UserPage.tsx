import React from "react";
import { Table } from "../Table/Table";
import { Button, Checkbox } from "antd";

export const UserPage: React.FC<{}> = () => {
  return (
    <section>
      <h1>Users</h1>
      <Button type="ghost">Test Button</Button>
      <Checkbox>Test Checkbox</Checkbox>
      <Table />
    </section>
  );
};

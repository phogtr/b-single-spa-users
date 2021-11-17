import React from "react";
import { Table } from "../Table/Table";

//@ts-ignore
import { Button } from "@react-mf/shared-components";

export const UserPage: React.FC<{}> = () => {
  return (
    <section>
      <h1>Users</h1>
      <Button text={"echo hello world"} />
      <Table />
    </section>
  );
};

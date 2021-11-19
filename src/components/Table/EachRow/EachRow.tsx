import React from "react";
import { IUserData } from "../../../api/user.api";
// import "./EachRow.style.css";

//@ts-ignore
import { Styles } from "@react-mf/styleguide";

interface IEachRowProps {
  data: IUserData;
}

export const EachRow: React.FC<IEachRowProps> = ({ data }) => {
  return (
    <tr>
      <td className={Styles.tableData}>{data.id}</td>
      <td className={Styles.tableData}>{data.username}</td>
      <td className={Styles.tableData}>{data.phone}</td>
    </tr>
  );
};

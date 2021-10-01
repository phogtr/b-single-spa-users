import React from "react";
import { IUserData } from "../../../api/user.api";
import "./EachRow.style.css";

interface IEachRowProps {
  data: IUserData;
}

export const EachRow: React.FC<IEachRowProps> = ({ data }) => {
  return (
    <tr>
      <td className="table__data">{data.id}</td>
      <td className="table__data">{data.username}</td>
      <td className="table__data">{data.phone}</td>
    </tr>
  );
};

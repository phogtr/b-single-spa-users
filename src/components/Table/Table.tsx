import React, { useEffect, useState } from "react";
import { getData, IUserData } from "../../api/user.api";
import { EachRow } from "./EachRow/EachRow";
import "./Table.style.css";

export const Table: React.FC<{}> = () => {
  const [data, setData] = useState<IUserData[]>([]);

  useEffect(() => {
    getData().then((item) => {
      setData(item);
    });
  }, []);

  if (data.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <table className="table__container">
        <tbody>
          <tr className="table__row">
            <th>id</th>
            <th>username</th>
            <th>phone</th>
          </tr>
          {data.map((item) => (
            <EachRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

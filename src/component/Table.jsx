import React from "react";
import { getValueByKeys } from "../utils/getValueByKeys";
import "./style.css";

const Table = ({ columns = [], dataSource = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data, index) => (
          <tr key={index}>
            {columns.map((dataColumn) => (
              <td data-column={dataColumn.title} key={dataColumn.key}>
                {getValueByKeys(data, dataColumn.dataIndex)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table);

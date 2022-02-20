import React, { useState } from "react";
import "./styles.css";

export const Table = (props) => {
  const [field, setField] = useState("name");
  const [ascending, setAscending] = useState(false);

  return (
    <table>
      <caption>
        data ({field} {ascending ? "asc" : "desc"})
      </caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => {
                setField("name");
                setAscending(!ascending);
              }}
            >
              Name {field === "name" ? (ascending ? ">" : "<") : ""}
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                setField("phone");
                setAscending(!ascending);
              }}
            >
              phone {field === "phone" ? (ascending ? ">" : "<") : ""}
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => {
                setField("suite");
                setAscending(!ascending);
              }}
            >
              In suite {field === "suite" ? (ascending ? ">" : "<") : ""}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data
          .sort((a, b) => {
            if (ascending ? a[field] < b[field] : a[field] > b[field]) {
              return -1;
            } else {
              return 1;
            }
          })
          .map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.phone}</td>
              <td>{item.suite}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

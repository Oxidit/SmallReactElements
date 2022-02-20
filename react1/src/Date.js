import React from "react";

export const Date = (props) => {
  const date = props.value;
  const [dt, setDate] = React.useState(date);
  const isDateValid = /^\d{2}.\d{2}.\d{4}$/.test(dt);

  return (
    <input
      type="text"
      className={isDateValid ? "valid" : "invalid"}
      defaultValue={dt}
      onChange={(ev) => {
        setDate(ev.target.value);
      }}
    />
  );
};

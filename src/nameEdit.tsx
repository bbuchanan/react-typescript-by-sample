import * as React from "react";
import { Fragment } from "react";

interface Props {
  userName: string;
  onChange: (event) => void;
}

export const NameEditComponent = (props: Props) => {
  return (
    <Fragment>
      <label>Update Name:</label>
      <input value={props.userName} onChange={props.onChange} />
    </Fragment>
  );
};

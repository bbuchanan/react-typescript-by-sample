import * as React from "react";

interface Props {
  editingUserName: string;
  onEditingNameUpdated: (newEditingName: string) => any;
  onNameUpdateRequest: () => void;
}

export const NameEditComponent = (props: Props) => {
  return (
    <div>
      <label>Update Name:</label>
      <input
        value={props.editingUserName}
        onChange={(e): void =>
          props.onEditingNameUpdated((e.target as HTMLInputElement).value)
        }
      />
      <button className="btn btn-default" onClick={props.onNameUpdateRequest}>
        Change
      </button>
    </div>
  );
};

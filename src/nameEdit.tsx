import * as React from "react";
import { Fragment } from "react";
import { Component } from "react";

interface Props {
  editingUserName: string;
  onEditingNameUpdated: (newEditingName: string) => any;
  onNameUpdateRequest: () => void;
}

export class NameEditComponent extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div>
        <label>Update Name:</label>
        <input
          value={this.props.editingUserName}
          onChange={(e): void =>
            this.props.onEditingNameUpdated(
              (e.target as HTMLInputElement).value
            )
          }
        />
        <button
          className="btn btn-default"
          onClick={this.props.onNameUpdateRequest}
        >
          Change
        </button>
      </div>
    );
  }
}

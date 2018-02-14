import * as React from "react";
import { Fragment } from "react";
import { Component } from "react";

interface Props {
  initialUserName: string;
  onNameUpdated: (newName: string) => any;
}

interface State {
  editingName: string;
}

export class NameEditComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { editingName: this.props.initialUserName };
  }

  onChange = event => {
    this.setState({
      editingName: event.target.value
    });
  };

  onNameSubmit = (event: any): any => {
    this.props.onNameUpdated(this.state.editingName);
  };

  public render() {
    return (
      <div>
        <label>Update Name:</label>
        <input value={this.state.editingName} onChange={this.onChange} />
        <input
          type="submit"
          value="Change"
          className="btn btn-default"
          onClick={this.onNameSubmit}
        />
      </div>
    );
  }
}

import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

interface Props {}

interface State {
  userName: string;
  editingUserName: string;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const defaultUserName = "default";
    this.state = {
      userName: defaultUserName,
      editingUserName: defaultUserName
    };
  }

  setUserNameState = () => {
    this.setState({
      userName: this.state.editingUserName
    });
  };

  updateEditingName = (editingName: string): void => {
    this.setState({
      editingUserName: editingName
    });
  };

  public render() {
    return (
      <div>
        <HelloComponent userName={this.state.userName} />
        <NameEditComponent
          editingUserName={this.state.editingUserName}
          onEditingNameUpdated={this.updateEditingName}
          onNameUpdateRequest={this.setUserNameState}
        />
      </div>
    );
  }
}

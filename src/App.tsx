import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

interface Props {}

interface State {
  userName: string;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { userName: "enterUserName" };
  }

  setUserNameState = (newName: string) => {
    this.setState({
      userName: newName
    });
  };

  public render() {
    return (
      <div>
        <HelloComponent userName={this.state.userName} />
        <NameEditComponent
          initialUserName={this.state.userName}
          onNameUpdated={this.setUserNameState}
        />
      </div>
    );
  }
}

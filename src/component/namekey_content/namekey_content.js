import React from "react";

export default class Keycontent extends React.Component {
  render() {
    const { key, content  } = this.props;

    return (
        <div class="col-md-4">
          <span>{key}</span>:<span></span>
        </div>
    );
  }
}

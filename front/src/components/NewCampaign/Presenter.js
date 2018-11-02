import React from "react";

import View from "./View";

export default class Presenter extends React.Component {
  state = {};

  render() {
    return <View {...this.state} />;
  }
}

import React from "react";

import View from "./View";

export default class Presenter extends React.Component {
  state = {
    visitsGoal: 0,
    startDate: null,
    endDate: null,
    cpv: 0
  };

  render() {
    return <View {...this.state} />;
  }
}

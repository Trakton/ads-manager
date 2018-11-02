import { connect } from "react-mvp";

import Model from "./Model/index";
import Presenter from "./Presenter/index";
import View from "./View/index";

export default connect(
  Model,
  Presenter,
  View
);

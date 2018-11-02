import { Presenter } from "react-mvp";

export default class LoginPresenter extends Presenter {
  constructor(model, setModel) {
    super(model, setModel);
  }

  onUsernameChange = (e, { value }) => {
    this.setModel({ username: value, error: false });
  };

  onPasswordChange = (e, { value }) => {
    this.setModel({ password: value, error: false });
  };

  onSubmit = () => {
    this.setModel({ error: true });
  };
}

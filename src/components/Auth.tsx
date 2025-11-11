import { useState } from "react";

const Auth = ({ setPageHome }) => {
  const Views = {
    Default: "Default",
    Register: "Register",
    SignIn: "SignIn"
  };

  const [view, setView] = useState(Views.Default);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickRegister = () => setView("Register");
  const handleClickSignIn = () => setView("SignIn");

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleClickSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      setPageHome();
    }
  };

  const handleClickCancel = (event) => {
    event.preventDefault();

    setView("Default");
    setEmail("");
    setPassword("");
  };

  switch (view) {
    case "Default":
      return (
        <>
          <button type="button" onClick={handleClickSignIn}>
            Sign In
          </button>
          <button type="button" onClick={handleClickRegister}>
            Register
          </button>
        </>
      );
    case "Register":
    case "SignIn":
      return (
        <form>
          <label>
            Email:
            <input onChange={handleChangeEmail} type="email" value={email} />
          </label>
          <label>
            Password:
            <input
              onChange={handleChangePassword}
              type="password"
              value={password}
            />
          </label>
          <button type="submit" onClick={handleClickSubmit}>
            Submit
          </button>
          <button type="reset" onClick={handleClickCancel}>
            Cancel
          </button>
        </form>
      );
  }
};

export default Auth;
